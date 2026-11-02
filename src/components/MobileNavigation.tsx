"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV, CTA, SITE } from "@/lib/site";
import GhostButton from "./GhostButton";

export default function MobileNavigation({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-black transition-[opacity,visibility] duration-500 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="gradient-rule absolute inset-x-0 top-0 opacity-60" />
      <nav
        aria-label="Mobile"
        className="container-x flex h-full flex-col justify-between pb-10"
        style={{ paddingTop: "calc(var(--header-h) + 1.5rem)" }}
      >
        <ul className="flex flex-col gap-1">
          {NAV.map((item, i) => (
            <li
              key={item.href}
              style={{
                transition: "opacity .6s var(--ease-out), transform .7s var(--ease-out)",
                transitionDelay: open ? `${120 + i * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(18px)",
              }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`display block py-2 text-[clamp(2.6rem,11vw,4.5rem)] leading-[0.95] transition-colors ${
                  isActive(item.href) ? "gradient-text" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="flex flex-col gap-6"
          style={{
            transition: "opacity .6s var(--ease-out)",
            transitionDelay: open ? "480ms" : "0ms",
            opacity: open ? 1 : 0,
          }}
        >
          <GhostButton href={CTA.href} size="lg" className="self-start">
            {CTA.label}
          </GhostButton>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="t-label text-white/60"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
  );
}
