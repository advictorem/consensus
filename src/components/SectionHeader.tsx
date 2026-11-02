import AnimatedHeading from "./AnimatedHeading";

export default function SectionHeader({
  eyebrow,
  lines,
  copy,
  size = "h2",
  className = "",
  headingClassName = "",
  id,
}: {
  eyebrow?: string;
  lines: string[];
  copy?: string;
  size?: "h2" | "h3";
  className?: string;
  headingClassName?: string;
  id?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="eyebrow mb-6" data-reveal>
          {eyebrow}
        </p>
      )}
      <AnimatedHeading
        as="h2"
        id={id}
        lines={lines}
        className={`display ${size === "h2" ? "t-h2" : "t-h3"} ${headingClassName}`}
      />
      {copy && (
        <p className="t-lead mt-8 max-w-[46ch] text-white/80" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
          {copy}
        </p>
      )}
    </div>
  );
}
