import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import SectionHeader from "@/components/SectionHeader";
import FeaturedWorkGrid from "@/components/FeaturedWorkGrid";
import CapabilityRows from "@/components/CapabilityRow";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import VennDiagram from "@/components/VennDiagram";
import ScrubText from "@/components/ScrubText";
import GhostButton from "@/components/GhostButton";
import { CLIENT_LOGOS } from "@/content/clients";
import { getHome, getCapabilities, getFeaturedProjects } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: { absolute: ui.pages.home.title }, description: ui.pages.home.description, alternates: alternates("/") };
}

export default async function HomePage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const HOME = getHome(locale);
  const capabilities = getCapabilities(locale);
  const featured = getFeaturedProjects(locale, 5);

  return (
    <>
      <VideoHero {...HOME.hero} />

      {/* 02 — Who we are */}
      <section className="container-x section-y" aria-labelledby="who">
        <div className="mx-auto flex max-w-[78rem] flex-col items-center text-center">
          <SectionHeader id="who" lines={HOME.who.lines} className="flex flex-col items-center" headingClassName="text-center" />
          <div className="mt-12 w-full">
            <ScrubText text={HOME.who.paragraphs.join(" ")} className="display mx-auto max-w-[70rem] text-[clamp(2rem,4.3vw,4.6rem)] leading-[1] text-center" />
          </div>
          <div className="mt-10" data-reveal style={{ ["--reveal-delay" as string]: "450ms" }}>
            <GhostButton href={HOME.who.cta.href}>{HOME.who.cta.label}</GhostButton>
          </div>
        </div>
      </section>

      {/* 03 — Our work */}
      <section id="work" className="container-x scroll-mt-20 pb-[var(--section)]" aria-label={HOME.work.title}>
        <FeaturedWorkGrid projects={featured} locale={locale} title={HOME.work.title} cta={HOME.work.cta} />
      </section>

      {/* 04 — Capabilities */}
      <section className="container-x section-y" aria-labelledby="capabilities">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="capabilities" lines={HOME.capabilities.lines} />
            <p className="mt-8 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/75" data-reveal>
              {HOME.capabilities.intro}
            </p>
            <div className="mt-10 hidden lg:block" data-reveal>
              <GhostButton href={HOME.capabilities.cta.href}>{HOME.capabilities.cta.label}</GhostButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <CapabilityRows items={capabilities} />
            <div className="mt-12 lg:hidden" data-reveal>
              <GhostButton href={HOME.capabilities.cta.href}>{HOME.capabilities.cta.label}</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Clients */}
      <section className="container-x section-y" aria-labelledby="clients">
        <h2 id="clients" className="display t-h3 mb-16 text-center" data-reveal="wipe">
          <span className="block">{HOME.clients.label}</span>
        </h2>
        <ClientLogoGrid logos={CLIENT_LOGOS} locale={locale} />
      </section>

      {/* 06 — The Consensus difference */}
      <section className="relative isolate overflow-hidden border-t border-white/10" aria-labelledby="difference">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/la/griffith-observatory.jpg" alt="" fill sizes="100vw" className="object-cover object-[65%_50%] opacity-80 grayscale-[45%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/85" />
        </div>
        <div className="container-x section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader id="difference" lines={HOME.difference.lines} />
              <p className="mt-8 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/75" data-reveal>
                {HOME.difference.copy}
              </p>
              <div className="mt-10" data-reveal>
                <GhostButton href={HOME.difference.cta.href}>{HOME.difference.cta.label}</GhostButton>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <VennDiagram items={HOME.difference.points} className="mx-auto max-w-[560px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
