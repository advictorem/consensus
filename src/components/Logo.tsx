import Link from "@/components/Link";
import WordmarkReveal from "./WordmarkReveal";

/**
 * Header mark: the cursive Consensus wordmark, inked in by the same sweep the
 * footer wordmark uses (played once the preloader clears). The colored
 * triangle lives in the bottom-right badge.
 */
export default function Logo({ className = "", height = 46 }: { className?: string; height?: number }) {
  const width = Math.round(height * (1293.89 / 372.42));
  return (
    <Link href="/" aria-label="Consensus — home" className={`inline-flex text-white ${className}`} style={{ width, height }}>
      <WordmarkReveal trigger="preloader" duration={1.5} className="h-full w-full select-none" />
    </Link>
  );
}
