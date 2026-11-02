import Image from "next/image";
import Link from "@/components/Link";
import type { Project } from "@/content/types";
import { Arrow } from "./GhostButton";
import AutoplayVideo from "./AutoplayVideo";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

export default function ProjectCard({
  locale,
  project,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  delay = 0,
}: {
  locale: Locale;
  project: Project;
  /** Kept for API compatibility; numbering is no longer rendered. */
  index?: number;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Stagger for the reveal animation, in ms. */
  delay?: number;
}) {
  const ui = getUI(locale);
  return (
    <article className={`group relative ${className}`} data-reveal style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      <Link href={`/work/${project.slug}`} className="block" aria-label={`${project.client}: ${project.title.replace("\n", " ")} — ${ui.common.viewProject}`}>
        <div className={`media-zoom relative overflow-hidden bg-near-black ${aspect}`}>
          {project.thumb.video ? (
            <AutoplayVideo src={project.thumb.video} poster={project.thumb.src} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <Image
              src={project.thumb.src}
              alt={project.thumb.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover"
              style={{ objectPosition: project.thumb.position ?? "center" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
          <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-white/60 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <Arrow className="!h-4 !w-4" />
          </span>
        </div>
        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
          <div>
            <h3 className="display text-[clamp(1.7rem,2.8vw,2.8rem)] leading-[0.95] [text-wrap:balance] md:whitespace-nowrap">
              {project.title.split("\n").map((t, i) => (
                <span key={i} className="block">
                  {t}
                </span>
              ))}
            </h3>
            <p className="mt-3 max-w-[48ch] text-[0.95rem] text-white/65">{project.descriptor}</p>
          </div>
          <p className="t-sub shrink-0 text-[1.05rem] leading-tight text-[#3cc1ef] md:pt-1 md:text-right md:text-[1.15rem]">{project.client}</p>
        </div>
      </Link>

      {/* Category pills — siblings of the card link so each is its own filter link */}
      <ul className="absolute right-4 top-4 z-10 flex flex-wrap justify-end gap-2 md:right-6 md:top-6 md:gap-2.5" aria-label={ui.common.disciplines}>
        {project.disciplines.map((d) => (
          <li key={d}>
            <Link
              href={`/work?filter=${encodeURIComponent(d)}`}
              className="inline-flex items-center rounded-full bg-black/35 px-4 py-2 text-[0.9rem] font-medium leading-none text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black md:px-5 md:py-2.5 md:text-[1rem]"
            >
              {ui.disciplines[d] ?? d}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
