import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import Parallax from "./Parallax";

export type HeroImage = { src: string; alt: string; position?: string };

export default function InteriorHero({
  eyebrow,
  lines,
  copy,
  image,
  compact = false,
  children,
}: {
  eyebrow?: string;
  lines: string[];
  copy?: string;
  image: HeroImage;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`relative isolate flex overflow-hidden bg-black ${
        compact ? "min-h-[62svh]" : "min-h-[82svh]"
      } items-end`}
    >
      <Parallax className="absolute inset-0 -z-20" strength={0.18}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: image.position ?? "center" }}
        />
      </Parallax>
      {/* 30% black overlay + grounding gradient for text safety */}
      <div className="absolute inset-0 -z-10 bg-black/30" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.25) 100%)" }}
      />

      <div className="container-x relative w-full pb-[clamp(3rem,7vh,5.5rem)] pt-[calc(var(--header-h)+4rem)]">
        {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
        <AnimatedHeading as="h1" lines={lines} className="display t-interior max-w-[14ch]" />
        {copy && (
          <p
            className="t-lead mt-8 max-w-[44ch] text-white/85"
            data-reveal
            style={{ ["--reveal-delay" as string]: "450ms" }}
          >
            {copy}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
