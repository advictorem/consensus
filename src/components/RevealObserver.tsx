"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { onPreloaderDone } from "@/lib/preloader-gate";

/**
 * Lightweight, framework-free scroll reveal. Any element with [data-reveal]
 * gets .is-in when it enters the viewport. CSS in globals.css does the motion.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    // Wait for the preloader so above-the-fold reveals aren't spent behind it.
    const cancel = onPreloaderDone(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-in"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
      );
      els.forEach((el) => io!.observe(el));
    });

    return () => {
      cancel();
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
