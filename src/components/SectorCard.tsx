import Image from "next/image";
import Link from "next/link";
import type { Sector } from "@/content/types";
import { Arrow } from "./GhostButton";

export default function SectorCard({ sector }: { sector: Sector }) {
  return (
    <li className="border-t border-white/12 last:border-b" data-reveal>
      <Link
        href={`/sectors/${sector.slug}`}
        className="group grid gap-6 py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12"
      >
        <span className="t-label text-white/45 md:col-span-1">{sector.number}</span>
        <div className="md:col-span-6">
          <h3 className="display t-h3 leading-[0.95] transition-colors duration-300 group-hover:gradient-text">
            {sector.title}
          </h3>
          <p className="t-sub mt-4 text-[1.05rem] text-white/85">{sector.positioning}</p>
          <p className="mt-3 max-w-[56ch] text-[0.95rem] text-white/60">{sector.summary}</p>
          <span className="link-line t-label mt-6 inline-flex items-center gap-2 text-white/80 group-hover:text-white">
            Explore <Arrow className="!h-4 !w-4" />
          </span>
        </div>
        <div className="media-zoom relative aspect-[16/10] overflow-hidden bg-near-black md:col-span-5 md:col-start-8">
          <Image
            src={sector.image.src}
            alt={sector.image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale-[60%] transition-[filter,transform] duration-1000 group-hover:grayscale-0"
            style={{ objectPosition: sector.image.position ?? "center" }}
          />
        </div>
      </Link>
    </li>
  );
}
