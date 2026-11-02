import Image from "next/image";
import Link from "@/components/Link";
import type { Project } from "@/content/types";
import { Arrow } from "./GhostButton";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

export default function ProjectCard({
  locale,
  project,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  locale: Locale;
  project: Project;
  /** Kept for API compatibility; numbering is no longer rendered. */
  index?: number;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const ui = getUI(locale);
  return (
    <article className={`group ${className}`} data-reveal>
      <Link href={`/work/${project.slug}`} className="block" aria-label={`${project.client}: ${project.title.replace("\n", " ")} — ${ui.common.viewProject}`}>
        <div className={`media-zoom relative overflow-hidden bg-near-black ${aspect}`}>
          <Image
            src={project.thumb.src}
            alt={project.thumb.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: project.thumb.position ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
          <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-x-2 items-center justify-center rounded-full border border-white/60 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <Arrow className="!h-4 !w-4" />
          </span>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="t-sub text-[1.15rem] leading-tight text-white md:text-[1.25rem]">{project.client}</p>
            <h3 className="display mt-2 text-[clamp(1.7rem,2.8vw,2.8rem)] leading-[0.95]">
              {project.title.split("\n").map((t, i) => (
                <span key={i} className="block">
                  {t}
                </span>
              ))}
            </h3>
            <p className="mt-3 max-w-[48ch] text-[0.95rem] text-white/65">{project.descriptor}</p>
          </div>
          <ul className="hidden shrink-0 flex-col items-end gap-1.5 pt-1 text-right md:flex" aria-label={ui.common.disciplines}>
            {project.disciplines.slice(0, 2).map((d) => (
              <li key={d} className="t-label !text-[0.8rem] !tracking-[0.12em] text-white/70">
                {ui.disciplines[d] ?? d}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
