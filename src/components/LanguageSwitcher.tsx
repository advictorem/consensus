"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, localeHref, stripLocale } from "@/i18n/config";
import { useLocale, useUI } from "@/i18n/LocaleProvider";

export default function LanguageSwitcher({ className = "", size = "sm" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const locale = useLocale();
  const ui = useUI();
  const pathname = usePathname() ?? "/";
  const { path } = stripLocale(pathname);

  return (
    <nav aria-label={ui.a11y.language} className={`flex items-center ${size === "lg" ? "gap-5" : size === "md" ? "gap-4" : "gap-3"} ${className}`}>
      {LOCALES.map((l, i) => {
        const active = l === locale;
        return (
          <span key={l} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden="true" className={`w-px bg-white/30 ${size === "sm" ? "h-3" : "h-4"}`} />}
            <NextLink
              href={localeHref(path, l)}
              prefetch={false}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              aria-label={LOCALE_LABELS[l].name}
              className={`t-label transition-colors ${size === "lg" ? "!text-[1.1rem]" : size === "md" ? "!text-[1.15rem] font-bold" : "!text-[0.72rem]"} ${
                active ? "gradient-text" : "text-white/70 hover:text-white"
              }`}
            >
              {LOCALE_LABELS[l].short}
            </NextLink>
          </span>
        );
      })}
    </nav>
  );
}
