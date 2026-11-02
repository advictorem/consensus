import Image from "next/image";

export type Location = { title: string[]; label: string; note?: string; image: { src: string; alt: string; position?: string } };

export default function LocationPanels({ locations }: { locations: Location[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-0">
      {locations.map((loc, i) => {
        const first = i === 0;
        return (
          <div
            key={loc.label}
            className={`group relative overflow-hidden bg-near-black ${
              first
                ? "aspect-[4/5] md:col-span-7 md:aspect-[4/3]"
                : "aspect-[4/5] md:col-span-6 md:col-start-7 md:-mt-24 md:aspect-[4/3] md:border-[10px] md:border-black"
            }`}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 150}ms` }}
          >
            <Image
              src={loc.image.src}
              alt={loc.image.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover grayscale-[30%] transition-[transform,filter] duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.04] group-hover:grayscale-0"
              style={{ objectPosition: loc.image.position ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-700 group-hover:opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <p className="t-label mb-4 text-white/70">{loc.label}</p>
              <h3 className="display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.86]">
                {loc.title.map((t, j) => (
                  <span key={j} className="block">
                    {t}
                  </span>
                ))}
              </h3>
              {loc.note && <p className="mt-4 max-w-[36ch] text-sm text-white/65">{loc.note}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
