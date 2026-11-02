"use client";

import { useState } from "react";
import type { Capability } from "@/content/types";

/**
 * Capability accordion. Hovering a row opens it (pointer devices); click and
 * keyboard still toggle for touch and assistive tech. The +/− control picks up
 * the brand gradient on hover.
 */
export default function CapabilityRows({ items }: { items: Capability[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.slug ?? null);

  return (
    <ul className="border-t border-white/12" role="list">
      {items.map((c) => {
        const isOpen = open === c.slug;
        const panelId = `cap-${c.slug}`;
        return (
          <li
            key={c.slug}
            className="group border-b border-white/12"
            data-reveal
            onMouseEnter={() => setOpen(c.slug)}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : c.slug)}
              onFocus={() => setOpen(c.slug)}
              className="grid w-full grid-cols-[1fr_auto] items-center gap-x-5 py-7 text-left md:gap-x-8 md:py-9"
            >
              <span className="display gradient-fill-hover t-h3 leading-[0.95]">{c.title}</span>
              <span aria-hidden="true" className="relative block h-6 w-6 shrink-0">
                <span className="accordion-bar absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2" />
                <span
                  className={`accordion-bar absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 transition-transform duration-500 ${
                    isOpen ? "scale-y-0" : "scale-y-100"
                  }`}
                />
              </span>
            </button>
            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-x-8 md:pb-12">
                  <p className="t-body text-white/80 md:col-span-6">{c.short}</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-[1rem] font-bold text-white/90 marker:text-white/40 md:col-span-5 md:col-start-8">
                    {c.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
