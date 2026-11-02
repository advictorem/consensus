"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle vertical parallax (desktop only, reduced-motion aware).
 * Transform-only, rAF-throttled. On mobile / reduced motion it renders static.
 */
export default function Parallax({
  children,
  className = "",
  strength = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (reduce.matches || !desktop.matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      // progress: -1 (below viewport) → 1 (above)
      const progress = (vh - rect.top) / (vh + rect.height) - 0.5;
      const y = progress * strength * rect.height * -1;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${1 + strength * 0.9})`;
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
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
