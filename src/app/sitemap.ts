import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/content/projects";
import { SECTORS } from "@/content/sectors";
import { ARTICLES } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date("2026-11-01");
  const statics = ["", "/about", "/what-we-do", "/work", "/sectors", "/journal", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const work = PROJECTS.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 }));
  const sectors = SECTORS.map((s) => ({ url: `${base}/sectors/${s.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 }));
  const journal = ARTICLES.filter((a) => a.status === "published").map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...statics, ...work, ...sectors, ...journal];
}
