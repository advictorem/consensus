import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import SectorCard from "@/components/SectorCard";
import SectionHeader from "@/components/SectionHeader";
import GhostButton from "@/components/GhostButton";
import { getSectors } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.sectors.title, description: ui.pages.sectors.description, alternates: alternates("/sectors") };
}

export default async function SectorsPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const SECTORS = getSectors(locale);
  return (
    <>
      <InteriorHero
        eyebrow={ui.common.sectorsEyebrow}
        lines={ui.pages.sectors.h1}
        copy={ui.pages.sectors.intro}
        image={{ src: "/images/la/venice-coast-aerial.jpg", alt: "Aerial view of the Los Angeles coastline, canals, and pier", position: "50% 55%" }}
      />
      <section className="container-x section-y" aria-label={ui.common.sectorsEyebrow}>
        <ul role="list">
          {SECTORS.map((s) => (
            <SectorCard key={s.slug} sector={s} locale={locale} />
          ))}
        </ul>
      </section>
      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={ui.common.dontSeeIndustry} size="h3" copy={ui.common.dontSeeCopy} />
          <div data-reveal>
            <GhostButton href="/contact" size="lg">
              {ui.common.startConversation}
            </GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
