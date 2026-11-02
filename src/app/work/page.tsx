import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import WorkGrid from "@/components/WorkGrid";
import SectionHeader from "@/components/SectionHeader";
import GhostButton from "@/components/GhostButton";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected campaigns, creative, community engagement, and strategic communications from Consensus.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Our work"
        lines={["Work that", "moves people."]}
        copy="Campaigns, creative, and communications programs built on insight—and measured by what they change."
        image={{ src: "/images/la/urban-light.jpg", alt: "Visitors wandering through the Urban Light lamp-post installation at night", position: "50% 60%" }}
      />
      <section className="container-x section-y" aria-label="Portfolio">
        <WorkGrid projects={PROJECTS} />
      </section>
      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={["Strategic work lives", "under Sectors."]} size="h3" copy="Some of our most important engagements are more strategic than visual. Explore them by industry." />
          <div data-reveal>
            <GhostButton href="/sectors">Explore sectors</GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
