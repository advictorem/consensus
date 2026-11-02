export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; htmlLang: string; og: string }> = {
  en: { short: "EN", name: "English", htmlLang: "en", og: "en_US" },
  es: { short: "ES", name: "Español", htmlLang: "es", og: "es_US" },
};

export function isLocale(v: string | undefined): v is Locale {
  return !!v && (LOCALES as readonly string[]).includes(v);
}

/** Prefix an internal href for a locale. English lives at the root; Spanish under /es. */
export function localeHref(href: string, locale: Locale) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  if (locale === DEFAULT_LOCALE) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

/** Strip a locale prefix from a pathname → canonical (EN) path. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const m = pathname.match(/^\/(en|es)(?=\/|$)/);
  if (m && isLocale(m[1])) {
    const rest = pathname.slice(m[0].length) || "/";
    return { locale: m[1], path: rest };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}

export function alternates(path: string) {
  return {
    canonical: path,
    languages: {
      en: path,
      es: localeHref(path, "es"),
      "x-default": path,
    },
  };
}
