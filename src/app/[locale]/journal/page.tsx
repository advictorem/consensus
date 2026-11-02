import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import JournalCard from "@/components/JournalCard";
import { JOURNAL_CATEGORIES } from "@/content/journal";
import { getArticles } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.journal.title, description: ui.pages.journal.description, alternates: alternates("/journal") };
}

export default async function JournalPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const [featured, ...rest] = getArticles(locale);
  return (
    <>
      <InteriorHero
        eyebrow={ui.common.journalEyebrow}
        lines={ui.pages.journal.h1}
        copy={ui.pages.journal.intro}
        image={{ src: "/images/la/sf-skyline-fog.jpg", alt: "A city skyline rising through morning fog at sunrise", position: "50% 40%" }}
        compact
      />

      <section className="container-x pt-[clamp(3rem,6vw,5rem)]" aria-label={ui.common.categories}>
        <ul className="no-scrollbar -mx-[var(--gutter)] flex gap-x-8 overflow-x-auto border-b border-white/10 px-[var(--gutter)] pb-6">
          {JOURNAL_CATEGORIES.map((c) => (
            <li key={c} className="t-label shrink-0 text-white/55">
              {ui.categories[c] ?? c}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x section-y !pt-16">
        {featured && (
          <div className="grid gap-10 lg:grid-cols-12">
            <JournalCard article={featured} locale={locale} featured className="lg:col-span-8" />
            <div className="hidden self-end lg:col-span-3 lg:col-start-10 lg:block" data-reveal>
              <p className="t-label mb-3 text-white/40">{ui.common.featured}</p>
              <p className="text-white/65">{featured.excerpt}</p>
            </div>
          </div>
        )}
        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <JournalCard key={a.slug} article={a} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
