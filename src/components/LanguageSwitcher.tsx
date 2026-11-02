"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, localeHref, stripLocale } from "@/i18n/config";
import { useLocale, useUI } from "@/i18n/LocaleProvider";

// Full literal class strings — Tailwind scans source text, so these can't be
// assembled from fragments at runtime.
const SIZES = {
  sm: { track: "h-8", label: "px-3.5 !text-[0.78rem]" },
  md: { track: "h-10", label: "px-4 !text-[0.9rem]" },
  lg: { track: "h-12", label: "px-5 !text-[1.05rem]" },
} as const;

/**
 * Two-up language toggle: an outlined pill track with a white knob that slides
 * to whichever locale is active. Both halves stay real links, so the control
 * works without JS and reads correctly to assistive tech.
 */
export default function LanguageSwitcher({ className = "", size = "sm" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const locale = useLocale();
  const ui = useUI();
  const pathname = usePathname() ?? "/";
  const { path } = stripLocale(pathname);
  const s = SIZES[size];
  const activeIndex = Math.max(0, LOCALES.indexOf(locale));

  return (
    <nav
      aria-label={ui.a11y.language}
      className={`relative inline-flex ${s.track} items-stretch overflow-hidden rounded-full border border-white/35 ${className}`}
    >
      {/* Sliding knob */}
      <span
        aria-hidden="true"
        className="absolute inset-y-[2px] left-[2px] rounded-full bg-white transition-transform duration-500 ease-[var(--ease-out)]"
        style={{
          width: `calc((100% - 4px) / ${LOCALES.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <NextLink
            key={l}
            href={localeHref(path, l)}
            prefetch={false}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            aria-label={LOCALE_LABELS[l].name}
            className={`t-label relative z-10 flex flex-1 items-center justify-center ${s.label} !tracking-[0.12em] transition-colors duration-300 ${
              active ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {LOCALE_LABELS[l].short}
          </NextLink>
        );
      })}
    </nav>
  );
}
