import type { UI } from "@/i18n/ui";

export const SITE = {
  name: "Consensus Inc.",
  shortName: "Consensus",
  tagline: "Meaningful connections. Measurable impact.",
  description:
    "Consensus is an independent public relations, strategic communications, community engagement, marketing, and creative agency headquartered in Southern California. Four decades of experience. New perspectives on what's next.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://consensus-staging.vercel.app",
  linkedin: "https://www.linkedin.com/company/consensus-inc",
  careersUrl: "https://www.linkedin.com/company/consensus-inc",
  adobeFontsKit: process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT ?? "",
} as const;

export type NavKey = keyof UI["nav"];
export type NavItem = { key: NavKey; href: string; external?: boolean };

export const NAV: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "whatWeDo", href: "/what-we-do" },
  { key: "work", href: "/work" },
  { key: "sectors", href: "/sectors" },
  { key: "journal", href: "/journal" },
  { key: "contact", href: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
  { key: "about", href: "/about" },
  { key: "whatWeDo", href: "/what-we-do" },
  { key: "work", href: "/work" },
  { key: "sectors", href: "/sectors" },
  { key: "journal", href: "/journal" },
  { key: "contact", href: "/contact" },
  { key: "careers", href: SITE.careersUrl, external: true },
];

export const CTA = { href: "/contact" };
