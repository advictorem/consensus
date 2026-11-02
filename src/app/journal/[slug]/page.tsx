import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InteriorHero from "@/components/InteriorHero";
import JournalCard from "@/components/JournalCard";
import SectionHeader from "@/components/SectionHeader";
import GhostButton from "@/components/GhostButton";
import { ARTICLES, getArticle } from "@/content/journal";
import { formatDate } from "@/lib/format";
import { SITE } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: {
      type: "article",
      publishedTime: a.date,
      authors: a.author ? [a.author] : undefined,
      images: [{ url: a.image.src, alt: a.image.alt }],
    },
    robots: a.status === "draft" ? { index: false, follow: true } : undefined,
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: a.author ? { "@type": "Person", name: a.author } : { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    image: `${SITE.url}${a.image.src}`,
    mainEntityOfPage: `${SITE.url}/journal/${a.slug}`,
  };

  return (
    <>
      <InteriorHero eyebrow={a.category} lines={[a.title]} image={a.image} compact>
        <p className="mt-8 flex flex-wrap items-center gap-x-3 text-sm text-white/60" data-reveal>
          {a.date ? <time dateTime={a.date}>{formatDate(a.date)}</time> : <span>Draft — unpublished</span>}
          <span aria-hidden="true">·</span>
          <span>{a.readingTime} min read</span>
          {a.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>By {a.author}</span>
            </>
          )}
        </p>
      </InteriorHero>

      <article className="container-x pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-3">
            <p className="t-lead text-white/90" data-reveal>
              {a.excerpt}
            </p>
            <div className="mt-10 space-y-6">
              {a.body.map((para, i) => (
                <p key={i} className="t-body text-white/80" data-reveal style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}>
                  {para}
                </p>
              ))}
            </div>
            {a.status === "draft" && (
              <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
                This is a draft article prepared for the redesign. It is unpublished and marked no-index until written in full and approved.
              </p>
            )}
            {a.sourceUrl && (
              <p className="mt-6 text-xs text-white/40">
                Originally published at{" "}
                <a href={a.sourceUrl} className="link-line text-white/60" target="_blank" rel="noopener noreferrer">
                  consensusinc.com
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </article>

      <section className="container-x section-y" aria-labelledby="more">
        <div className="mb-14 flex flex-col gap-8 border-t border-white/10 pt-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="more" eyebrow="Keep reading" lines={["More from", "the Journal."]} size="h3" />
          <div data-reveal>
            <GhostButton href="/journal" size="sm">
              All articles
            </GhostButton>
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <JournalCard key={r.slug} article={r} />
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
