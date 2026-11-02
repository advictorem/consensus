export type Media = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "50% 30%" */
  position?: string;
  /** Optional video (mp4) for hover/preview */
  video?: string;
};

export type Discipline =
  | "Campaigns"
  | "Creative"
  | "Community"
  | "Digital"
  | "Strategy"
  | "Public Relations";

export type Capability = {
  number: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  services: string[];
  image: Media;
  relatedProjects: string[]; // project slugs
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  descriptor: string;
  disciplines: Discipline[];
  tags: string[];
  featured?: boolean;
  featuredOrder?: number;
  size?: "xl" | "lg" | "md";
  hero: Media;
  thumb: Media;
  intro: string;
  challenge?: string;
  strategy?: string;
  execution?: string;
  outcomes?: { value: string; label: string; note?: string }[];
  outcomesNote?: string;
  vimeo?: { showcase?: string; videoId?: string; title: string }[];
  /** Self-hosted campaign film, played from our own origin (no third party). */
  film?: { src: string; poster: string; title: string };
  gallery?: Media[];
  related?: string[];
  /** Internal: items the client must approve before publishing. */
  approvals?: string[];
};

export type Sector = {
  number: string;
  slug: string;
  title: string;
  positioning: string;
  summary: string;
  context: string;
  challenges: string[];
  perspective: string;
  capabilities: string[]; // capability slugs
  caseStudies: string[]; // case-study slugs
  image: Media;
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  sector: string;
  overview: string;
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  impact: string;
  impactStats?: { value: string; label: string }[];
  relatedCapabilities: string[];
  image: Media;
  approvals?: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  portrait?: Media;
  linkedin?: string;
  verified: boolean;
};

export type Article = {
  slug: string;
  title: string;
  category:
    | "Strategy"
    | "Technology & AI"
    | "Creative & Culture"
    | "Public Affairs"
    | "Community"
    | "Insights & Perspectives";
  excerpt: string;
  date?: string; // ISO; undefined for drafts
  author?: string;
  readingTime: number;
  image: Media;
  status: "published" | "draft";
  sourceUrl?: string;
  body: string[]; // paragraphs
};

export type ClientLogo = {
  name: string;
  /** Path under /public/images/clients. undefined = not yet sourced. */
  src?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};
