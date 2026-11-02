/**
 * Locale-aware content accessors. English modules are canonical; Spanish
 * files under ./es export full objects (HOME, ABOUT, LOCATIONS) or
 * per-slug overrides of the translatable fields, merged here.
 */
import type { Locale } from "@/i18n/config";
import { HOME } from "./home";
import { ABOUT } from "./about";
import { CAPABILITIES } from "./capabilities";
import { PROJECTS } from "./projects";
import { SECTORS } from "./sectors";
import { CASE_STUDIES } from "./case-studies";
import { TEAM } from "./team";
import { ARTICLES } from "./journal";
import { CONTACT_FORM_FIELDS, LOCATIONS } from "./contact";
import { HOME_ES } from "./es/home";
import { ABOUT_ES } from "./es/about";
import { CAPABILITIES_ES } from "./es/capabilities";
import { PROJECTS_ES } from "./es/projects";
import { SECTORS_ES } from "./es/sectors";
import { CASE_STUDIES_ES } from "./es/case-studies";
import { TEAM_ES } from "./es/team";
import { ARTICLES_ES } from "./es/journal";
import { LOCATIONS_ES, CONTACT_FORM_FIELDS_ES } from "./es/contact";

function merge<T extends { slug: string }>(list: T[], overrides: Record<string, Partial<NoInfer<T>>>, locale: Locale): T[] {
  if (locale === "en") return list;
  return list.map((item) => ({ ...item, ...(overrides[item.slug] ?? {}) }));
}

export const getHome = (locale: Locale) => (locale === "es" ? HOME_ES : HOME);
export const getAbout = (locale: Locale) => (locale === "es" ? ABOUT_ES : ABOUT);
export const getCapabilities = (locale: Locale) => merge(CAPABILITIES, CAPABILITIES_ES, locale);
export const getProjects = (locale: Locale) => merge(PROJECTS, PROJECTS_ES, locale);
export const getSectors = (locale: Locale) => merge(SECTORS, SECTORS_ES, locale);
export const getCaseStudies = (locale: Locale) => merge(CASE_STUDIES, CASE_STUDIES_ES, locale);
export const getTeam = (locale: Locale) => merge(TEAM, TEAM_ES, locale);
export const getArticles = (locale: Locale) => merge(ARTICLES, ARTICLES_ES, locale);
export const getLocations = (locale: Locale) => (locale === "es" ? LOCATIONS_ES : LOCATIONS);
export const getContactFormFields = (locale: Locale) =>
  locale === "en" ? CONTACT_FORM_FIELDS : CONTACT_FORM_FIELDS.map((f) => ({ ...f, ...(CONTACT_FORM_FIELDS_ES[f.name] ?? {}) }));

export const getCapability = (locale: Locale, slug: string) => getCapabilities(locale).find((c) => c.slug === slug);
export const getProject = (locale: Locale, slug: string) => getProjects(locale).find((p) => p.slug === slug);
export const getSector = (locale: Locale, slug: string) => getSectors(locale).find((s) => s.slug === slug);
export const getCaseStudy = (locale: Locale, slug: string) => getCaseStudies(locale).find((c) => c.slug === slug);
export const getArticle = (locale: Locale, slug: string) => getArticles(locale).find((a) => a.slug === slug);
export const getFeaturedProjects = (locale: Locale, n = 5) =>
  [...getProjects(locale)].sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99)).slice(0, n);
export const getLatestArticles = (locale: Locale, n: number) => getArticles(locale).slice(0, n);
