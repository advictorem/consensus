"use client";

import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, CTA } from "@/lib/site";
import { stripLocale } from "@/i18n/config";
import { useUI } from "@/i18n/LocaleProvider";
import Logo from "./Logo";
import GhostButton from "./GhostButton";
import MobileNavigation from "./MobileNavigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  const pathname = usePathname();
  const ui = useUI();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Close the mobile menu on route change (render-phase state reset pattern).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const { path } = stripLocale(pathname ?? "/");
  const isActive = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
          scrolled && !open
            ? "bg-black/80 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between" style={{ height: "var(--header-h)" }}>
          <Logo height={78} priority className="relative z-[60]" />

          <nav aria-label={ui.a11y.primaryNav} className="hidden items-center gap-9 lg:flex">
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="link-line t-label !text-[1.25rem] text-white/90 transition-colors hover:text-white"
              >
                {ui.nav[item.key]}
              </Link>
            ))}
            <GhostButton href={CTA.href} arrow={false} className="btn--nav ml-2">
              {ui.nav.cta}
            </GhostButton>
            <LanguageSwitcher className="ml-3" size="md" />
          </nav>

          <div className="flex items-center gap-5 lg:hidden">
            <LanguageSwitcher className="relative z-[60]" size="md" />
            <button
              type="button"
              className="relative z-[60] -mr-2 flex h-12 w-12 items-center justify-center"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.a11y.closeMenu : ui.a11y.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-4 w-7">
                <span className={`absolute left-0 top-0 h-px w-full bg-white transition-transform duration-500 ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-1/2 h-px w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-500 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </>
  );
}
