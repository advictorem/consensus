import type { Metadata } from "next";
import Image from "next/image";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import StatisticsGrid from "@/components/StatisticsGrid";
import TeamMemberCard from "@/components/TeamMemberCard";
import GhostButton from "@/components/GhostButton";
import { getAbout, getTeam } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.about.title, description: ui.pages.about.description, alternates: alternates("/about") };
}

export default async function AboutPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const ABOUT = getAbout(locale);
  const TEAM = getTeam(locale);

  return (
    <>
      <InteriorHero
        eyebrow={ui.common.aboutEyebrow}
        lines={ABOUT.hero.lines}
        copy={ABOUT.hero.copy}
        image={{ src: "/images/la/palms-dtla-sunset.jpg", alt: "Palm-lined road descending toward the downtown Los Angeles skyline at sunset", position: "50% 45%" }}
      />

      <section className="container-x section-y" aria-labelledby="intro">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeader id="intro" lines={ABOUT.intro.lines} />
          </div>
          <div className="lg:col-span-4 lg:pt-[12%]">
            {ABOUT.intro.paragraphs.map((p, i) => (
              <p key={i} className={`t-body text-white/80 ${i ? "mt-6" : ""}`} data-reveal style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {ABOUT.pillars.map((pillar, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={pillar.number} className="container-x border-t border-white/10 py-[clamp(5rem,10vw,9rem)]" aria-labelledby={`pillar-${pillar.number}`}>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                <p className="eyebrow mb-6" data-reveal>
                  {ui.common.pillar} {pillar.number}
                </p>
                <SectionHeader id={`pillar-${pillar.number}`} lines={pillar.lines} />
                <div className="mt-8 max-w-[52ch]">
                  {pillar.paragraphs.map((p, j) => (
                    <p key={j} className={`t-body text-white/80 ${j ? "mt-5" : ""}`} data-reveal style={{ ["--reveal-delay" as string]: `${j * 100}ms` }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`} data-reveal="mask">
                <div className="relative aspect-[4/5] overflow-hidden bg-near-black">
                  <Image src={pillar.image.src} alt={pillar.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover grayscale-[40%]" style={{ objectPosition: pillar.image.position ?? "center" }} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-x section-y border-t border-white/10" aria-labelledby="numbers">
        <SectionHeader id="numbers" eyebrow={ui.common.byTheNumbers} lines={ABOUT.stats.lines} className="mb-16" />
        <StatisticsGrid stats={ABOUT.stats.items} />
        {ABOUT.stats.note && <p className="mt-10 max-w-[70ch] text-xs text-white/35">{ABOUT.stats.note}</p>}
      </section>

      <section className="container-x section-y border-t border-white/10" aria-labelledby="leadership">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader id="leadership" eyebrow={ui.common.leadership} lines={ABOUT.leadership.lines} />
          </div>
          <p className="t-body self-end text-white/75 lg:col-span-4 lg:col-start-9" data-reveal>
            {ABOUT.leadership.copy}
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <TeamMemberCard key={m.slug} member={m} index={i} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={ui.common.letsBuild} size="h3" />
          <div data-reveal>
            <GhostButton href="/contact" size="lg">
              {ui.common.letsTalk}
            </GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
