import type { Capability } from "./types";

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    slug: "strategy-insights",
    title: "Strategy & Insights",
    short: "Brand positioning, audience research, messaging, strategic planning, public affairs, and campaign development.",
    description:
      "Every meaningful program starts with understanding—who matters, what they believe, and what will move them. We pair four decades of strategic judgment with research, data, and audience intelligence to shape positioning, messaging, and plans that hold up in the real world.",
    services: [
      "Brand positioning",
      "Audience & stakeholder research",
      "Message development",
      "Strategic communications planning",
      "Public affairs strategy",
      "Campaign development",
      "Issue mapping & scenario planning",
    ],
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Downtown Los Angeles skyline at dusk framed by palm trees", position: "50% 40%" },
    relatedProjects: ["california-lottery", "goodman-north-america"],
  },
  {
    number: "02",
    slug: "public-relations-reputation",
    title: "Public Relations & Reputation",
    short: "Media relations, corporate communications, crisis management, reputation, and issue management.",
    description:
      "Reputation is built before it's tested. We help organizations earn coverage that matters, communicate with clarity under pressure, and manage the issues that shape how the public, the press, and policymakers see them.",
    services: [
      "Media relations",
      "Corporate communications",
      "Crisis communications & response",
      "Issue management",
      "Executive visibility & thought leadership",
      "Reputation strategy",
      "Media training",
    ],
    image: { src: "/images/la/urban-light.jpg", alt: "Rows of illuminated vintage street lamps at night", position: "50% 55%" },
    relatedProjects: ["goodman-north-america", "nestle"],
  },
  {
    number: "03",
    slug: "creative-storytelling",
    title: "Creative & Storytelling",
    short: "Branding, identity, copywriting, filmmaking, content strategy, design, photography, and motion.",
    description:
      "Strategy tells you what to say. Creative makes people feel it. Our in-house creative team—Consensus Creative—turns insight into identity, film, design, and content that people remember and share.",
    services: [
      "Brand identity & design",
      "Copywriting & editorial",
      "Film & video production",
      "Photography",
      "Motion & animation",
      "Content strategy",
      "Campaign creative",
    ],
    image: { src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory overlooking the Los Angeles basin", position: "60% 50%" },
    relatedProjects: ["california-lottery"],
  },
  {
    number: "04",
    slug: "digital-technology",
    title: "Digital & Technology",
    short: "Digital communications, websites, social media, digital campaigns, analytics, audience intelligence, and verified AI-assisted insights.",
    description:
      "Technology changes how we communicate; people give it meaning. We build digital experiences and campaigns grounded in analytics and audience intelligence—including AI-powered social listening through our strategic partner, AlphaVu—so every channel works harder and smarter.",
    services: [
      "Digital strategy",
      "Websites & digital experiences",
      "Social media strategy & management",
      "Paid & organic digital campaigns",
      "Analytics & measurement",
      "AI-assisted social listening (with AlphaVu)",
      "Audience intelligence",
    ],
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Aerial view of the Venice and Marina del Rey coastline", position: "50% 60%" },
    relatedProjects: ["california-lottery"],
  },
  {
    number: "05",
    slug: "community-culture",
    title: "Community & Culture",
    short: "Stakeholder relationships, multicultural communications, community engagement, public participation, and outreach.",
    description:
      "The most durable outcomes are built with communities, not announced to them. We design engagement that is authentic, multilingual, and culturally fluent—bringing residents, neighbors, and stakeholders into the conversation early and keeping them there.",
    services: [
      "Community engagement & outreach",
      "Stakeholder mapping & relations",
      "Multicultural & multilingual communications",
      "Public participation programs",
      "Community meetings & facilitation",
      "Coalition building",
      "Grassroots mobilization",
    ],
    image: { src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory terrace with the city beyond", position: "20% 50%" },
    relatedProjects: ["hollywood-bowl"],
  },
  {
    number: "06",
    slug: "campaigns-experiences",
    title: "Campaigns & Experiences",
    short: "Public awareness, advocacy, integrated media, events, activations, and experiential communications.",
    description:
      "When a message needs to reach the whole state—or one neighborhood—we build integrated campaigns that connect earned, owned, paid, and in-person moments into a single, measurable story.",
    services: [
      "Public awareness campaigns",
      "Advocacy & ballot communications",
      "Integrated media planning",
      "Events & activations",
      "Experiential communications",
      "Partnership & influencer programs",
      "Campaign measurement",
    ],
    image: { src: "/images/la/urban-light.jpg", alt: "Visitors among the Urban Light installation at night", position: "50% 70%" },
    relatedProjects: ["california-lottery", "hollywood-bowl"],
  },
];

export const getCapability = (slug: string) => CAPABILITIES.find((c) => c.slug === slug);
