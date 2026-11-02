import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/content/projects";
import { SECTORS } from "@/content/sectors";
import { ARTICLES } from "@/content/journal";
import { LOCALES, localeHref } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date("2026-11-01");
  const entries: { path: string; lastModified: Date; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
    ...["", "/about", "/what-we-do", "/work", "/sectors", "/insights", "/contact"].map((p) => ({
      path: p || "/",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...PROJECTS.map((p) => ({ path: `/work/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...SECTORS.map((s) => ({ path: `/sectors/${s.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...ARTICLES.filter((a) => a.status === "published").map((a) => ({
      path: `/insights/${a.slug}`,
      lastModified: a.date ? new Date(a.date) : now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return entries.flatMap(({ path, ...rest }) =>
    LOCALES.map((locale) => ({
      url: `${base}${localeHref(path, locale)}`,
      ...rest,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${base}${localeHref(path, l)}`])),
      },
    })),
  );
}
