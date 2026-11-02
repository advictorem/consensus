import type { Location } from "@/components/LocationPanels";

/** Verified from consensusinc.com (Contact page + site-wide footer). */
export const CONTACT = {
  email: "info@consensusinc.com",
  phone: "(213) 438-1755",
  phoneHref: "+12134381755",
  /** Shown in the footer / contact page (verified URLs from consensusinc.com). */
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/company/consensus-inc" },
    { label: "Instagram", url: "https://www.instagram.com/consensuslive/" },
    { label: "X", url: "https://twitter.com/ConsensusLive" },
    { label: "Vimeo", url: "https://vimeo.com/consensuslive" },
  ],
  /** Additional verified channels, not displayed. */
  otherSocial: [
    { label: "Facebook", url: "https://www.facebook.com/ConsensusLive" },
    { label: "YouTube", url: "https://www.youtube.com/user/Consensusiii" },
    { label: "Medium", url: "https://medium.com/@ConsensusLive" },
  ],
};

export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "checkbox-group";
export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  span?: 1 | 2;
  placeholder?: string;
  autoComplete?: string;
  options?: string[];
};

/**
 * Field structure preserved from the current consensusinc.com contact form
 * (labels verbatim, required flags as shown on the live site).
 */
export const CONTACT_FORM_FIELDS: FormField[] = [
  { name: "name", label: "Your Name", type: "text", required: true, autoComplete: "name" },
  { name: "title", label: "Your Title", type: "text", required: true, autoComplete: "organization-title" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "organization", label: "Organization", type: "text", required: true, autoComplete: "organization" },
  { name: "address", label: "Your Address", type: "text", span: 2, autoComplete: "street-address" },
  { name: "subject", label: "Message Subject", type: "text", required: true, span: 2 },
  { name: "message", label: "Your Message (20 characters minimum)", type: "textarea", required: true, span: 2 },
  {
    name: "optin",
    label: "Stay connected",
    type: "checkbox-group",
    span: 2,
    options: ["Get the latest Consensus news and updates", "Join the #NextGenConsensus community"],
  },
];

/**
 * No street addresses are displayed (per brief). Northern California is
 * presented as a regional service presence; office status unconfirmed.
 */
export const LOCATIONS: Location[] = [
  {
    label: "Headquarters",
    title: ["Southern", "California"],
    note: "Headquartered in the Burbank Media District of Greater Los Angeles.",
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Aerial view of the Santa Monica Bay coastline and pier", position: "60% 40%" },
  },
  {
    label: "Regional presence",
    title: ["Northern", "California"],
    note: "Serving clients and communities across the Bay Area and the state.",
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "San Francisco skyline emerging from the fog at sunrise", position: "50% 45%" },
  },
];
