"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed text fill: every word starts dimmed and brightens to white
 * in reading order as the paragraph moves through the viewport (the
 * "highlight as you read" effect). Static white under reduced motion.
 */
export default function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spans = el.querySelectorAll<HTMLSpanElement>("[data-w]");
    if (reduce) {
      gsap.set(spans, { opacity: 1 });
      return;
    }
    gsap.set(spans, { opacity: 0.18 });
    const tween = gsap.to(spans, {
      opacity: 1,
      ease: "none",
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 45%",
        scrub: 0.6,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text]);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} data-w aria-hidden="true" className="inline-block will-change-[opacity]">
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
