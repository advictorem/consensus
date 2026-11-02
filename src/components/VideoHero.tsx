"use client";

import { useEffect, useRef } from "react";
import GhostButton from "./GhostButton";
import AnimatedHeading from "./AnimatedHeading";

export default function VideoHero({
  lines,
  copy,
  primary,
  secondary,
}: {
  lines: string[];
  copy: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      {/* Tonal overlay: dark base with a whisper of brand purple at the edges */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.35) 100%), radial-gradient(120% 90% at 85% 10%, rgba(158,71,155,0.28), transparent 60%)",
        }}
      />

      <div className="container-x relative w-full pb-[clamp(3rem,8vh,6rem)] pt-[calc(var(--header-h)+3rem)]">
        <AnimatedHeading
          as="h1"
          lines={lines}
          className="display t-hero max-w-[12ch]"
        />
        <div className="mt-10 flex max-w-5xl flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
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
            <GhostButton href={primary.href}>{primary.label}</GhostButton>
            <GhostButton href={secondary.href} arrow={false}>
              {secondary.label}
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
        <span className="t-label text-white/50">Scroll</span>
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
