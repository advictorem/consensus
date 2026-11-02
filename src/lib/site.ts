export const SITE = {
  name: "Consensus Inc.",
  shortName: "Consensus",
  tagline: "Meaningful connections. Measurable impact.",
  description:
    "Consensus is an independent public relations, strategic communications, community engagement, marketing, and creative agency headquartered in Southern California. Four decades of experience. New perspectives on what's next.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://consensus-staging.vercel.app",
  locale: "en_US",
  linkedin: "https://www.linkedin.com/company/consensus-inc",
  careersUrl: "https://www.linkedin.com/company/consensus-inc",
  adobeFontsKit: process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT ?? "",
} as const;

export type NavItem = { label: string; href: string; external?: boolean };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Sectors", href: "/sectors" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Sectors", href: "/sectors" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: SITE.careersUrl, external: true },
];

export const CTA = { label: "Let's Talk", href: "/contact" };
