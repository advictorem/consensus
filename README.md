# Consensus Inc. — Website

New corporate website for [Consensus Inc.](https://consensusinc.com), an independent public relations, strategic communications, community engagement, marketing, and creative agency headquartered in Southern California.

**Meaningful connections. Measurable impact.**

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Deployed on Vercel.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Cache Components) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + design tokens in `src/app/globals.css` |
| Fonts | **Mongoose** via Adobe Fonts web project (display) · Roboto self-hosted (body) |
| Motion | Native CSS transitions + IntersectionObserver reveals; rAF-driven badge rotation and parallax |
| Forms | Route handler `/api/contact` → Resend |
| i18n | English at `/`, Spanish at `/es/…` (proxy rewrite + `[locale]` segment); UI strings in `src/i18n/ui.ts`, content overrides in `src/content/es/` |
| Hosting | Vercel (`develop` → preview, `main` → production) |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                   # http://localhost:3000
```

Other scripts: `npm run build` · `npm run start` · `npm run lint`.

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (sitemap, OG, canonical tags) |
| `NEXT_PUBLIC_ADOBE_FONTS_KIT` | Adobe Fonts kit CSS URL that serves **Mongoose** (e.g. `https://use.typekit.net/xxxxxxx.css`). Without it the display face falls back to Oswald. |
| `RESEND_API_KEY` | Contact form delivery. Without it the form returns a clear 503 and points to the email address. |
| `CONTACT_TO_EMAIL` | Inbox for submissions (default `info@consensusinc.com`) |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend |

## Project structure

```
src/
  proxy.ts             Locale routing (/ → en, /es → es, /en → redirect)
  i18n/                config (locales, localeHref, alternates), ui.ts (UI strings EN/ES), LocaleProvider
  app/                 Routes (App Router)
    [locale]/          layout.tsx (html lang, fonts, header/footer) + all pages
      page.tsx         Homepage
      about/ what-we-do/ work/[slug] sectors/[slug] journal/[slug] contact/
    api/contact/       Form backend
    sitemap.ts robots.ts not-found.tsx
    globals.css        Design tokens, type scale, button + reveal systems
    fonts/             Self-hosted Roboto (+ Oswald fallback), OFL
  components/          Reusable UI (SiteHeader, VideoHero, InteriorHero, GhostButton,
                       ScrollRotatingBadge, ClientLogoGrid, FeaturedWorkGrid, ProjectCard,
                       CapabilityRow, StatisticsGrid, TeamMemberCard, SectorCard,
                       CaseStudyTemplate, JournalCard, ContactForm, LocationPanels, SiteFooter)
  content/             Structured content (CMS-ready): home, about, capabilities, projects,
                       case-studies, sectors, team, journal, clients, contact, types
    index.ts           Locale-aware getters (getProjects(locale), …)
    es/                Spanish translations (full objects or per-slug overrides)
  lib/                 site config (nav, CTA), formatting helpers
public/
  brand/               Official SVGs: stacked logo, icon, cursive wordmark, circular badge
  media/               Hero video (1080p/720p, h264) + poster
  images/la/           Los Angeles / California photography (2400px + 1200px variants)
  images/clients/      Drop white client logo SVG/PNGs here (see HANDOFF.md)
  images/team/         Drop leadership portraits here (see HANDOFF.md)
```

Content is separated from presentation: edit the files in `src/content/` to change copy, add a project, sector, case study, team member, or article. Each file exports typed arrays matching `src/content/types.ts`, which makes a future headless-CMS migration a drop-in replacement of those exports.

## Adding content

- **Project**: add to `PROJECTS` in `src/content/projects.ts` → auto-creates `/work/<slug>`, appears in Work grid and filters.
- **Case study**: add to `CASE_STUDIES` and reference its slug from a sector's `caseStudies`.
- **Sector**: add to `SECTORS` → auto-creates `/sectors/<slug>`.
- **Article**: add to `ARTICLES` in `src/content/journal.ts`. `status: "draft"` entries are labelled, excluded from the sitemap, and `noindex`.
- **Client logo**: place a white SVG/PNG in `public/images/clients/` and set `src` on the entry in `src/content/clients.ts`.
- **Team member**: set `portrait` on the entry in `src/content/team.ts`.

## Languages

- English is canonical and lives at the root (`/about`). Spanish lives under `/es` (`/es/about`). `/en/...` 308-redirects to the root URL.
- UI strings (nav, buttons, labels, page titles) → `src/i18n/ui.ts`.
- Content → the EN file in `src/content/*.ts` plus the matching `src/content/es/*.ts` override keyed by slug. Add the EN entry first, then its ES override; untranslated fields fall back to English.
- Internal links use `@/components/Link`, which prefixes the active locale automatically. Add a locale by extending `LOCALES` in `src/i18n/config.ts`, adding a dictionary in `ui.ts`, and a content override folder.

## Git workflow

- `main` — approved releases only (production).
- `develop` — active development; auto-deploys to a Vercel preview.

## Deployment

See `HANDOFF.md` for the staging URL, deployment steps, and outstanding approvals.
