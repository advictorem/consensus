import type { Project } from "@/content/types";
import ProjectCard from "./ProjectCard";
import GhostButton from "./GhostButton";
import type { Locale } from "@/i18n/config";

/**
 * "OUR WORK" set in oversized display type with the first project tile pulled
 * up to overlap the lower half of the headline; the rest alternate 7/5 and
 * 5/7 column splits with a vertical offset.
 */
export default function FeaturedWorkGrid({
  projects,
  locale,
  title,
  cta,
}: {
  projects: Project[];
  locale: Locale;
  title: string;
  cta: { label: string; href: string };
}) {
  const [first, ...rest] = projects;
  return (
    <div>
      <div className="relative">
        <div className="flex items-end justify-between gap-8">
          <h2
            className="display relative z-0 whitespace-nowrap leading-[0.82]"
            style={{ fontSize: "clamp(4.5rem, 15.5vw, 17rem)" }}
            data-reveal
          >
            {title}
          </h2>
          <div className="relative z-20 mb-[clamp(2.5rem,7.5vw,8.5rem)] hidden shrink-0 md:block" data-reveal>
            <GhostButton href={cta.href}>{cta.label}</GhostButton>
          </div>
        </div>
        {first && (
          <div className="relative z-10 -mt-[clamp(1.5rem,4.6vw,5.2rem)]">
            <ProjectCard locale={locale} project={first} aspect="aspect-[16/9] md:aspect-[21/9]" sizes="100vw" priority />
          </div>
        )}
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-y-24">
        {rest.map((p, i) => {
          const even = i % 2 === 0;
          return (
            <ProjectCard
              locale={locale}
              key={p.slug}
              project={p}
              aspect={even ? "aspect-[4/3]" : "aspect-[3/4] md:aspect-[4/5]"}
              sizes={even ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              className={even ? "md:col-span-7" : "md:col-span-5 md:mt-24"}
            />
          );
        })}
      </div>
      <div className="mt-16 md:hidden" data-reveal>
        <GhostButton href={cta.href}>{cta.label}</GhostButton>
      </div>
    </div>
  );
}
