import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import JournalCard from "@/components/JournalCard";
import { ARTICLES, JOURNAL_CATEGORIES } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Fresh perspectives on communication, culture, creativity, technology, and the ideas shaping what's next.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      <InteriorHero
        eyebrow="The Journal"
        lines={["What's on", "our mind."]}
        copy="Fresh perspectives on communication, culture, creativity, technology, and the ideas shaping what's next."
        image={{ src: "/images/la/sf-skyline-fog.jpg", alt: "A city skyline rising through morning fog at sunrise", position: "50% 40%" }}
        compact
      />

      <section className="container-x pt-[clamp(3rem,6vw,5rem)]" aria-label="Categories">
        <ul className="no-scrollbar -mx-[var(--gutter)] flex gap-x-8 overflow-x-auto border-b border-white/10 px-[var(--gutter)] pb-6">
          {JOURNAL_CATEGORIES.map((c) => (
            <li key={c} className="t-label shrink-0 text-white/55">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x section-y !pt-16" aria-label="Articles">
        {featured && (
          <div className="grid gap-10 lg:grid-cols-12">
            <JournalCard article={featured} featured className="lg:col-span-8" />
            <div className="hidden self-end lg:col-span-3 lg:col-start-10 lg:block" data-reveal>
              <p className="t-label mb-3 text-white/40">Featured</p>
              <p className="text-white/65">{featured.excerpt}</p>
            </div>
          </div>
        )}
        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <JournalCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
