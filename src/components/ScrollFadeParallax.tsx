"use client";

import { useEffect, useRef } from "react";

/**
 * Hero copy drift: as the page scrolls the block rises faster than the
 * background and fades out, so the hero feels layered. Transform-only and
 * rAF-throttled; inert under prefers-reduced-motion.
 */
export default function ScrollFadeParallax({
  children,
  className = "",
  speed = 0.28,
  fadeOver = 0.55,
}: {
  children: React.ReactNode;
  className?: string;
  /** Px of upward drift per px scrolled. */
  speed?: number;
  /** Fraction of the viewport over which opacity reaches 0. */
  fadeOver?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 1;
      const p = Math.min(1, y / (vh * fadeOver));
      el.style.transform = `translate3d(0, ${(-y * speed).toFixed(1)}px, 0)`;
      el.style.opacity = String(1 - p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, fadeOver]);

  return (
    <div ref={ref} className={`will-change-[transform,opacity] ${className}`}>
      {children}
    </div>
  );
}
