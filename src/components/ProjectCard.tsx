import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { Arrow } from "./GhostButton";

export default function ProjectCard({
  project,
  index,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  project: Project;
  index?: number;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article className={`group ${className}`} data-reveal>
      <Link href={`/work/${project.slug}`} className="block" aria-label={`${project.client}: ${project.title} — view project`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
          {typeof index === "number" && (
            <span className="t-label absolute left-5 top-5 text-white/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
            <Arrow className="!h-4 !w-4" />
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <p className="t-label text-white/55">{project.client}</p>
            <h3 className="display t-h3 mt-2 !text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[0.95]">
              {project.title}
            </h3>
            <p className="mt-3 max-w-[48ch] text-[0.95rem] text-white/65">{project.descriptor}</p>
          </div>
          <ul className="hidden shrink-0 flex-col items-end gap-1 text-right md:flex" aria-label="Disciplines">
            {project.disciplines.slice(0, 2).map((d) => (
              <li key={d} className="t-label !text-[0.68rem] text-white/45">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
