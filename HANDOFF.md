# Consensus Website — Handoff

_Build date: 2 November 2026 · Branch: `develop`_

## 1. URLs

| | |
|---|---|
| GitHub repository | https://github.com/advictorem/consensus |
| Vercel staging (develop) | _pending — see §9_ |
| Production | **Not connected.** `consensusinc.com` and the existing site are untouched. |

## 2. Pages implemented

| Route | Template | Notes |
|---|---|---|
| `/` | Homepage | Video hero → Who we are → Featured work (5) → Capabilities (accordion rows) → Client grid → Consensus difference → Journal (3) → Footer |
| `/about` | About | Hero, intro, two pillars (alternating image/text), statistics grid, leadership grid, CTA |
| `/what-we-do` | Capabilities | Index + six numbered editorial sections with services, related work, CTAs |
| `/work` | Portfolio | Filterable asymmetric grid (All / Campaigns / Creative / Community / Digital / Strategy) |
| `/work/[slug]` | Project detail | Hero, intro, Challenge / Strategy / Execution, Vimeo (click-to-load), gallery, verified outcomes, related, CTA — 7 projects |
| `/sectors` | Sector landing | Editorial list of 7 sectors |
| `/sectors/[slug]` | Sector detail | Context, capabilities, challenges, perspective, case studies (Overview → Challenge → Insight → Strategy → Execution → Impact → Related capabilities), next-sector link |
| `/journal` | Journal | Category strip, featured article, grid |
| `/journal/[slug]` | Article | Metadata, body, related, Article JSON-LD; drafts are labelled + `noindex` |
| `/contact` | Contact | Verified contact details, form (original field structure preserved), location panels |
| `/api/contact` | Route handler | Validation, honeypot, Resend delivery |
| `/sitemap.xml`, `/robots.txt`, 404 | | robots disallows indexing on Vercel preview environments |

## 2b. Languages (EN / ES)

- Routing: English at `/…`, Spanish at `/es/…`; `/en/…` redirects to the canonical root URL. Implemented in `src/proxy.ts` + `src/app/[locale]`.
- Switcher: `EN | ES` in the desktop header, mobile header and mobile menu; keeps the current page.
- SEO: `<html lang>`, `hreflang` alternates (en / es / x-default) on every page, localized titles/descriptions/OG locale, both locales in `sitemap.xml`, Article JSON-LD carries `inLanguage`.
- Translations: UI strings in `src/i18n/ui.ts`; content in `src/content/es/*.ts` (home, about, capabilities, projects, sectors, case studies, team, journal, contact form labels, locations). Translated by Claude in neutral Latin American / US Spanish — **recommend a native-speaker review before launch**, especially: "agencia de registro" (agency of record), "grupos de interés" (stakeholders), the Lottery slogan "Tú juegas, las escuelas ganan.", and the contact form label "Su cargo" (Your Title).
- Not yet translated: image `alt` text on project/sector/capability images (English), client names, and the contact form's server-side field labels in the delivered email (English).

## 3. Motion & interactions

- **Scroll-rotating badge** (`ScrollRotatingBadge`): fixed bottom-right, 60px mobile / 84px desktop. The circular badge ring rotates **clockwise** from the absolute scroll delta (speed-proportional, eased stop, rAF, transform-only, `mix-blend-mode: difference`), the triangle icon stays fixed in the center. Hidden until the user leaves the top of the page; links to `/contact`; respects reduced motion.
- **Ghost buttons**: pill, 1px white border, Mongoose Light uppercase +0.1em; hover animates the brand gradient fill (`#40BFED → #F89520 → #EF73AC → #9E479B`) with arrow nudge; focus-visible and touch states.
- **Reveals**: `[data-reveal]` fade/rise, `[data-reveal="mask"]` clip reveal for images, `[data-reveal="lines"]` line-by-line masked headline reveal — all CSS, triggered by one IntersectionObserver.
- **Hero video**: autoplay/muted/loop/playsInline, 1080p source for ≥1024px and 720p below, poster fallback, paused when off-screen and under reduced motion.
- **Interior heroes**: full-bleed LA photography, 30% black overlay, subtle vertical parallax on desktop only (disabled on mobile / reduced motion).
- **Header**: transparent over hero → translucent black after scroll; active page indicator; full-screen mobile menu with staggered entrance.
- **Capabilities accordion**, **portfolio image zoom**, **logo hover**, **location panel hover**, **footer "LET'S TALK." gradient hover**.
- GSAP is installed (`gsap`, `@gsap/react`) but not yet required — everything shipped runs on native CSS + small rAF hooks, which keeps the bundle small. Use GSAP/ScrollTrigger for any future pinned or scrubbed sequences.

## 4. Integrated assets

| Asset | Location |
|---|---|
| Stacked logo, icon, cursive wordmark, circular badge, outline logo (supplied SVGs) | `public/brand/` |
| Supplied hero MP4 → re-encoded h264 1080p (8.2 MB) and 720p (3.8 MB), audio stripped, faststart | `public/media/` (original 44 MB file intentionally not committed) |
| Hero poster frame | `public/media/hero-poster.jpg` |
| Supplied photography: Urban Light, palm-lined DTLA road, Griffith Observatory, Venice/Marina coast aerial, SF skyline in fog | `public/images/la/` (2400px + 1200px JPEGs) |
| Roboto 300/400/700 self-hosted (OFL) | `src/app/fonts/` |

## 5. Placeholders & missing assets (action required)

| Item | Current state | To resolve |
|---|---|---|
| **Mongoose font** | Adobe kit `https://use.typekit.net/yrz4xwt.css` set in `.env.example` / `.env.local`; falls back to Oswald when unset | Set the same value in Vercel env (Preview + Production). Confirm the kit includes Mongoose Light (300) and Bold (700) and that its allowed domains include the Vercel preview domain and the production domain. The CSS font-family is expected to be `"mongoose"`. |
| **Client logos** | Typeset names in the display face (`data-placeholder="logo"`) | Drop white SVG/PNGs in `public/images/clients/` and set `src` in `src/content/clients.ts`. The current site hosts 50 colour PNGs at `consensusinc.com/wp-content/uploads/2017/01/…` (list in `/home/claude/research/consensus-research.md`); use official white marks rather than desaturating these. Nike, Live Nation, LA Phil, Hollywood Bowl, California Lottery, LAFC, U.S. Chamber, Goodman and Stemilt are from the brief and not on the current site — confirm permission to display. |
| **Leadership portraits** | Initials placeholder (`data-placeholder="portrait"`) | Add B&W portraits to `public/images/team/` and set `portrait` in `src/content/team.ts`. |
| **Project imagery** | Supplied LA photography used as stand-ins for every project thumbnail/hero | Replace with authentic campaign stills (Lottery: pull frames from the Vimeo showcase; Goodman / Hollywood Bowl / Nestlé: from the capabilities deck). Each project lists this under `approvals`. |
| **Capabilities deck** (`Consensus-Inc-Quals-Deck(2025).pdf`) | Not received | Case-study detail for Goodman, Hollywood Bowl and Nestlé is limited to the brief's one-liners; outcomes read "to be published upon client approval". |
| **Client-logo and statistics reference screenshots** | Not received | Layouts built from the Allison reference description and the brief. |
| **Contact form backend** | Fully wired to Resend; returns a clear 503 with the email address until `RESEND_API_KEY` is set | Create a Resend account, verify `consensusinc.com` as a sending domain, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel. |

## 6. Outstanding content approvals

1. **California Lottery results** (37→60% statewide trust, 35→59% Hispanic trust, sentiment/intent) — from the 2025 deck; require client approval and attribution before publishing.
2. **Nestlé (City of Ripon)** — crisis case; factual sensitivity; client approval required.
3. **Goodman North America** and **Hollywood Bowl** — scope and outcomes to be confirmed against the deck.
4. **Leadership titles** — the live site lists *Josh Gertler, President & CEO*; *Nazan Armenian, Executive Vice President, Partner*; *Anthony Wiktor, Creative Art Director*; *Ara Soudjian, Video Director/Producer*; *Garen Mirzaian, Motion Graphics/Animator*. The brief uses different titles (Partner/Principal, Chief Content Strategist, Executive Creative Director, Multimedia Production Lead). **Live-site titles are used**; change in `src/content/team.ts` once confirmed. **Sarah Hansen** (Director of Digital Strategy) is in the brief but not on the current site — included with `verified: false` and a minimal bio; confirm or remove. Also on the live site but not in the brief: Abraham Mercado (VP), Michelle Sinning (VP), Brianna Thorpe, Jaylen Shin.
5. **Statistics** — "30+ professionals" and "2 leading partners" are from the 2025 deck; confirm as current. "40 years in 2026" is derived from the 1986 founding date.
6. **Journal drafts** — the three proposed titles are clearly marked *Draft*, unpublished, no author/date, `noindex`. The two real items ("Consensus in the News", Apr 2022; "Three Ways WeWork Is Killing the Commute", Aug 2017 on Medium) are preserved with source links.
7. **Careers link** — points to LinkedIn per the brief; note the current site links to BambooHR (`consensusinc.bamboohr.com/jobs`). Switch in `src/lib/site.ts` if preferred.
8. **Northern California** — presented as "regional presence", not an office. No street addresses are shown (per brief); the current site lists 3500 W Olive Ave, Suite 300, Burbank.
9. **Certifications** (4× SBE, 1× LSBE on the current site) are not yet on the new site — worth adding to About or the footer if still current.
10. **Sector taxonomy** — the current site's seven industries (Construction, Education, Energy/Water, Public Facilities, Real Estate & Land Use, Remediation, Transportation) were mapped onto the brief's seven sectors. Six verified case studies from the live site (Expo Line Phase 2, West LA VA, Tule Wind, Burbank Town Center, Crespi Carmelite, Honeywell) were added so no sector is empty.

## 7. Local development

```bash
git clone https://github.com/advictorem/consensus.git Github/consensus
cd Github/consensus
git checkout develop
npm install
cp .env.example .env.local      # add NEXT_PUBLIC_ADOBE_FONTS_KIT, RESEND_API_KEY …
npm run dev                      # http://localhost:3000
npm run lint && npm run build    # before pushing
```

Content lives in `src/content/*.ts`; see README → *Adding content*.

## 8. Deployment

- Pushes to `develop` → Vercel preview deployment (staging URL above).
- Merge `develop` → `main` only for approved releases; `main` is the production branch in Vercel but **no production domain is attached**.
- Required Vercel environment variables (Preview + Production): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ADOBE_FONTS_KIT`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
- Framework preset: Next.js (auto-detected). Build command `next build`, Node 22.

## 9. QA performed

- `tsc --noEmit`, `eslint`, `next build` — clean (34 static routes).
- Playwright full-page captures at 1440×900 and 390×844 for all templates: no console errors, no page errors, no horizontal overflow.
- Verified: video playback + poster, header scroll state, mobile menu, accordion, filters, badge rotation, footer wordmark, form validation (client + server), 404.
- Not yet run: Lighthouse on the deployed URL (do this after the Adobe kit is in place so font loading is measured accurately).
