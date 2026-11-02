import type { Article } from "./types";
import { readingTime } from "@/lib/format";

export const JOURNAL_CATEGORIES = [
  "Strategy",
  "Technology & AI",
  "Creative & Culture",
  "Public Affairs",
  "Community",
  "Insights & Perspectives",
] as const;

const draft = (a: Omit<Article, "readingTime" | "status" | "date" | "author">): Article => ({
  ...a,
  status: "draft",
  readingTime: readingTime(a.body),
});

/**
 * PUBLISHED entries are preserved from consensusinc.com / "The Latest".
 * DRAFT entries are proposed topics from the redesign brief: no date, no
 * author, no-index, and clearly labelled until written and approved.
 */
export const ARTICLES: Article[] = [
  draft({
    slug: "what-ai-cant-replace",
    title: "What AI Can't Replace: The Human Side of Influence",
    category: "Technology & AI",
    excerpt:
      "Models can summarize a community meeting in seconds. They can't earn the trust that got people into the room. A look at where technology sharpens communications—and where people still do the work.",
    image: { src: "/images/la/urban-light.jpg", alt: "People gathered among glowing lamp posts at night", position: "50% 60%" },
    body: [
      "Draft — to be written. This article will explore how AI-assisted research, social listening, and content tools are changing the day-to-day practice of public relations and community engagement, and why relationships, judgment, and cultural fluency remain the differentiators.",
      "Proposed sections: what we use AI for today (through partners such as AlphaVu); what we don't delegate; a practical framework for leaders deciding where technology belongs in their communications function.",
    ],
  }),
  draft({
    slug: "community-engagement-competitive-advantage",
    title: "Why Community Engagement Is a Competitive Advantage",
    category: "Community",
    excerpt:
      "The projects that get built, the campaigns that land, and the brands that last all have one thing in common: they listened first. Engagement isn't a cost center. It's the strategy.",
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "A dense coastal neighborhood seen from above", position: "50% 55%" },
    body: [
      "Draft — to be written. This article will make the business case for early, authentic community engagement across real estate, infrastructure, and public-sector work, drawing on four decades of Consensus experience.",
      "Proposed sections: the cost of engaging late; what authentic participation looks like; measuring engagement beyond attendance.",
    ],
  }),
  draft({
    slug: "trust-is-built-before-the-crisis",
    title: "Trust Is Built Before the Crisis Begins",
    category: "Strategy",
    excerpt:
      "By the time the story breaks, the outcome is mostly decided. Crisis communications starts years earlier—in the relationships, the transparency, and the habits an organization builds when nothing is wrong.",
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "A city skyline rising through fog", position: "50% 40%" },
    body: [
      "Draft — to be written. This article will outline a crisis-preparedness approach grounded in stakeholder relationships, message discipline, and regulator coordination, with lessons from environmental and corporate issue management.",
      "Proposed sections: the trust ledger; preparedness as a practice; the first 24 hours.",
    ],
  }),
  {
    slug: "consensus-in-the-news",
    title: "Consensus in the News",
    category: "Insights & Perspectives",
    excerpt:
      "The San Fernando Valley Business Journal spoke with Consensus about the trends shaping the future of work in the Los Angeles PR market—from the rise of content creators to the hiring crunch.",
    date: "2022-04-28",
    author: "Consensus Staff",
    readingTime: 2,
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Downtown Los Angeles skyline at dusk", position: "50% 45%" },
    status: "published",
    sourceUrl: "https://consensusinc.com/consensus-in-the-news/",
    body: [
      "The San Fernando Valley Business Journal published an article quoting Consensus on the trends shaping the future of work in the Los Angeles public relations market, including the growing role of content creators and the hiring pressures facing agencies.",
      "The piece features the Consensus office in the Burbank Media District. Read the full article at the San Fernando Valley Business Journal: https://www.sfvbj.com/media/public-relations/pr-firms-face-content-creators-paradigm-shifthiring-crunch-is-also-causing-some-consternation/",
    ],
  },
  {
    slug: "three-ways-wework-is-killing-the-commute",
    title: "Three Ways WeWork Is Killing the Commute",
    category: "Creative & Culture",
    excerpt:
      "For this year's Consensus article, we highlight one of our most innovative clients, WeWork—and how its approach to the workplace is changing how people move through the city.",
    date: "2017-08-22",
    author: "Consensus",
    readingTime: 4,
    image: { src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory overlooking Los Angeles", position: "60% 50%" },
    status: "published",
    sourceUrl: "https://medium.com/@ConsensusLive/three-ways-wework-is-killing-the-commute-ae64536383b3",
    body: [
      "This article was originally published on the Consensus Medium channel. It highlights WeWork, one of the firm's most innovative clients, and three ways its workplace model reduces the daily commute for Los Angeles workers.",
      "Read the full article on Medium: https://medium.com/@ConsensusLive/three-ways-wework-is-killing-the-commute-ae64536383b3",
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
export const getLatestArticles = (n: number) => ARTICLES.slice(0, n);
