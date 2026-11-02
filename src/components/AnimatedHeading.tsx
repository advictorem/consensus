import type { JSX } from "react";

/**
 * Large display headline with a staggered fade-wipe per line: each line is
 * revealed left→right by a clip-path while fading in from a soft blur.
 * Driven by RevealObserver via [data-reveal="wipe"]; CSS in globals.css.
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
    <Comp id={id} className={className} data-reveal="wipe">
      {lines.map((line, i) => (
        <span key={i} className="block" style={{ ["--reveal-delay" as string]: `${i * 320}ms` }}>
          {line}
        </span>
      ))}
    </Comp>
  );
}
