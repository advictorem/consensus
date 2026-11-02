import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import SectorCard from "@/components/SectorCard";
import SectionHeader from "@/components/SectionHeader";
import GhostButton from "@/components/GhostButton";
import { SECTORS } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Public affairs, infrastructure, real estate, consumer and corporate brands, culture, education, and environment—complex challenges, clear thinking.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Sectors"
        lines={["Complex challenges.", "Clear thinking."]}
        copy="Every industry has its own challenges, stakeholders, and conversations. We bring the experience to understand what's at stake—and the strategy and creativity to move things forward."
        image={{ src: "/images/la/venice-coast-aerial.jpg", alt: "Aerial view of the Los Angeles coastline, canals, and pier", position: "50% 55%" }}
      />
      <section className="container-x section-y" aria-label="Sectors">
        <ul role="list">
          {SECTORS.map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </ul>
      </section>
      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={["Don't see your", "industry?"]} size="h3" copy="Four decades of work spans more sectors than one list can hold. Tell us what you're facing." />
          <div data-reveal>
            <GhostButton href="/contact" size="lg">
              Start a conversation
            </GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
