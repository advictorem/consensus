"use client";

import { useEffect, useRef } from "react";
import GhostButton from "./GhostButton";
import AnimatedHeading from "./AnimatedHeading";
import { useUI } from "@/i18n/LocaleProvider";

export default function VideoHero({
  lines,
  copy,
  primary,
}: {
  lines: string[];
  copy: string;
  primary: { label: string; href: string };
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
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-black">
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

      <div className="container-x relative w-full pb-[calc(clamp(3rem,8vh,6rem)+40px)] pt-[calc(var(--header-h)+3rem)]">
        <AnimatedHeading
          as="h1"
          lines={lines}
          className={`display t-hero max-w-[14ch] ${lines.join(" ").length > 24 ? "t-hero--long" : ""}`}
        />
        <div className="mt-10 flex max-w-6xl flex-col gap-8 md:mt-12">
          <p
            className="t-lead max-w-[36ch] text-white/85"
            data-reveal
            style={{ ["--reveal-delay" as string]: "500ms" }}
          >
            {copy}
          </p>
          <div
            className="flex flex-wrap gap-4"
            data-reveal
            style={{ ["--reveal-delay" as string]: "700ms" }}
          >
            <GhostButton href={primary.href} size="lg">
              {primary.label}
            </GhostButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-[var(--gutter)] hidden items-center gap-3 md:flex"
        aria-hidden="true"
        data-reveal
        style={{ ["--reveal-delay" as string]: "1100ms" }}
      >
        <span className="t-label text-white/50">{ui.common.scroll}</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/20">
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
