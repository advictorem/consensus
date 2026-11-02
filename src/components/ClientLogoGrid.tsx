import Image from "next/image";
import type { ClientLogo } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

/**
 * Flat white marks on black. Logos without a sourced white asset render as a
 * type-set name in the display face (clearly a placeholder; see HANDOFF.md).
 */
export default function ClientLogoGrid({ logos, locale }: { logos: ClientLogo[]; locale: Locale }) {
  const ui = getUI(locale);
  return (
    <ul
      className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-20"
      role="list"
      aria-label={ui.common.selectedClients}
    >
      {logos.map((l, i) => (
        <li
          key={l.name}
          className="logo-cell flex h-10 items-center justify-center md:h-12"
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
        >
          {l.src ? (
            <Image
              src={l.src}
              alt={l.name}
              width={l.width ?? 160}
              height={l.height ?? 64}
              className="h-full w-full object-contain"
              style={{ maxHeight: "100%", maxWidth: "60%" }}
              unoptimized
            />
          ) : (
            <span
              className="display-light text-center text-[0.95rem] leading-tight text-white/85 md:text-[1.05rem]"
              title={`${l.name} — ${ui.common.logoPending}`}
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
