"use client";

import { useEffect, useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";
import ScrollFadeParallax from "./ScrollFadeParallax";
import { useUI } from "@/i18n/LocaleProvider";

export default function VideoHero({
  lines,
  copy,
}: {
  lines: string[];
  copy: string;
  /** Kept for content compatibility; the hero no longer renders a button. */
  primary?: { label: string; href: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ui = useUI();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) {
        v.pause();
        v.removeAttribute("autoplay");
      } else {
        v.play().catch(() => {});
      }
    };
    apply();
    reduce.addEventListener("change", apply);
    // Pause when off-screen to save battery.
    const io = new IntersectionObserver(
      ([e]) => {
        if (reduce.matches) return;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => {
      reduce.removeEventListener("change", apply);
      io.disconnect();
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/hero-1080.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source src="/media/hero-720.mp4" type="video/mp4" />
      </video>
      {/* Brand purple overlay (multiply) + grounding gradient for text safety */}
      <div className="absolute inset-0 -z-10 bg-[#8e3f8c] mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-[#9e479b]/40 mix-blend-screen" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to top, rgba(20,0,20,0.75) 0%, rgba(20,0,20,0.15) 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="container-x relative w-full pb-[clamp(3rem,8vh,5rem)] pt-[calc(var(--header-h)+5rem)]">
        <AnimatedHeading
          as="h1"
          lines={lines}
          className={`display t-hero !leading-[0.74] max-w-[16ch] ${lines.join(" ").length > 24 ? "t-hero--long" : ""}`}
        />
        <ScrollFadeParallax className="mt-8 flex max-w-6xl flex-col gap-8 md:mt-10">
          <p
            className="max-w-[36ch] text-[clamp(1.25rem,1.7vw,2.1rem)] leading-[1.35] text-white/85"
            data-reveal
            style={{ ["--reveal-delay" as string]: "500ms" }}
          >
            {copy}
          </p>
        </ScrollFadeParallax>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        {/* Type matches the ghost buttons: display face, 300, 0.1em tracking. */}
        <span className="display text-[1.05rem] font-light uppercase leading-none tracking-[0.1em] text-white/70">
          {ui.common.scroll}
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/25">
          <span className="scroll-line absolute inset-x-0 top-0 h-1/2 bg-white" />
        </span>
      </div>
      <style>{`
        @keyframes scrollLine { 0% { transform: translateY(-100%);} 100% { transform: translateY(200%);} }
        .scroll-line { animation: scrollLine 1.8s var(--ease-in-out) infinite; }
        @media (prefers-reduced-motion: reduce) { .scroll-line { animation: none; } }
      `}</style>
    </section>
  );
}
