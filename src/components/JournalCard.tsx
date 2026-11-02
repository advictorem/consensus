import Image from "next/image";
import Link from "@/components/Link";
import type { Article } from "@/content/types";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

export default function JournalCard({
  locale,
  article,
  featured = false,
  className = "",
}: {
  locale: Locale;
  article: Article;
  featured?: boolean;
  className?: string;
}) {
  const ui = getUI(locale);
  return (
    <article className={`group ${className}`} data-reveal>
      <Link href={`/journal/${article.slug}`} className="block">
        <div className={`media-zoom relative overflow-hidden bg-near-black ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover grayscale-[20%] transition-[filter] duration-700 group-hover:grayscale-0"
            style={{ objectPosition: article.image.position ?? "center" }}
          />
          {article.status === "draft" && (
            <span className="t-label absolute left-4 top-4 rounded-full border border-white/40 bg-black/50 px-3 py-1.5 !text-[0.65rem] text-white/80">
              {ui.common.draft}
            </span>
          )}
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/50">
            <span className="t-label !text-[0.7rem] gradient-text">{ui.categories[article.category] ?? article.category}</span>
            <span aria-hidden="true">·</span>
            {article.date ? <time dateTime={article.date} className="text-xs">{formatDate(article.date, locale)}</time> : <span className="text-xs">{ui.common.unpublished}</span>}
            <span aria-hidden="true">·</span>
            <span className="text-xs">{article.readingTime} {ui.common.minRead}</span>
          </div>
          <h3 className={`display mt-3 leading-[0.95] ${featured ? "t-h3" : "text-[clamp(1.5rem,2.2vw,2.1rem)]"}`}>
            {article.title}
          </h3>
          <p className="mt-3 max-w-[52ch] text-[0.95rem] text-white/65">{article.excerpt}</p>
          {article.author && <p className="mt-3 text-xs text-white/45">{ui.common.by} {article.author}</p>}
        </div>
      </Link>
    </article>
  );
}
