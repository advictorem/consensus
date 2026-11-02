"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "@/components/Link";

/**
 * Signature brand interaction.
 * The circular Consensus badge ring rotates CLOCKWISE in proportion to scroll
 * velocity (absolute delta), regardless of direction; the triangle icon stays
 * fixed in the center. Transform-only, rAF-driven, no React state per frame.
 */
export default function ScrollRotatingBadge() {
  const ringRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const wrap = wrapRef.current;
    if (!ring || !wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let angle = 0;
    let target = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let running = false;

    const tick = () => {
      // Ease the accumulated angle for a smooth decel when scrolling stops.
      const diff = target - angle;
      if (Math.abs(diff) < 0.02) {
        angle = target;
        ring.style.transform = `rotate(${angle}deg)`;
        running = false;
        return;
      }
      angle += diff * 0.12;
      ring.style.transform = `rotate(${angle}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      lastY = y;
      if (reduce.matches) return;
      target += delta * 0.35; // degrees per pixel
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      data-visible="true"
      className="pointer-events-none fixed bottom-5 right-5 z-40 transition-[opacity,transform] duration-700 data-[visible=false]:translate-y-3 data-[visible=false]:opacity-0 md:bottom-8 md:right-8"
      aria-hidden="true"
    >
      <Link
        href="/contact"
        tabIndex={-1}
        className="pointer-events-auto relative block h-[78px] w-[78px] md:h-[110px] md:w-[110px]"
      >
        <div
          ref={ringRef}
          className="absolute inset-0 will-change-transform"
          style={{ mixBlendMode: "difference" }}
        >
          <Image src="/brand/consensus-badge.svg" alt="" width={110} height={110} className="h-full w-full" />
        </div>
        <Image
          src="/brand/consensus-icon.svg"
          alt=""
          width={28}
          height={29}
          className="absolute left-1/2 top-1/2 h-[36%] w-auto -translate-x-1/2 -translate-y-1/2"
        />
      </Link>
    </div>
  );
}
