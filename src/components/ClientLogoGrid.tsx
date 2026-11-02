import Image from "next/image";
import type { ClientLogo } from "@/content/types";

/**
 * Flat white marks on black. Logos without a sourced white asset render as a
 * type-set name in the display face (clearly a placeholder; see HANDOFF.md).
 */
export default function ClientLogoGrid({ logos }: { logos: ClientLogo[] }) {
  return (
    <ul
      className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-x-10 lg:gap-y-16"
      role="list"
      aria-label="Selected clients"
    >
      {logos.map((l, i) => (
        <li
          key={l.name}
          className="flex h-16 items-center justify-center opacity-85 transition-[opacity,transform] duration-500 hover:scale-[1.04] hover:opacity-100 md:h-20"
          data-reveal
          style={{ ["--reveal-delay" as string]: `${(i % 6) * 60}ms` }}
        >
          {l.src ? (
            <Image
              src={l.src}
              alt={l.name}
              width={l.width ?? 160}
              height={l.height ?? 64}
              className="h-auto max-h-12 w-auto max-w-[80%] md:max-h-14"
            />
          ) : (
            <span
              className="display-light text-center text-[0.95rem] leading-tight text-white/85 md:text-[1.05rem]"
              title={`${l.name} — official white logo pending`}
              data-placeholder="logo"
            >
              {l.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
