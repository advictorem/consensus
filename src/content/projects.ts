import type { Project } from "./types";

/**
 * PORTFOLIO (visual work).
 *
 * Imagery note: campaign photography/stills were not supplied in this
 * environment. Where a project has verified video media (Vimeo) the thumbnail
 * uses supplied Los Angeles photography as a stand-in and is flagged under
 * `approvals`. Replace with authentic campaign stills before launch.
 */
export const PROJECTS: Project[] = [
  {
    slug: "california-lottery",
    client: "California Lottery",
    title: "Real People. Real Stories.\nReal Impact.",
    descriptor: "A statewide campaign connecting communities with the real impact of Lottery contributions on public education.",
    disciplines: ["Campaigns", "Creative", "Digital"],
    tags: ["Integrated Campaign", "Public Awareness", "Creative Storytelling", "Digital Media"],
    featured: true,
    featuredOrder: 1,
    size: "xl",
    hero: { src: "/images/work/california-lottery.jpg", alt: "California Lottery 'You Play, Schools Win' campaign: five smiling educators and students on a blue calottery background", position: "50% 40%" },
    thumb: { src: "/media/lottery-football-poster.jpg", alt: "California Lottery campaign film: a high-school football scene", position: "50% 40%", video: "/media/lottery-football.mp4" },
    intro:
      "Behind every contribution is a story worth telling. We brought the California Lottery's commitment to public education to life through authentic voices, real classrooms, and a statewide campaign designed to connect communities with the impact of their schools.",
    challenge:
      "Californians knew the Lottery existed. Far fewer understood—or believed—that playing contributes to public schools. The campaign had to turn an abstract funding mechanism into something tangible, credible, and personal, across English- and Spanish-speaking audiences statewide.",
    strategy:
      "Trust is built with specifics. Rather than broad claims, the campaign centered the people closest to the impact: teachers, students, and school communities, telling their stories in their own words and in their own classrooms. Bilingual storytelling ensured the message resonated across California's Hispanic market.",
    execution:
      "An integrated program spanning 16:9 campaign films and mini-documentaries, photography, graphic assets, social-first vertical video, and campaign messaging—built to live across broadcast, digital, social, and community channels.",
    vimeo: [{ showcase: "https://vimeo.com/showcase/12364580?video=1217814087", videoId: "1217814087", title: "Mission Education — campaign film" }],
    outcomes: [
      { value: "37→60%", label: "Statewide market trust", note: "Reported in the 2025 capabilities deck" },
      { value: "35→59%", label: "Hispanic market trust", note: "Reported in the 2025 capabilities deck" },
      { value: "↑", label: "Positive sentiment and play intent", note: "Directional; figures pending" },
    ],
    outcomesNote:
      "Results as reported in the Consensus 2025 capabilities presentation. Publish only with accurate attribution and California Lottery approval.",
    related: ["hollywood-bowl", "imagine-town-center"],
    approvals: ["Client approval of published results", "Confirm campaign dates and scope"],
  },
  {
    slug: "goodman-north-america",
    client: "Goodman North America",
    title: "Positioning a Global\nReal Estate Icon",
    descriptor: "Agency-of-record counsel positioning a global industrial property group with the business press and the communities where it builds.",
    disciplines: ["Strategy", "Public Relations"],
    tags: ["Agency of Record", "Corporate Reputation", "Media Relations", "Positioning"],
    featured: true,
    featuredOrder: 2,
    hero: { src: "/images/work/goodman.jpg", alt: "Goodman logistics facility at dusk with illuminated façade and traffic light trails", position: "50% 50%" },
    thumb: { src: "/images/work/goodman.jpg", alt: "Goodman logistics facility at dusk", position: "50% 50%" },
    intro:
      "As agency of record, Consensus provides Goodman North America with strategic communications counsel—shaping corporate positioning, earning credible coverage in the business and trade press, and supporting relationships in the markets where Goodman develops and operates.",
    challenge:
      "A global industrial property group entering and expanding in North American markets needed a consistent corporate narrative, a disciplined approach to media, and a reputation that would hold up with investors, partners, and local communities alike.",
    strategy:
      "Position Goodman on substance: the quality of its assets, its long-term approach, and its role in the logistics infrastructure communities depend on. Prioritize relationships with the business press over volume.",
    execution: "Ongoing media relations, executive positioning, announcement strategy, and corporate communications support.",
    related: ["nestle", "california-lottery"],
    approvals: ["Case detail and any outcomes to be drawn from the capabilities deck and approved by Goodman"],
  },
  {
    slug: "hollywood-bowl",
    client: "Hollywood Bowl",
    title: "Keeping a Landmark\na Good Neighbor",
    descriptor: "Keeping one of the world's most beloved venues a good neighbor—for the Los Angeles Philharmonic and Live Nation Hewitt Silva.",
    disciplines: ["Community", "Strategy", "Public Relations"],
    tags: ["Community Relations", "Stakeholder Management", "Communications Strategy", "Neighborhood Engagement"],
    featured: true,
    featuredOrder: 3,
    hero: { src: "/images/work/hollywood-bowl.jpg", alt: "Fireworks over the Hollywood Bowl shell with a full audience", position: "50% 55%" },
    thumb: { src: "/images/work/hollywood-bowl.jpg", alt: "Fireworks over the Hollywood Bowl", position: "50% 55%" },
    intro:
      "The Hollywood Bowl is a civic treasure that lives in a residential neighborhood. Consensus supports the Los Angeles Philharmonic and Live Nation Hewitt Silva with community relationships, neighborhood engagement, and the communications strategy that keeps the venue and its neighbors in conversation.",
    challenge:
      "A busy summer season brings traffic, noise, and operational change to the surrounding hillside communities. Sustaining goodwill requires listening early, communicating clearly, and resolving issues before they become headlines.",
    strategy:
      "Treat residents, neighborhood councils, and city agencies as ongoing partners rather than audiences—with consistent, transparent communication and real responsiveness.",
    execution: "Stakeholder mapping, neighborhood outreach, community meetings, and strategic communications support across the season.",
    related: ["california-lottery", "pershing-square-renew"],
    approvals: ["Scope and outcomes to be confirmed against the capabilities deck and approved by the LA Phil / Live Nation Hewitt Silva"],
  },
  {
    slug: "nestle",
    client: "Nestlé",
    title: "Clear Answers in\na Critical Moment",
    descriptor: "Clear, credible public information and issue management on an environmental matter in the City of Ripon.",
    disciplines: ["Strategy", "Public Relations", "Community"],
    tags: ["Crisis Communications", "Issue Management", "Stakeholder Communications", "Public Information"],
    featured: true,
    featuredOrder: 4,
    hero: { src: "/images/work/nestle.jpg", alt: "Nestlé sign on a glass office building at dusk", position: "50% 40%" },
    thumb: { src: "/images/work/nestle.jpg", alt: "Nestlé sign on a glass office building", position: "50% 40%" },
    intro:
      "When environmental concerns surface, silence reads as guilt and spin reads as contempt. Consensus supported Nestlé with stakeholder communications, public information, and issue management in the City of Ripon—communicating what was known, what was being done, and what came next.",
    challenge:
      "Environmental questions draw regulators, residents, the press, and advocates into the same conversation at once. The company needed to be accurate, responsive, and visible without getting ahead of the facts.",
    strategy:
      "Lead with transparency and consistency: one set of facts, communicated to every stakeholder, coordinated with regulators and legal counsel, and updated as the situation evolved.",
    execution: "Crisis response, message development, public information materials, community communications, and stakeholder engagement.",
    related: ["goodman-north-america", "hollywood-bowl"],
    approvals: ["Factual sensitivity: case detail must be approved by Nestlé before publication"],
  },
  {
    slug: "imagine-town-center",
    client: "City of Aliso Viejo",
    title: "Imagining a\nCity's Future",
    descriptor: "Community outreach and a video campaign that invited residents into the design charrette for the Town Center master plan.",
    disciplines: ["Community", "Creative", "Digital"],
    tags: ["Community Outreach", "Video", "Planning", "Public Participation"],
    hero: { src: "/images/work/aliso-viejo.jpg", alt: "Aerial view of Aliso Viejo Town Center and surrounding hills", position: "50% 50%" },
    thumb: { src: "/images/work/aliso-viejo.jpg", alt: "Aerial view of Aliso Viejo Town Center", position: "50% 55%" },
    intro:
      "Consensus led community outreach and produced a video campaign for the City of Aliso Viejo during the design charrette for its Town Center master plan—giving residents a clear picture of what was possible and a real way to shape it.",
    execution: "Outreach program, campaign video, and a dedicated engagement website (imaginetowncenter.com).",
    vimeo: [{ videoId: "208376908", title: "Imagine Town Center — campaign video" }],
    related: ["innovation-lives-here", "pershing-square-renew"],
  },
  {
    slug: "innovation-lives-here",
    client: "Equity Office — Colorado Center",
    title: "Innovation\nLives Here",
    descriptor: "A video and digital brochure capturing the amenities and culture of a Santa Monica creative campus.",
    disciplines: ["Creative", "Digital"],
    tags: ["Video Production", "Digital Brochure", "Brand Content", "Commercial Real Estate"],
    hero: { src: "/images/la/venice-coast-aerial.jpg", alt: "Coastal Santa Monica from above", position: "40% 50%" },
    thumb: { src: "/images/la/venice-coast-aerial.jpg", alt: "Coastal Santa Monica from above", position: "30% 45%" },
    intro:
      "For Equity Office's Colorado Center in Santa Monica, Consensus Creative produced a brand film and digital brochure showcasing the campus's amenities and culture—part of a broader relationship that also included the 'Evolve Your Commute' transportation demand management program.",
    execution: "Brand video, digital brochure, identity work, and the 'Evolve Your Commute' TDM website and campaign.",
    vimeo: [{ videoId: "213707382", title: "Innovation Lives Here — brand film" }],
    related: ["imagine-town-center", "california-lottery"],
    approvals: ["Replace stand-in imagery with stills from the brand film"],
  },
  {
    slug: "pershing-square-renew",
    client: "Pershing Square Renew",
    title: "Pershing Square\nRenew",
    descriptor: "Retooled digital communications for the downtown LA nonprofit behind the park's international design competition.",
    disciplines: ["Digital", "Community", "Creative"],
    tags: ["Digital Communications", "Social Media", "Public Facilities", "Civic"],
    hero: { src: "/media/hero-poster.jpg", alt: "Historic downtown Los Angeles architecture", position: "50% 50%" },
    thumb: { src: "/media/hero-poster.jpg", alt: "Historic downtown Los Angeles architecture", position: "50% 50%" },
    intro:
      "Consensus retooled digital communications for Pershing Square Renew, the nonprofit leading the reimagining of downtown Los Angeles's oldest park, supporting its international design competition and growing its community of supporters.",
    execution: "Digital strategy, social media program, content, and video.",
    vimeo: [{ videoId: "218552430", title: "Pershing Square Renew" }],
    outcomes: [{ value: "+50%", label: "Social following in six months", note: "As stated on consensusinc.com" }],
    related: ["hollywood-bowl", "imagine-town-center"],
    approvals: ["Replace stand-in imagery with project photography"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const getFeaturedProjects = (n = 5) =>
  [...PROJECTS].sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99)).slice(0, n);
