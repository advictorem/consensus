"use client";

import { useState } from "react";

/**
 * Click-to-load Vimeo player (no third-party JS until the user asks for it).
 */
export default function VimeoEmbed({
  videoId,
  title,
  poster,
  aspect = "aspect-video",
}: {
  videoId: string;
  title: string;
  poster?: string;
  aspect?: string;
}) {
  const [active, setActive] = useState(false);
  const src = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`;

  return (
    <div className={`relative overflow-hidden bg-near-black ${aspect}`}>
      {active ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-end justify-between p-6 text-left md:p-8"
          aria-label={`Play video: ${title}`}
          style={
            poster
              ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }
              : undefined
          }
        >
          <span className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />
          <span className="relative">
            <span className="t-label block text-white/70">Vimeo</span>
            <span className="display mt-2 block text-[clamp(1.4rem,2.4vw,2.2rem)] leading-none">{title}</span>
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
