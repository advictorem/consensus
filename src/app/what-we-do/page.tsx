import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import GhostButton, { Arrow } from "@/components/GhostButton";
import { CAPABILITIES } from "@/content/capabilities";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Strategy, public relations, creative, digital, community engagement, and campaigns—connected thinking for communications that resonate and deliver results.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <InteriorHero
        eyebrow="What we do"
        lines={["We make", "connections count."]}
        copy="Complex challenges need connected thinking. We combine strategy, storytelling, technology, and real-world engagement to create communications that resonate and deliver results."
        image={{ src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory's white Art Deco walls above the Los Angeles basin", position: "40% 50%" }}
      />

      {/* Index */}
      <section className="container-x pt-[clamp(4rem,8vw,7rem)]" aria-label="Capabilities index">
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
        const related = c.relatedProjects.map(getProject).filter(Boolean);
        return (
          <section
            key={c.slug}
            id={c.slug}
            className="container-x scroll-mt-24 border-b border-white/10 py-[clamp(5rem,10vw,9rem)]"
            aria-labelledby={`cap-${c.slug}-h`}
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                <p className="eyebrow mb-6" data-reveal>
                  {c.number}
                </p>
                <SectionHeader id={`cap-${c.slug}-h`} lines={c.title.split(" & ").map((s, j, arr) => (j < arr.length - 1 ? `${s} &` : s))} />
                <p className="t-lead mt-8 max-w-[44ch] text-white/85" data-reveal>
                  {c.description}
                </p>
                <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2" aria-label={`${c.title} services`}>
                  {c.services.map((s, j) => (
                    <li key={s} className="flex items-baseline gap-3 border-t border-white/10 pt-3 text-[0.95rem] text-white/75" data-reveal style={{ ["--reveal-delay" as string]: `${j * 50}ms` }}>
                      <span className="gradient-text t-label !text-[0.6rem]">{String(j + 1).padStart(2, "0")}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                {related.length > 0 && (
                  <div className="mt-10" data-reveal>
                    <p className="t-label mb-3 text-white/45">Related work</p>
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
                    Talk to us about {c.title.split(" & ")[0].toLowerCase()}
                  </GhostButton>
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"} ${i % 3 === 1 ? "lg:self-start" : "lg:self-center"}`} data-reveal="mask">
                <div className={`relative overflow-hidden bg-near-black ${i % 2 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover grayscale-[35%]"
                    style={{ objectPosition: c.image.position ?? "center" }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-x section-y">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={["Have a challenge", "worth solving?"]} size="h3" />
          <div data-reveal>
            <GhostButton href="/contact" size="lg">
              Let&rsquo;s talk
            </GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
