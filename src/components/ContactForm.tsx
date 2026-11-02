"use client";

import { useState, type FormEvent } from "react";
import GhostButton from "./GhostButton";
import { CONTACT } from "@/content/contact";
import { getContactFormFields } from "@/content";
import { useLocale, useUI } from "@/i18n/LocaleProvider";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const locale = useLocale();
  const ui = useUI();
  const CONTACT_FORM_FIELDS = getContactFormFields(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(fd: FormData) {
    const next: Record<string, string> = {};
    for (const f of CONTACT_FORM_FIELDS) {
      if (f.type === "checkbox-group") continue;
      const v = String(fd.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = ui.common.fieldRequired;
      if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) next[f.name] = ui.common.emailInvalid;
    }
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const firstKey = Object.keys(errs)[0];
      (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const payload: Record<string, unknown> = {};
      for (const f of CONTACT_FORM_FIELDS) {
        if (f.type === "checkbox-group") payload[f.name] = fd.getAll(f.name);
        else payload[f.name] = fd.get(f.name);
      }
      payload["_hp"] = fd.get("website") ?? ""; // honeypot
      payload["_locale"] = locale;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message || ui.common.genericError);
      setStatus("success");
      setMessage(data.message || ui.common.thanks);
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : ui.common.genericError);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-t border-white/12 py-12" data-reveal>
        <p className="display t-h3 gradient-text">{ui.common.messageReceived}</p>
        <p className="mt-4 max-w-[48ch] text-white/75">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-10 md:grid-cols-2 md:gap-x-12">
      {CONTACT_FORM_FIELDS.map((f) => {
        const err = errors[f.name];
        const full = f.span === 2;
        const id = `cf-${f.name}`;
        if (f.type === "checkbox-group") {
          return (
            <fieldset key={f.name} className={`field ${full ? "md:col-span-2" : ""}`}>
              <legend className="t-label mb-4 text-white/60">{f.label}</legend>
              <div className="grid gap-3">
                {f.options?.map((o) => (
                  <label key={o} className="checkbox">
                    <input type="checkbox" name={f.name} value={o} />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          );
        }
        return (
          <div key={f.name} className={`field ${full ? "md:col-span-2" : ""}`}>
            <label htmlFor={id}>
              {f.label}
              {f.required && <span aria-hidden="true" className="ml-1 text-pink">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={id}
                name={f.name}
                rows={5}
                required={f.required}
                aria-invalid={err ? "true" : undefined}
                aria-describedby={err ? `${id}-err` : undefined}
                placeholder={f.placeholder}
              />
            ) : f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} aria-invalid={err ? "true" : undefined} defaultValue="">
                <option value="" disabled>
                  {ui.common.selectPlaceholder}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={f.name}
                type={f.type}
                required={f.required}
                autoComplete={f.autoComplete}
                aria-invalid={err ? "true" : undefined}
                aria-describedby={err ? `${id}-err` : undefined}
                placeholder={f.placeholder}
              />
            )}
            {err && (
              <p id={`${id}-err`} className="error" role="alert">
                {err}
              </p>
            )}
          </div>
        );
      })}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <GhostButton type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? ui.common.sending : ui.common.sendMessage}
        </GhostButton>
        <p className="text-xs text-white/45">
          <span aria-hidden="true" className="text-pink">* </span>{ui.common.required}. {ui.common.preferEmail}{" "}
          <a className="link-line text-white/70" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-pink md:col-span-2">
          {message}
        </p>
      )}
    </form>
  );
}
