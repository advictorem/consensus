import Image from "next/image";
import Link from "@/components/Link";

/**
 * Header mark: the cursive Consensus wordmark only (the colored triangle lives
 * in the bottom-right badge). Source: /public/brand/consensus-wordmark.svg
 * (viewBox 1293.89 × 372.42).
 */
export default function Logo({
  className = "",
  height = 44,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * (1293.89 / 372.42));
  return (
    <Link href="/" aria-label="Consensus — home" className={`inline-flex ${className}`}>
      <Image
        src="/brand/consensus-wordmark.svg"
        alt="Consensus"
        width={width}
        height={height}
        priority={priority}
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
