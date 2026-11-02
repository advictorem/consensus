"use client";

import { useRef, useState } from "react";
import { useUI } from "@/i18n/LocaleProvider";

/**
 * Self-hosted campaign film. Shows a poster with a play control; the video
 * element only starts loading once the viewer asks for it.
 */
export default function FilmPlayer({
  src,
  poster,
  title,
  aspect = "aspect-video",
}: {
  src: string;
  poster: string;
  title: string;
  aspect?: string;
}) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ui = useUI();

  return (
    <div className={`relative overflow-hidden bg-near-black ${aspect}`}>
      <video
        ref={videoRef}
        src={active ? src : undefined}
        poster={poster}
        controls={active}
        playsInline
        preload="none"
        title={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!active && (
        <button
          type="button"
          onClick={() => {
            setActive(true);
            // The src lands on the same tick; play on the next one.
            requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
          }}
          className="group absolute inset-0 flex items-end justify-between p-6 text-left md:p-8"
          aria-label={`${ui.common.play}: ${title}`}
        >
          <span className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />
          <span className="relative">
            <span className="display block text-[clamp(1.4rem,2.4vw,2.2rem)] leading-none">{title}</span>
          </span>
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/70 transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white" aria-hidden="true">
              <path d="M7 4l12 8-12 8z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
