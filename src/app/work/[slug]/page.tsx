import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InteriorHero from "@/components/InteriorHero";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import VimeoEmbed from "@/components/VimeoEmbed";
import GhostButton from "@/components/GhostButton";
import { PROJECTS, getProject } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.client} — ${p.title}`,
    description: p.intro,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { images: [{ url: p.hero.src, alt: p.hero.alt }] },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-12 md:py-16" data-reveal>
      <h2 className="display t-h3 md:col-span-4">{label}</h2>
      <div className="t-body max-w-[60ch] text-white/80 md:col-span-7 md:col-start-6">{children}</div>
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const related = (p.related ?? PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 2).map((x) => x.slug))
    .map(getProject)
    .filter(Boolean)
    .slice(0, 2);

  return (
    <>
      <InteriorHero eyebrow={p.client} lines={p.title.split("\n")} image={p.hero} compact>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Disciplines" data-reveal>
          {p.tags.map((t) => (
            <li key={t} className="t-label text-white/60">
              {t}
            </li>
          ))}
        </ul>
      </InteriorHero>

      <section className="container-x pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-10 pb-16 md:grid-cols-12">
          <p className="t-lead max-w-[48ch] text-white/90 md:col-span-8" data-reveal>
            {p.intro}
          </p>
          <dl className="grid gap-4 self-end md:col-span-3 md:col-start-10">
            <div>
              <dt className="t-label text-white/40">Client</dt>
              <dd className="mt-1">{p.client}</dd>
            </div>
            <div>
              <dt className="t-label text-white/40">Disciplines</dt>
              <dd className="mt-1 text-white/80">{p.disciplines.join(" / ")}</dd>
            </div>
          </dl>
        </div>

        {p.challenge && <Block label="Challenge">{p.challenge}</Block>}
        {p.strategy && <Block label="Strategy & insight">{p.strategy}</Block>}
        {p.execution && <Block label="Creative execution">{p.execution}</Block>}
      </section>

      {p.vimeo && p.vimeo.length > 0 && (
        <section className="container-x py-12" aria-label="Campaign video">
          <div className="grid gap-8">
            {p.vimeo.map((v) =>
              v.videoId ? (
                <VimeoEmbed key={v.videoId} videoId={v.videoId} title={v.title} poster={p.hero.src} />
              ) : (
                <a
                  key={v.title}
                  href={v.showcase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn self-start"
                >
                  <span>{v.title}</span>
                </a>
              ),
            )}
          </div>
        </section>
      )}

      {p.gallery && p.gallery.length > 0 && (
        <section className="container-x py-12" aria-label="Selected work samples">
          <div className="grid gap-6 md:grid-cols-12">
            {p.gallery.map((g, i) => (
              <div
                key={g.src + i}
                className={`relative overflow-hidden bg-near-black ${i % 3 === 0 ? "aspect-[16/9] md:col-span-12" : "aspect-[4/3] md:col-span-6"}`}
                data-reveal="mask"
              >
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: g.position }} />
              </div>
            ))}
          </div>
        </section>
      )}

      {p.outcomes && p.outcomes.length > 0 && (
        <section className="container-x section-y" aria-labelledby="outcomes">
          <SectionHeader id="outcomes" eyebrow="Impact" lines={["Verified", "outcomes."]} className="mb-14" />
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/12 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {p.outcomes.map((o, i) => (
              <div key={o.label} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                <dd className="display t-stat gradient-text inline-block pr-[0.05em]">{o.value}</dd>
                <dt className="t-label mt-4 max-w-[22ch] text-white/60">{o.label}</dt>
                {o.note && <p className="mt-2 text-xs text-white/35">{o.note}</p>}
              </div>
            ))}
          </dl>
          {p.outcomesNote && <p className="mt-10 max-w-[70ch] text-xs text-white/40">{p.outcomesNote}</p>}
        </section>
      )}

      {related.length > 0 && (
        <section className="container-x section-y border-t border-white/10" aria-labelledby="related">
          <SectionHeader id="related" eyebrow="Related work" lines={["More from", "the studio."]} className="mb-14" />
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {related.map((r) => (
              <ProjectCard key={r!.slug} project={r!} aspect="aspect-[4/3]" sizes="(min-width:768px) 50vw, 100vw" />
            ))}
          </div>
        </section>
      )}

      <section className="container-x pb-[var(--section)]">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader lines={["Have a story", "worth telling?"]} size="h3" />
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
