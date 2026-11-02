"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type BandStat = { value: number; suffix?: string; prefix?: string; label: string };

/** Four centered stats; numbers count up once when the band scrolls into view. */
export default function StatsBand({ stats }: { stats: BandStat[] }) {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nums = el.querySelectorAll<HTMLSpanElement>("[data-count]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nums.forEach((n) => (n.textContent = n.dataset.count ?? ""));
      return;
    }
    const tweens: gsap.core.Tween[] = [];
    nums.forEach((n, i) => {
      const target = Number(n.dataset.count);
      const obj = { v: 0 };
      tweens.push(
        gsap.to(obj, {
          v: target,
          duration: 2,
          delay: i * 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
          onUpdate: () => (n.textContent = Math.round(obj.v).toLocaleString()),
        }),
      );
    });
    return () => tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
  }, []);

  return (
    <dl ref={ref} className="grid grid-cols-2 gap-y-14 md:grid-cols-4 md:gap-y-0">
      {stats.map((s, i) => (
        <div key={s.label} className={`flex flex-col items-center text-center ${i > 0 ? "md:border-l md:border-white/10" : ""}`} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
          <dd className="display order-1 text-[clamp(3.6rem,7vw,7.5rem)] leading-none">
            {s.prefix}
            <span data-count={s.value}>0</span>
            {s.suffix}
          </dd>
          <dt className="t-label order-2 mt-5 !text-[0.95rem] !tracking-[0.2em] text-white/70">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
