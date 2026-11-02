import type { TeamMember } from "./types";

/**
 * Names, titles and bio facts verified against consensusinc.com/our-team and
 * individual profile pages (Nov 2026). Titles on the live site differ from the
 * redesign brief — the live-site titles are used here and flagged in HANDOFF.md.
 * Portraits could not be retrieved from this environment; add files to
 * /public/images/team and set `portrait`.
 */
export const TEAM: TeamMember[] = [
  {
    slug: "josh-gertler",
    name: "Josh Gertler",
    title: "President & CEO",
    bio: "Josh leads Consensus and has spent his career building communications strategies that help clients work across business, government, community, and media. He joined the firm in 2001 and became president in 2007 after nearly a decade at Hill & Knowlton and Fleishman-Hillard. He serves on the board of the Los Angeles Area Chamber of Commerce and is active in the Urban Land Institute.",
    verified: true,
  },
  {
    slug: "nazan-armenian",
    name: "Nazan Armenian",
    title: "Executive Vice President, Partner",
    bio: "Nazan provides strategic communications counsel that engages stakeholders and builds supportive environments for client initiatives, and leads the firm's digital, social, video, creative content, and media relations work. Since joining in 2002 she has directed hundreds of programs across housing, transportation, infrastructure, land use, environmental remediation, water, and commercial real estate. Her earlier career spans Burson-Marsteller, Fleishman-Hillard, and international development campaigns on three continents.",
    verified: true,
  },
  {
    slug: "ara-soudjian",
    name: "Ara Soudjian",
    title: "Video Director / Producer",
    bio: "Ara directs and produces storytelling for Consensus Creative, working with high-profile real estate and transportation clients. An award-winning filmmaker, he has collaborated with Sony Music, Warner Bros. Records, and Gatorade, and his short film A Nice Old-Fashioned Romance premiered at the LA Shorts Festival.",
    verified: true,
  },
  {
    slug: "anthony-wiktor",
    name: "Anthony Wiktor",
    title: "Creative Art Director",
    bio: "Anthony directs creative strategy for Consensus Creative, bringing traditional marketing and advertising experience to digital design and interactive experiences. His portfolio includes campaigns for national brands, multiple awards for web design and branding, and a feature as an Industry Expert in Web Designer Magazine's Hot 100.",
    verified: true,
  },
  {
    slug: "sarah-hansen",
    name: "Sarah Hansen",
    title: "Director of Digital Strategy",
    bio: "Sarah leads digital strategy for Consensus, connecting audience intelligence, analytics, and platform expertise to the firm's engagement and campaign work. Full biography pending.",
    verified: false, // Listed in the redesign brief; not on the current consensusinc.com team page. Confirm before publishing.
  },
  {
    slug: "garen-mirzaian",
    name: "Garen Mirzaian",
    title: "Motion Graphics / Animator",
    bio: "Garen produces imagery, infographics, project identities, and renderings for real estate and public outreach programs with Consensus Creative. He contributed to award-winning campaigns including Help House LA Vets and I Heart Burbank, and animated videos for LA Metro's active transportation programs. He is a writer-director and cinematographer with a Director's Certificate from UCLA Extension.",
    verified: true,
  },
];
