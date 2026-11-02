import type { Project } from "@/content/types";
import ProjectCard from "./ProjectCard";
import type { Locale } from "@/i18n/config";

/**
 * Asymmetric editorial grid: first project spans the full width (hero-scale),
 * the rest alternate between 7/5 and 5/7 column splits with offset.
 */
export default function FeaturedWorkGrid({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [first, ...rest] = projects;
  return (
    <div className="grid gap-y-16 md:gap-y-24">
      {first && (
        <ProjectCard
          locale={locale}
          project={first}
          index={0}
          aspect="aspect-[16/9] md:aspect-[21/9]"
          sizes="100vw"
          priority
        />
      )}
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-12 md:gap-y-24">
        {rest.map((p, i) => {
          const even = i % 2 === 0;
          return (
            <ProjectCard
              locale={locale}
              key={p.slug}
              project={p}
              index={i + 1}
              aspect={even ? "aspect-[4/3]" : "aspect-[3/4] md:aspect-[4/5]"}
              sizes={even ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              className={even ? "md:col-span-7" : "md:col-span-5 md:mt-24"}
            />
          );
        })}
      </div>
    </div>
  );
}
