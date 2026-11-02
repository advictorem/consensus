"use client";

import { useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Discipline, Project } from "@/content/types";
import ProjectCard from "./ProjectCard";
import { useLocale, useUI } from "@/i18n/LocaleProvider";

const FILTERS: ("All" | Discipline)[] = ["All", "Campaigns", "Creative", "Community", "Digital", "Strategy", "Public Relations"];

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const locale = useLocale();
  const ui = useUI();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // The URL is the source of truth so pills elsewhere on the site can deep-link to a filter.
  const raw = params.get("filter");
  const filter: (typeof FILTERS)[number] = raw && (FILTERS as string[]).includes(raw) ? (raw as (typeof FILTERS)[number]) : "All";
  const setFilter = (f: (typeof FILTERS)[number]) => {
    router.replace(f === "All" ? pathname : `${pathname}?filter=${encodeURIComponent(f)}`, { scroll: false });
  };
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.disciplines.includes(filter))),
    [filter, projects],
  );

  return (
    <div>
      <div className="no-scrollbar -mx-[var(--gutter)] mb-14 overflow-x-auto px-[var(--gutter)]" role="tablist" aria-label={ui.common.filterProjects}>
        <div className="flex gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className="btn btn--sm !gap-0"
                data-active={active ? "true" : undefined}
                style={active ? { color: "#000", borderColor: "transparent" } : { borderColor: "rgba(255,255,255,0.3)" }}
              >
                {f === "All" ? ui.common.all : ui.disciplines[f] ?? f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-x-10 gap-y-16 md:grid-cols-12 md:gap-y-24" key={filter}>
        {list.map((p, i) => {
          const pattern = i % 3;
          const cls = pattern === 0 ? "md:col-span-12" : pattern === 1 ? "md:col-span-7" : "md:col-span-5 md:mt-20";
          const aspect = pattern === 0 ? "aspect-[16/9] md:aspect-[21/9]" : pattern === 1 ? "aspect-[4/3]" : "aspect-[4/5]";
          const sizes = pattern === 0 ? "100vw" : pattern === 1 ? "(min-width:768px) 58vw, 100vw" : "(min-width:768px) 42vw, 100vw";
          return <ProjectCard locale={locale} key={p.slug} project={p} index={i} aspect={aspect} sizes={sizes} className={cls} priority={i === 0} delay={(i % 3) * 180} />;
        })}
        {list.length === 0 && <p className="text-white/60 md:col-span-12">{ui.common.noProjects}</p>}
      </div>
    </div>
  );
}
