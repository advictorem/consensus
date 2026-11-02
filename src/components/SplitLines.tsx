"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Line-by-line text reveal (à la Framer "split lines"): words are wrapped,
 * grouped into visual lines by their rendered position, and each line slides
 * up from behind a mask with a stagger. Re-splits on resize. Static under
 * prefers-reduced-motion.
 */
export default function SplitLines({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  stagger = 0.12,
}: {
  text: string;
  as?: "p" | "h2" | "h3" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let tl: gsap.core.Timeline | null = null;
    let played = false;

    const build = () => {
      tl?.kill();
      // 1. reset to plain words
      const words = text.split(/\s+/).filter(Boolean);
      el.innerHTML = words.map((w) => `<span class="sl-w" style="display:inline-block">${w}&nbsp;</span>`).join("");
      // 2. group by offsetTop into lines
      const spans = Array.from(el.querySelectorAll<HTMLSpanElement>(".sl-w"));
      const lines: HTMLSpanElement[][] = [];
      let top: number | null = null;
      for (const s of spans) {
        if (top === null || Math.abs(s.offsetTop - top) > 2) {
          top = s.offsetTop;
          lines.push([]);
        }
        lines[lines.length - 1].push(s);
      }
      // 3. wrap each line in a mask
      el.innerHTML = "";
      const inner: HTMLSpanElement[] = [];
      for (const line of lines) {
        const mask = document.createElement("span");
        mask.className = "sl-line";
        mask.style.cssText = "display:block;overflow:hidden;";
        const move = document.createElement("span");
        move.style.cssText = "display:block;will-change:transform,opacity;";
        move.innerHTML = line.map((s) => s.outerHTML).join("");
        mask.appendChild(move);
        el.appendChild(mask);
        inner.push(move);
      }
      if (played) {
        gsap.set(inner, { yPercent: 0, opacity: 1 });
        return;
      }
      gsap.set(inner, { yPercent: 110, opacity: 0 });
      tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        delay,
        onStart: () => {
          played = true;
        },
      });
      tl.to(inner, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger });
    };

    build();
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(build);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, [text, delay, stagger]);

  const Comp = Tag as "p";
  return (
    <Comp ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      {text}
    </Comp>
  );
}
