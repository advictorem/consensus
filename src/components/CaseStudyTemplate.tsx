import Image from "next/image";
import Link from "@/components/Link";
import type { CaseStudy } from "@/content/types";
import { getCapability } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

const SECTION_LABELS: Record<Locale, Record<string, string>> = {
  en: { overview: "Overview", challenge: "The challenge", insight: "The insight", strategy: "The strategy", execution: "The execution", impact: "The impact" },
  es: { overview: "Panorama", challenge: "El reto", insight: "El insight", strategy: "La estrategia", execution: "La ejecución", impact: "El impacto" },
};
const SECTION_KEYS = ["overview", "challenge", "insight", "strategy", "execution", "impact"] as const;

export default function CaseStudyTemplate({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const ui = getUI(locale);
  const caps = study.relatedCapabilities.map((s) => getCapability(locale, s)).filter(Boolean);
  return (
    <article id={study.slug} className="scroll-mt-24 border-t border-white/12 pt-12" aria-labelledby={`cs-${study.slug}`}>
      <div className="grid gap-10 md:grid-cols-12">
        <header className="md:col-span-5">
          <p className="t-label text-white/50">{study.client}</p>
          <h3 id={`cs-${study.slug}`} className="display t-h3 mt-3 leading-[0.95]">
            {study.title}
          </h3>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-near-black" data-reveal="mask">
            <Image src={study.image.src} alt={study.image.alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover grayscale-[30%]" style={{ objectPosition: study.image.position }} />
          </div>
          {study.impactStats && study.impactStats.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {study.impactStats.map((s) => (
                <div key={s.label} data-reveal>
                  <dd className="display gradient-text text-[clamp(2.4rem,4vw,3.6rem)] leading-none">{s.value}</dd>
                  <dt className="t-label mt-2 !text-[0.68rem] text-white/55">{s.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </header>

        <div className="md:col-span-6 md:col-start-7">
          <dl>
            {SECTION_KEYS.map((key) => (
              <div key={key} className="grid gap-3 border-b border-white/10 py-7 first:pt-0" data-reveal>
                <dt className="t-label gradient-text">{SECTION_LABELS[locale][key]}</dt>
                <dd className="t-body text-white/80">{study[key] as string}</dd>
              </div>
            ))}
            <div className="grid gap-3 py-7" data-reveal>
              <dt className="t-label text-white/45">{ui.common.relatedCapabilities}</dt>
              <dd className="flex flex-wrap gap-x-5 gap-y-2">
                {caps.map((c) => (
                  <Link key={c!.slug} href={`/what-we-do#${c!.slug}`} className="link-line text-[0.95rem] text-white/80">
                    {c!.title}
                  </Link>
                ))}
              </dd>
            </div>
          </dl>
          {study.approvals && study.approvals.length > 0 && (
            <p className="mt-2 text-xs text-white/30" data-internal="approval">
              {ui.common.pendingApproval}: {study.approvals.join("; ")}.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
