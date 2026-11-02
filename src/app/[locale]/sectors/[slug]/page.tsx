import type { Metadata } from "next";
import Link from "@/components/Link";
import { notFound } from "next/navigation";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import GhostButton, { Arrow } from "@/components/GhostButton";
import { SECTORS } from "@/content/sectors";
import { getSector, getSectors, getCapability, getCaseStudy } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

const splitAmp = (t: string) => {
  const sep = t.includes(" & ") ? " & " : t.includes(" y ") ? " y " : t.includes(" e ") ? " e " : null;
  if (!sep) return [t];
  const [a, ...rest] = t.split(sep);
  return [`${a}${sep.trimEnd()}`, rest.join(sep)];
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const s = getSector(locale, slug);
  if (!s) return {};
  return { title: `${s.title} — ${ui.pages.sectors.title}`, description: s.summary, alternates: alternates(`/sectors/${s.slug}`) };
}

export default async function SectorPage({ params }: Params) {
  const { slug, locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const s = getSector(locale, slug);
  if (!s) notFound();
  const all = getSectors(locale);
  const caps = s.capabilities.map((c) => getCapability(locale, c)).filter(Boolean);
  const studies = s.caseStudies.map((c) => getCaseStudy(locale, c)).filter(Boolean);
  const idx = all.findIndex((x) => x.slug === s.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <InteriorHero eyebrow={`${ui.common.sector} ${s.number}`} lines={splitAmp(s.title)} copy={s.positioning} image={s.image} compact />

      <section className="container-x pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6" data-reveal>
              {ui.common.industryContext}
            </p>
            <p className="t-lead text-white/90" data-reveal>
              {s.context}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="t-label mb-4 text-white/45">{ui.common.relevantCapabilities}</p>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {caps.map((c) => (
                <li key={c!.slug}>
                  <Link href={`/what-we-do#${c!.slug}`} className="group flex items-center justify-between py-3 text-[0.95rem] text-white/80 hover:text-white">
                    <span>
                      <span className="t-label mr-3 !text-[0.65rem] text-white/35">{c!.number}</span>
                      {c!.title}
                    </span>
                    <Arrow className="!h-4 !w-4 opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={ui.common.strategicChallenges} lines={ui.common.whatsAtStake} size="h3" />
          </div>
          <ol className="grid gap-6 lg:col-span-6 lg:col-start-7">
            {s.challenges.map((c, i) => (
              <li key={c} className="flex gap-6 border-t border-white/10 pt-5" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <span className="gradient-text display text-[1.6rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-body text-white/80">{c}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={ui.common.perspective} lines={ui.common.howWeThink} size="h3" />
          </div>
          <p className="t-lead text-white/85 lg:col-span-6 lg:col-start-7" data-reveal>
            {s.perspective}
          </p>
        </div>
      </section>

      {studies.length > 0 ? (
        <section className="container-x section-y" aria-labelledby="cases">
          <SectionHeader id="cases" eyebrow={ui.common.caseStudies} lines={ui.common.proofInPractice} className="mb-16" />
          <div className="grid gap-24">
            {studies.map((cs) => (
              <CaseStudyTemplate key={cs!.slug} study={cs!} locale={locale} />
            ))}
          </div>
        </section>
      ) : (
        <section className="container-x section-y" aria-labelledby="cases">
          <div className="border-t border-white/10 pt-12">
            <p className="t-label text-white/45">{ui.common.caseStudies}</p>
            <p className="mt-4 max-w-[60ch] text-white/70">
              {ui.common.caseStudiesPending}
            </p>
          </div>
        </section>
      )}

      <section className="container-x pb-[var(--section)]">
        <div className="grid gap-10 border-t border-white/10 pt-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeader lines={[ui.common.letsTalkAbout, s.title.toLowerCase() + "."]} size="h3" />
            <div className="mt-8" data-reveal>
              <GhostButton href="/contact" size="lg">
                {ui.common.getInTouch}
              </GhostButton>
            </div>
          </div>
          <Link href={`/sectors/${next.slug}`} className="group md:col-span-4 md:col-start-9" data-reveal>
            <span className="t-label text-white/45">{ui.common.nextSector}</span>
            <span className="display mt-2 flex items-center gap-3 text-[1.8rem] leading-none group-hover:gradient-text">
              {next.title} <Arrow className="!h-5 !w-5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
