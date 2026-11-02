import type { Metadata } from "next";
import { Suspense } from "react";
import InteriorHero from "@/components/InteriorHero";
import WorkGrid from "@/components/WorkGrid";
import SectionHeader from "@/components/SectionHeader";
import GhostButton from "@/components/GhostButton";
import { getProjects } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.work.title, description: ui.pages.work.description, alternates: alternates("/work") };
}

export default async function WorkPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const PROJECTS = getProjects(locale);
  return (
    <>
      <InteriorHero
        eyebrow={ui.common.ourWork}
        lines={ui.pages.work.h1}
        copy={ui.pages.work.intro}
        image={{ src: "/images/la/urban-light.jpg", alt: "Visitors wandering through the Urban Light lamp-post installation at night", position: "50% 60%" }}
      />
      <section className="container-x section-y" aria-label={ui.common.portfolio}>
        <Suspense fallback={null}>
          <WorkGrid projects={PROJECTS} />
        </Suspense>
      </section>
      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={ui.common.strategicWork} size="h3" copy={ui.common.strategicWorkCopy} />
          <div data-reveal>
            <GhostButton href="/sectors">{ui.common.exploreSectors}</GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
