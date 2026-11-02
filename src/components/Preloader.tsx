"use client";

import { useEffect, useState } from "react";
import { markPreloaderDone } from "@/lib/preloader-gate";

const KEY = "consensus-preloaded";
const SHOW_MS = 2200;

/**
 * Black intro screen: the LAX Theme Building loop plays inside the Consensus
 * triangle silhouette (CSS mask), then the whole screen fades into the page.
 * Shown once per browser session; skipped under prefers-reduced-motion.
 */
export default function Preloader() {
  // Render the screen immediately (SSR) so there is no flash; decide on the client whether to keep it.
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = window.setTimeout(() => {
      if (seen || reduce) {
        setPhase("done");
        markPreloaderDone();
      }
    }, 0);
    if (seen || reduce) return () => window.clearTimeout(t0);
    document.documentElement.style.overflow = "hidden";
    // Hand off at the start of the fade so the hero animates in through it.
    const t1 = window.setTimeout(() => {
      setPhase("fade");
      markPreloaderDone();
    }, SHOW_MS);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
    }, SHOW_MS + 900);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-[900ms] ease-[var(--ease-in-out)] ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="preloader-mark h-[112px] w-[108px] md:h-[160px] md:w-[154px]"
        style={{
          WebkitMaskImage: "url(/preloader/logo-mask.png)",
          maskImage: "url(/preloader/logo-mask.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/preloader/lax.gif" alt="" className="h-full w-full object-cover grayscale" />
      </div>
    </div>
  );
}
