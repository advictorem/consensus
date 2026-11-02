import type { CaseStudy } from "./types";

/**
 * SECTOR CASE STUDIES (strategic, editorial).
 * Entries marked "verified: consensusinc.com" are drawn from the current site's
 * Featured Work; the four from the redesign brief carry `approvals` because the
 * capabilities deck was not available in this environment.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "california-lottery",
    client: "California Lottery",
    title: "Mission Education public awareness campaign",
    sector: "education-public-institutions",
    overview:
      "The California Lottery exists to generate supplemental funding for public education. Its challenge was not awareness of the Lottery, but understanding of—and trust in—where the money goes.",
    challenge:
      "Translate a statewide funding mechanism into something tangible and believable for Californians, including a Hispanic market that had the lowest baseline trust.",
    insight:
      "People don't trust institutions; they trust people. The most credible messengers were the teachers and students benefiting from the contributions—speaking in their own words, in their own classrooms, in English and Spanish.",
    strategy:
      "A bilingual, story-led campaign centered on authentic voices and real schools, designed to move trust and sentiment, not just impressions.",
    execution:
      "Campaign films, mini-documentaries, photography, social-first vertical video, graphic assets, and campaign messaging deployed across broadcast, digital, social, and community channels statewide.",
    impact:
      "As reported in the 2025 Consensus capabilities presentation, statewide market trust rose from 37% to 60% and Hispanic market trust from 35% to 59%, alongside improved positive sentiment and play intent.",
    impactStats: [
      { value: "60%", label: "Statewide trust (from 37%)" },
      { value: "59%", label: "Hispanic market trust (from 35%)" },
    ],
    relatedCapabilities: ["campaigns-experiences", "creative-storytelling", "digital-technology", "strategy-insights"],
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Downtown Los Angeles skyline at golden hour", position: "50% 45%" },
    approvals: ["Results require California Lottery approval and attribution"],
  },
  {
    slug: "goodman-north-america",
    client: "Goodman North America",
    title: "Agency of record / strategic communications",
    sector: "consumer-corporate-brands",
    overview:
      "Goodman is a global industrial property group developing and managing logistics and business space. In North America, Consensus serves as agency of record for strategic communications.",
    challenge:
      "Establish and maintain a consistent corporate narrative with the business press, investors, partners, and local communities as the company grows its North American footprint.",
    insight:
      "In industrial real estate, credibility comes from substance—asset quality, long-term commitment, and the role logistics infrastructure plays in the economy of every community it touches.",
    strategy:
      "Disciplined positioning and relationship-first media relations with the business and trade press, aligned with community-facing communications in development markets.",
    execution: "Corporate positioning, announcement strategy, media relations, executive visibility, and ongoing counsel.",
    impact: "Outcomes to be published from the capabilities deck upon client approval.",
    relatedCapabilities: ["public-relations-reputation", "strategy-insights"],
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "City skyline above morning fog", position: "50% 40%" },
    approvals: ["Case detail and outcomes to be confirmed from the capabilities deck and approved by Goodman"],
  },
  {
    slug: "nestle",
    client: "Nestlé",
    title: "Crisis communications — City of Ripon",
    sector: "environment-reputation",
    overview:
      "Consensus supported Nestlé with crisis communications and stakeholder engagement related to an environmental matter in the City of Ripon, California.",
    challenge:
      "Environmental concerns draw regulators, residents, advocates, and the press into one fast-moving conversation. The company needed to communicate accurately and responsively without getting ahead of the facts.",
    insight:
      "Silence reads as guilt; spin reads as contempt. Trust is preserved by saying what you know, what you're doing, and what you don't yet know—consistently, to everyone.",
    strategy:
      "One set of facts for every stakeholder, coordinated with regulators and legal counsel, updated as the situation evolved.",
    execution: "Crisis response, message development, public information materials, community communications, and stakeholder engagement.",
    impact: "Outcomes to be published upon client approval, with appropriate factual sensitivity.",
    relatedCapabilities: ["public-relations-reputation", "community-culture", "strategy-insights"],
    image: { src: "/images/la/urban-light.jpg", alt: "Lamp posts glowing at night", position: "50% 55%" },
    approvals: ["Factual sensitivity: Nestlé approval required before publication"],
  },
  {
    slug: "hollywood-bowl",
    client: "Hollywood Bowl — Los Angeles Philharmonic / Live Nation Hewitt Silva",
    title: "Community relations for a landmark venue",
    sector: "culture-entertainment",
    overview:
      "The Hollywood Bowl is one of the world's most celebrated outdoor venues—and it sits in a residential hillside neighborhood. Consensus supports the LA Phil and Live Nation Hewitt Silva with community relationships, neighborhood engagement, and communications strategy.",
    challenge:
      "Sustain neighborhood goodwill through a busy season of traffic, operations, and change, while managing expectations across residents, neighborhood councils, and city agencies.",
    insight: "The institutions people love most are the ones that act like neighbors. Listening early and responding visibly matters more than any single message.",
    strategy: "Ongoing, two-way engagement with stakeholders as partners, backed by clear communications on operations and change.",
    execution: "Stakeholder mapping, neighborhood outreach, community meetings, and strategic communications support.",
    impact: "Outcomes to be published upon client approval.",
    relatedCapabilities: ["community-culture", "public-relations-reputation", "strategy-insights"],
    image: { src: "/images/la/griffith-observatory.jpg", alt: "The Hollywood Hills above Los Angeles", position: "65% 50%" },
    approvals: ["Scope and outcomes to be confirmed and approved by the LA Phil / Live Nation Hewitt Silva"],
  },

  /* ----- Verified from consensusinc.com Featured Work ----- */
  {
    slug: "expo-line-phase-2",
    client: "Exposition Construction Authority",
    title: "Public affairs & construction communications for Expo Line Phase 2",
    sector: "infrastructure-mobility",
    overview:
      "The Expo Line extended light rail from Culver City to Santa Monica. After early delays in Phase 1, the Authority engaged Consensus to ensure the second phase of construction would be well-received by the communities along the alignment.",
    challenge: "Rebuild public confidence and keep residents and businesses informed through years of construction impacts across multiple cities.",
    insight: "Construction fatigue sets in when people feel surprised. Predictability—knowing what's coming and whom to call—keeps a community on the project's side.",
    strategy: "A proactive, always-on information program paired with responsive issue resolution and visible community presence.",
    execution: "Public relations, project website, construction alerts, social media, newsletters, and community meetings throughout Phase 2.",
    impact: "Phase 2 construction communications sustained community support through completion. (Source: consensusinc.com, Construction.)",
    relatedCapabilities: ["community-culture", "public-relations-reputation", "digital-technology"],
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Westside Los Angeles from above", position: "50% 50%" },
  },
  {
    slug: "west-la-va-master-plan",
    client: "U.S. Department of Veterans Affairs — Greater Los Angeles",
    title: "Community relations for the West Los Angeles VA Master Plan",
    sector: "public-affairs-advocacy",
    overview:
      "The VA set out to revitalize its 388-acre West Los Angeles campus in Brentwood as a residential community for chronically homeless veterans—a plan with national visibility and intense local interest.",
    challenge: "Engage veterans, neighbors, advocates, and elected officials in a master-planning process for a federal campus with a complex history.",
    insight: "A plan this consequential needs a process people can trust: transparent, accessible, and genuinely open to input.",
    strategy: "Structured community relations supporting the master plan from January 2015 onward, with consistent information and multiple avenues for participation.",
    execution: "Community meetings, stakeholder briefings, public information, and ongoing communications support for the master plan and subsequent EIR/EA and construction phases.",
    impact: "Supported the adoption and advancement of the West LA VA Master Plan. (Source: consensusinc.com, Public Facilities.)",
    relatedCapabilities: ["community-culture", "strategy-insights", "public-relations-reputation"],
    image: { src: "/images/la/palms-dtla-sunset.jpg", alt: "Los Angeles at dusk", position: "70% 50%" },
  },
  {
    slug: "tule-wind",
    client: "Iberdrola Renewables",
    title: "Tule Wind Power — 'Cut the Green Tape'",
    sector: "public-affairs-advocacy",
    overview:
      "A roughly 200-megawatt wind project in East San Diego County faced strong, organized opposition on its path to county approval.",
    challenge: "Build and demonstrate community support for a renewable energy project in a contested permitting environment.",
    insight: "Supporters existed but were quiet; opponents were loud. The task was to give the majority a clear, easy way to be heard.",
    strategy: "A grassroots 'Cut the Green Tape' campaign mobilizing supporters to weigh in with decision-makers.",
    execution: "Supporter outreach generating hundreds of letters, emails, and social media messages, and turnout across four critical public hearings.",
    impact: "The project was approved by the County Planning Commission and the Board of Supervisors. (Source: consensusinc.com, Energy & Water.)",
    relatedCapabilities: ["campaigns-experiences", "community-culture", "strategy-insights"],
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "Hills and sky at sunrise", position: "50% 30%" },
  },
  {
    slug: "burbank-town-center",
    client: "Crown Realty & Development / CAPREF",
    title: "Burbank Town Center redevelopment — 'I Heart Burbank'",
    sector: "real-estate-development",
    overview:
      "A joint venture set out to redevelop the Burbank Town Center mall and its outparcels into a true downtown hub, with added density offset by replacing an IKEA store.",
    challenge: "Earn neighborhood and civic support for a dense, transformative redevelopment in a city that scrutinizes growth closely.",
    insight: "Residents support change they feel ownership of. A campaign built on civic pride—rather than developer messaging—invited the community in.",
    strategy: "The 'I Heart Burbank' community campaign, pairing digital organizing with in-person engagement.",
    execution: "Campaign identity, website and digital organizing, community outreach, and support mobilization ahead of approvals.",
    impact: "Recognized by PRSA Los Angeles. (Source: consensusinc.com, Real Estate & Land Use.)",
    relatedCapabilities: ["community-culture", "creative-storytelling", "digital-technology"],
    image: { src: "/media/hero-poster.jpg", alt: "Downtown architecture in black and white", position: "50% 50%" },
  },
  {
    slug: "crespi-carmelite",
    client: "Crespi Carmelite High School",
    title: "Community relations for a campus modernization plan",
    sector: "education-public-institutions",
    overview:
      "A Catholic college-preparatory school in Encino sought City of Los Angeles approval for an aquatics facility, STEM labs, a sports center, and a parking structure in a neighborhood with a history of opposing development.",
    challenge: "Win approvals for a significant campus expansion in an anti-development area.",
    insight: "Neighbors needed to see the school as a neighbor first—and the plan as a benefit to the community, not just the campus.",
    strategy: "Relationship-led community relations supported by a social media program that gave supporters a voice.",
    execution: "Neighborhood outreach, stakeholder engagement, public hearing support, and social media.",
    impact: "Recognized with two PRSA Los Angeles Awards of Excellence—for community relations and social media. (Source: consensusinc.com, Education.)",
    relatedCapabilities: ["community-culture", "digital-technology", "public-relations-reputation"],
    image: { src: "/images/la/griffith-observatory.jpg", alt: "Los Angeles from the hills", position: "30% 50%" },
  },
  {
    slug: "honeywell-remediation",
    client: "Honeywell International",
    title: "Community relations for Western Region remediation sites",
    sector: "environment-reputation",
    overview:
      "Since 2003, Consensus has provided community relations, public relations, and public affairs for more than a dozen Honeywell remediation sites across the West Coast.",
    challenge: "Communicate consistently and credibly about groundwater, soil, and air cleanup across many sites, communities, and regulators over two decades.",
    insight: "Remediation communications succeed when they are designed with regulators and delivered to residents in plain language, early and often.",
    strategy: "A repeatable, regulator-aligned engagement methodology applied site by site.",
    execution: "Coordination with DTSC, CalEPA, AQMD, RWQCB, and OEHHA; community meetings, materials, hotlines, and ongoing stakeholder relations.",
    impact: "A continuous client relationship since 2003 spanning more than a dozen sites. (Source: consensusinc.com, Environmental Remediation.)",
    relatedCapabilities: ["community-culture", "public-relations-reputation"],
    image: { src: "/images/la/urban-light.jpg", alt: "Lamp posts at night", position: "50% 50%" },
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
