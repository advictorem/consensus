import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import SectionHeader from "@/components/SectionHeader";
import FeaturedWorkGrid from "@/components/FeaturedWorkGrid";
import CapabilityRows from "@/components/CapabilityRow";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import JournalCard from "@/components/JournalCard";
import GhostButton from "@/components/GhostButton";
import { CLIENT_LOGOS } from "@/content/clients";
import { getHome, getCapabilities, getFeaturedProjects, getLatestArticles } from "@/content";
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
  const ui = getUI(locale);
  const HOME = getHome(locale);
  const capabilities = getCapabilities(locale);
  const featured = getFeaturedProjects(locale, 5);
  const articles = getLatestArticles(locale, 3);

  return (
    <>
      <VideoHero {...HOME.hero} />

      {/* 02 — Who we are */}
      <section className="container-x section-y" aria-labelledby="who">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeader id="who" eyebrow={HOME.who.eyebrow} lines={HOME.who.lines} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-[18%]">
            {HOME.who.paragraphs.map((p, i) => (
              <p key={i} className={`t-body text-white/80 ${i ? "mt-6" : ""}`} data-reveal style={{ ["--reveal-delay" as string]: `${200 + i * 120}ms` }}>
                {p}
              </p>
            ))}
            <div className="mt-10" data-reveal style={{ ["--reveal-delay" as string]: "450ms" }}>
              <GhostButton href="/about" size="sm">
                {ui.common.ourStory}
              </GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Featured work */}
      <section className="container-x pb-[var(--section)]" aria-labelledby="work">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="work" eyebrow={HOME.work.eyebrow} lines={HOME.work.lines} />
          <div className="hidden md:block" data-reveal>
            <GhostButton href={HOME.work.cta.href} size="sm">
              {HOME.work.cta.label}
            </GhostButton>
          </div>
        </div>
        <FeaturedWorkGrid projects={featured} locale={locale} />
        <div className="mt-16 md:hidden" data-reveal>
          <GhostButton href={HOME.work.cta.href}>{HOME.work.cta.label}</GhostButton>
        </div>
      </section>

      {/* 04 — Capabilities */}
      <section className="container-x section-y border-t border-white/10" aria-labelledby="capabilities">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="capabilities" eyebrow={HOME.capabilities.eyebrow} lines={HOME.capabilities.lines} copy={HOME.capabilities.intro} />
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
      <section className="container-x section-y border-t border-white/10" aria-labelledby="clients">
        <div className="mb-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader id="clients" eyebrow={HOME.clients.eyebrow} lines={HOME.clients.lines} />
          </div>
          <p className="t-body self-end text-white/75 lg:col-span-4 lg:col-start-9" data-reveal>
            {HOME.clients.copy}
          </p>
        </div>
        <ClientLogoGrid logos={CLIENT_LOGOS} locale={locale} />
      </section>

      {/* 06 — The Consensus difference */}
      <section className="relative isolate overflow-hidden border-t border-white/10" aria-labelledby="difference">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/la/griffith-observatory.jpg" alt="" fill sizes="100vw" className="object-cover object-[65%_50%] opacity-60 grayscale-[70%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="container-x section-y">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader id="difference" eyebrow={HOME.difference.eyebrow} lines={HOME.difference.lines} copy={HOME.difference.copy} />
              <div className="mt-10" data-reveal>
                <GhostButton href={HOME.difference.cta.href}>{HOME.difference.cta.label}</GhostButton>
              </div>
            </div>
            <dl className="grid gap-8 self-end lg:col-span-4 lg:col-start-9">
              {HOME.difference.points.map((p, i) => (
                <div key={p.k} className="border-t border-white/15 pt-5" data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
                  <dt className="display text-[1.6rem] leading-none">{p.k}</dt>
                  <dd className="mt-2 text-[0.95rem] text-white/70">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 07 — Journal */}
      <section className="container-x section-y border-t border-white/10" aria-labelledby="journal">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="journal" eyebrow={HOME.journal.eyebrow} lines={HOME.journal.lines} />
          <div className="hidden md:block" data-reveal>
            <GhostButton href={HOME.journal.cta.href} size="sm">
              {HOME.journal.cta.label}
            </GhostButton>
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {articles.map((a) => (
            <JournalCard key={a.slug} article={a} locale={locale} />
          ))}
        </div>
        <div className="mt-14 md:hidden">
          <GhostButton href={HOME.journal.cta.href}>{HOME.journal.cta.label}</GhostButton>
        </div>
      </section>
    </>
  );
}
