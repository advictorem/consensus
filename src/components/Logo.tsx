import Image from "next/image";
import Link from "@/components/Link";

/**
 * Official stacked Consensus logo (triangle icon + cursive wordmark).
 * Source: /public/brand/consensus-logo-stacked.svg (viewBox 114.38 × 73.5).
 */
export default function Logo({
  className = "",
  height = 56,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * (114.38 / 73.5));
  return (
    <Link href="/" aria-label="Consensus — home" className={`inline-flex ${className}`}>
      <Image
        src="/brand/consensus-logo-stacked.svg"
        alt="Consensus"
        width={width}
        height={height}
        priority={priority}
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
