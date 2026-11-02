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
    <nav aria-label={ui.a11y.language} className={`flex items-center ${size === "lg" ? "gap-3" : size === "md" ? "gap-2" : "gap-1.5"} ${className}`}>
      {LOCALES.map((l, i) => {
        const active = l === locale;
        return (
          <span key={l} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className={`w-px bg-white/35 ${size === "sm" ? "h-3" : "h-5"}`} />}
            <NextLink
              href={localeHref(path, l)}
              prefetch={false}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              aria-label={LOCALE_LABELS[l].name}
              className={`t-label flex items-center justify-center rounded-full transition-colors ${
                size === "lg" ? "h-11 w-11 !text-[1.05rem]" : size === "md" ? "h-10 w-10 !text-[0.95rem]" : "h-8 w-8 !text-[0.72rem]"
              } ${active ? "bg-white !text-black" : "text-white/75 hover:text-white"}`}
            >
              {LOCALE_LABELS[l].short}
            </NextLink>
          </span>
        );
      })}
    </nav>
  );
}
