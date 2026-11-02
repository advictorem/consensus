"use client";

import Link from "@/components/Link";
import { useState } from "react";
import type { Capability } from "@/content/types";
import { Arrow } from "./GhostButton";
import { useUI } from "@/i18n/LocaleProvider";

/**
 * Numbered editorial rows (accordion). One open at a time; keyboard accessible.
 */
export default function CapabilityRows({ items }: { items: Capability[] }) {
  const ui = useUI();
  const [open, setOpen] = useState<string | null>(items[0]?.slug ?? null);

  return (
    <ul className="border-t border-white/12" role="list">
      {items.map((c) => {
        const isOpen = open === c.slug;
        const panelId = `cap-${c.slug}`;
        return (
          <li key={c.slug} className="border-b border-white/12" data-reveal>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : c.slug)}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-5 py-7 text-left md:grid-cols-[6rem_1fr_auto] md:gap-x-8 md:py-9"
            >
              <span className="t-label text-white/45 transition-colors group-hover:text-white">{c.number}</span>
              <span className="display t-h3 leading-[0.95] transition-colors duration-300 group-hover:gradient-text">
                {c.title}
              </span>
              <span
                aria-hidden="true"
                className="relative mt-1 h-6 w-6 self-center justify-self-end"
              >
                <span className="absolute left-0 top-1/2 h-px w-full bg-white" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px bg-white transition-transform duration-500 ${
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
                <div className="grid gap-8 pb-10 md:grid-cols-[6rem_1fr_auto] md:gap-x-8 md:pb-12">
                  <span className="hidden md:block" />
                  <div className="max-w-3xl">
                    <p className="t-body text-white/80">{c.short}</p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {c.services.slice(0, 5).map((s) => (
                        <li key={s} className="t-label !text-[0.72rem] text-white/50">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/what-we-do#${c.slug}`}
                    tabIndex={isOpen ? 0 : -1}
                    className="link-line t-label inline-flex items-center gap-2 self-start text-white/80 hover:text-white md:justify-self-end"
                  >
                    {ui.common.learnMore} <Arrow className="!h-4 !w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
