"use client";

import GhostButton from "@/components/GhostButton";
import { useUI } from "@/i18n/LocaleProvider";

export default function NotFound() {
  const ui = useUI();
  return (
    <section className="container-x flex min-h-[80svh] flex-col justify-end pb-[var(--section)] pt-[calc(var(--header-h)+4rem)]">
      <p className="eyebrow mb-6">404</p>
      <h1 className="display t-interior">
        {ui.common.nothingHere[0]}
        <br />
        {ui.common.nothingHere[1]}
      </h1>
      <p className="t-lead mt-8 max-w-[40ch] text-white/75">{ui.common.notFoundCopy}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <GhostButton href="/">{ui.common.backHome}</GhostButton>
        <GhostButton href="/work" arrow={false}>
          {ui.common.seeOurWork}
        </GhostButton>
      </div>
    </section>
  );
}
