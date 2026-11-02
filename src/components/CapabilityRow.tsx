"use client";

import Link from "@/components/Link";
import { useState } from "react";
import type { Capability } from "@/content/types";
import { useUI } from "@/i18n/LocaleProvider";

/**
 * Numbered-free editorial rows (accordion). The title is a link to the
 * capability's section on What We Do (gradient fill on hover); the +/–
 * control expands the summary and bulleted services. One open at a time.
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
            <div className="grid grid-cols-[1fr_auto] items-center gap-x-5 py-7 md:gap-x-8 md:py-9">
              <Link href={`/what-we-do#${c.slug}`} className="display gradient-fill-hover t-h3 leading-[0.95]">
                {c.title}
              </Link>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={`${isOpen ? ui.a11y.closeMenu : ui.a11y.openMenu}: ${c.title}`}
                onClick={() => setOpen(isOpen ? null : c.slug)}
                className="relative flex h-10 w-10 items-center justify-center"
              >
                <span aria-hidden="true" className="relative block h-6 w-6">
                  <span className="absolute left-0 top-1/2 h-px w-full bg-white" />
                  <span className={`absolute left-1/2 top-0 h-full w-px bg-white transition-transform duration-500 ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                </span>
              </button>
            </div>
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
