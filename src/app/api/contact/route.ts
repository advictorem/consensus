import { NextResponse } from "next/server";
import { CONTACT, CONTACT_FORM_FIELDS } from "@/content/contact";

/**
 * Contact form backend.
 *
 * Delivery provider: Resend (https://resend.com). Set these env vars in Vercel:
 *   RESEND_API_KEY     – API key
 *   CONTACT_TO_EMAIL   – inbox that receives submissions (defaults to CONTACT.email)
 *   CONTACT_FROM_EMAIL – verified sender, e.g. "Consensus Website <web@consensusinc.com>"
 *
 * Without RESEND_API_KEY the endpoint validates and returns 503 so the UI
 * never pretends a message was delivered.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot
  if (typeof body._hp === "string" && body._hp.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Thanks." });
  }

  const errors: string[] = [];
  const clean: Record<string, string> = {};
  for (const f of CONTACT_FORM_FIELDS) {
    const raw = body[f.name];
    const v = Array.isArray(raw) ? raw.map(String).join(", ") : String(raw ?? "").trim();
    if (f.required && !v) errors.push(`${f.label} is required.`);
    if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errors.push("Email address is invalid.");
    clean[f.label] = v.slice(0, 5000);
  }
  if (errors.length) {
    return NextResponse.json({ ok: false, message: errors.join(" ") }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Consensus Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set. Submission not delivered:", clean);
    return NextResponse.json(
      {
        ok: false,
        message: `The contact form isn't connected to a mail service yet. Please email us directly at ${CONTACT.email}.`,
      },
      { status: 503 },
    );
  }

  const text = Object.entries(clean)
    .map(([k, v]) => `${k}: ${v || "—"}`)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: clean["Email"] || undefined,
      subject: `Website inquiry${clean["Subject"] ? `: ${clean["Subject"]}` : ""} — ${clean["Name"] ?? ""}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, detail);
    return NextResponse.json(
      { ok: false, message: `We couldn't send your message right now. Please email ${CONTACT.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: "Thanks—your message is on its way. We'll be in touch soon." });
}
