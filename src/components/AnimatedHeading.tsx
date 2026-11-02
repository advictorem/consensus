import type { JSX } from "react";

/**
 * Line-by-line masked text reveal. Each line is wrapped so it slides up from
 * behind an overflow mask. Works with RevealObserver via [data-reveal="lines"].
 */
export default function AnimatedHeading({
  as: Tag = "h2",
  lines,
  className = "",
  id,
}: {
  as?: keyof JSX.IntrinsicElements;
  lines: string[];
  className?: string;
  id?: string;
}) {
  const Comp = Tag as "h1";
  return (
    <Comp id={id} className={className} data-reveal="lines">
      {lines.map((line, i) => (
        <span key={i} style={{ ["--i" as string]: i }}>
          <span>{line}</span>
        </span>
      ))}
    </Comp>
  );
}
