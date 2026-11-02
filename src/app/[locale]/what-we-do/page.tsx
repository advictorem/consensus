import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/Link";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import GhostButton, { Arrow } from "@/components/GhostButton";
import { getCapabilities, getProject } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.whatWeDo.title, description: ui.pages.whatWeDo.description, alternates: alternates("/what-we-do") };
}

const splitAmp = (t: string) => {
  const sep = t.includes(" & ") ? " & " : t.includes(" y ") ? " y " : t.includes(" e ") ? " e " : null;
  if (!sep) return [t];
  const [a, ...rest] = t.split(sep);
  return [`${a}${sep.trimEnd()}`, rest.join(sep)];
};

export default async function WhatWeDoPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const CAPABILITIES = getCapabilities(locale);

  return (
    <>
      <InteriorHero
        eyebrow={ui.common.whatWeDoEyebrow}
        lines={ui.pages.whatWeDo.h1}
        copy={ui.pages.whatWeDo.intro}
        image={{ src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory's white Art Deco walls above the Los Angeles basin", position: "40% 50%" }}
      />

      <section className="container-x pt-[clamp(4rem,8vw,7rem)]" aria-label={ui.common.capabilitiesIndex}>
        <ol className="grid gap-y-3 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {CAPABILITIES.map((c) => (
            <li key={c.slug}>
              <a href={`#${c.slug}`} className="link-line t-label inline-flex items-baseline gap-3 text-white/70 hover:text-white">
                <span className="text-white/35">{c.number}</span> {c.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      {CAPABILITIES.map((c, i) => {
        const flip = i % 2 === 1;
        const related = c.relatedProjects.map((s) => getProject(locale, s)).filter(Boolean);
        return (
          <section key={c.slug} id={c.slug} className="container-x scroll-mt-24 border-b border-white/10 py-[clamp(5rem,10vw,9rem)]" aria-labelledby={`cap-${c.slug}-h`}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                <p className="eyebrow mb-6" data-reveal>
                  {c.number}
                </p>
                <SectionHeader id={`cap-${c.slug}-h`} lines={splitAmp(c.title)} />
                <p className="t-lead mt-8 max-w-[44ch] text-white/85" data-reveal>
                  {c.description}
                </p>
                <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2" aria-label={`${c.title} — ${ui.common.services}`}>
                  {c.services.map((s, j) => (
                    <li key={s} className="flex items-baseline gap-3 border-t border-white/10 pt-3 text-[0.95rem] text-white/75" data-reveal style={{ ["--reveal-delay" as string]: `${j * 50}ms` }}>
                      <span className="gradient-text t-label !text-[0.6rem]">{String(j + 1).padStart(2, "0")}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                {related.length > 0 && (
                  <div className="mt-10" data-reveal>
                    <p className="t-label mb-3 text-white/45">{ui.common.relatedWork}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {related.map((p) => (
                        <li key={p!.slug}>
                          <Link href={`/work/${p!.slug}`} className="link-line inline-flex items-center gap-2 text-[0.95rem] text-white/85">
                            {p!.client} <Arrow className="!h-3.5 !w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-10" data-reveal>
                  <GhostButton href="/contact" size="sm">
                    {ui.common.talkToUsAbout} {splitAmp(c.title)[0].replace(/ (&|y|e)$/, "").toLowerCase()}
                  </GhostButton>
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"} ${i % 3 === 1 ? "lg:self-start" : "lg:self-center"}`} data-reveal="mask">
                <div className={`relative overflow-hidden bg-near-black ${i % 2 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                  <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover grayscale-[35%]" style={{ objectPosition: c.image.position ?? "center" }} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-x section-y">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={ui.common.haveChallenge} size="h3" />
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
