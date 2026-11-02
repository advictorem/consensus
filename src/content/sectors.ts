import type { Sector } from "./types";

export const SECTORS: Sector[] = [
  {
    number: "01",
    slug: "public-affairs-advocacy",
    title: "Public Affairs & Advocacy",
    positioning: "Moving policy forward means moving people first.",
    summary:
      "Ballot measures, legislative priorities, regulatory change, and public-sector initiatives—communicated with credibility and built on coalitions that last.",
    context:
      "Public affairs lives at the intersection of policy, politics, and public opinion. The organizations that succeed are the ones that earn trust early, explain complexity clearly, and give people a reason to participate.",
    challenges: [
      "Translating technical policy into language that resonates with the public",
      "Building coalitions across stakeholders with competing interests",
      "Sustaining attention and support beyond the news cycle",
      "Managing opposition narratives and misinformation",
    ],
    perspective:
      "We've spent four decades at the table with public agencies, elected officials, business groups, and community organizations. That experience tells us the strongest advocacy isn't louder—it's better informed, more inclusive, and more honest about trade-offs.",
    capabilities: ["strategy-insights", "public-relations-reputation", "campaigns-experiences", "community-culture"],
    caseStudies: ["california-lottery"],
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Downtown Los Angeles at sunset", position: "50% 45%" },
  },
  {
    number: "02",
    slug: "infrastructure-mobility",
    title: "Infrastructure & Mobility",
    positioning: "Big projects need bigger conversations.",
    summary:
      "Transit, aviation, ports, rail, utilities, and public works—programs that reshape how communities move and live, and the engagement that earns their support.",
    context:
      "Infrastructure is built over years and judged in moments. Construction disrupts neighborhoods, timelines shift, and the public's patience is finite. Communications has to be as durable as the asset itself.",
    challenges: [
      "Sustaining community trust through multi-year construction",
      "Reaching diverse, multilingual communities equitably",
      "Coordinating messaging across agencies, contractors, and jurisdictions",
      "Turning disruption into a story of shared benefit",
    ],
    perspective:
      "We treat every impacted resident, rider, and business as a stakeholder, not an audience. Early, consistent, and transparent engagement is the difference between a project the community tolerates and one it champions.",
    capabilities: ["community-culture", "strategy-insights", "public-relations-reputation", "digital-technology"],
    caseStudies: [],
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Aerial view of coastal Los Angeles neighborhoods", position: "50% 50%" },
  },
  {
    number: "03",
    slug: "real-estate-development",
    title: "Real Estate & Development",
    positioning: "Good projects earn their place.",
    summary:
      "Entitlement, community outreach, and brand communications for developments that change the character of a neighborhood—and have to prove they deserve to.",
    context:
      "Development is one of the most locally contested things an organization can do. Approvals hinge on relationships with residents, neighborhood councils, elected officials, and the press—often long before a shovel hits the ground.",
    challenges: [
      "Building neighborhood support ahead of public hearings",
      "Addressing traffic, housing, and environmental concerns credibly",
      "Differentiating a project in a crowded, skeptical market",
      "Maintaining goodwill through construction and lease-up",
    ],
    perspective:
      "The projects that get built are the ones that listen first. We help developers understand the community's priorities, respond with substance, and communicate benefits in ways that are specific, verifiable, and human.",
    capabilities: ["community-culture", "strategy-insights", "public-relations-reputation", "creative-storytelling"],
    caseStudies: [],
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Dense coastal neighborhood seen from above", position: "70% 70%" },
  },
  {
    number: "04",
    slug: "consumer-corporate-brands",
    title: "Consumer & Corporate Brands",
    positioning: "Reputation is the brand.",
    summary:
      "Positioning, media relations, and corporate communications for consumer and B2B brands that need to be understood by customers, the press, and the communities they operate in.",
    context:
      "Corporate brands are judged on more than product. How a company shows up in the business press, how it handles a tough quarter, and how it treats the towns where it builds all shape whether people trust it.",
    challenges: [
      "Earning credible business and trade press coverage",
      "Aligning corporate narrative with local community presence",
      "Preparing for and responding to issues and crises",
      "Building executive visibility without overexposure",
    ],
    perspective:
      "We serve as an extension of corporate communications teams—agency of record for some, specialist counsel for others—bringing a disciplined, newsroom-aware approach to positioning and reputation.",
    capabilities: ["public-relations-reputation", "strategy-insights", "creative-storytelling", "digital-technology"],
    caseStudies: ["goodman-north-america", "nestle"],
    image: { src: "/images/la/urban-light.jpg", alt: "Illuminated lamp posts at night", position: "50% 50%" },
  },
  {
    number: "05",
    slug: "culture-entertainment",
    title: "Culture & Entertainment",
    positioning: "Great venues are good neighbors.",
    summary:
      "Communications and community relations for cultural institutions, venues, and entertainment brands balancing world-class experiences with the neighborhoods that host them.",
    context:
      "Los Angeles is a cultural capital, and its institutions operate in dense, engaged, and vocal communities. Programming, traffic, noise, and growth all become public conversations.",
    challenges: [
      "Sustaining neighborhood relationships through seasonal peaks",
      "Communicating operational changes with transparency",
      "Managing stakeholder expectations across city agencies and residents",
      "Protecting brand love while addressing real concerns",
    ],
    perspective:
      "The institutions people love most are the ones that act like neighbors. We help cultural organizations listen, respond, and keep the community invested in their success.",
    capabilities: ["community-culture", "public-relations-reputation", "strategy-insights"],
    caseStudies: ["hollywood-bowl"],
    image: { src: "/images/la/griffith-observatory.jpg", alt: "Griffith Observatory above Los Angeles", position: "30% 50%" },
  },
  {
    number: "06",
    slug: "education-public-institutions",
    title: "Education & Public Institutions",
    positioning: "Public trust is a public asset.",
    summary:
      "Awareness campaigns, stakeholder communications, and public information programs for institutions that serve everyone—and answer to everyone.",
    context:
      "Public institutions carry a unique burden: they must communicate with every resident, in every language, with limited budgets and maximum scrutiny. Clarity, consistency, and cultural fluency are non-negotiable.",
    challenges: [
      "Reaching diverse statewide and regional audiences",
      "Demonstrating public benefit in tangible, human terms",
      "Rebuilding or protecting trust in institutions",
      "Measuring awareness and sentiment, not just impressions",
    ],
    perspective:
      "The California Lottery's commitment to public education is a case in point: the story of impact was real, but it needed authentic voices and real classrooms to be believed. We make public benefit visible.",
    capabilities: ["campaigns-experiences", "creative-storytelling", "digital-technology", "strategy-insights"],
    caseStudies: ["california-lottery"],
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Palm-lined road leading toward downtown Los Angeles", position: "70% 50%" },
  },
  {
    number: "07",
    slug: "environment-reputation",
    title: "Environment & Reputation",
    positioning: "Transparency is the only sustainable strategy.",
    summary:
      "Crisis communications, issue management, and stakeholder engagement for organizations facing environmental scrutiny, regulatory questions, and community concern.",
    context:
      "Environmental issues move fast and carry deep public emotion. Water, air, land use, and resource questions draw regulators, activists, the press, and neighbors into the same conversation at once.",
    challenges: [
      "Responding quickly with accurate, verifiable information",
      "Engaging stakeholders who are skeptical by default",
      "Coordinating with regulators and legal counsel without going silent",
      "Rebuilding trust after an incident",
    ],
    perspective:
      "Silence reads as guilt; spin reads as contempt. We help organizations communicate what they know, what they're doing, and what they don't yet know—consistently and to every stakeholder who matters.",
    capabilities: ["public-relations-reputation", "community-culture", "strategy-insights"],
    caseStudies: ["nestle"],
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "City skyline emerging from fog at sunrise", position: "50% 40%" },
  },
];

export const getSector = (slug: string) => SECTORS.find((s) => s.slug === slug);
