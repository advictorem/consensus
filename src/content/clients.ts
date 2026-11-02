import type { ClientLogo } from "./types";

/**
 * Client logo grid. Order: priority clients from the brief, then additional
 * verified marks from the current consensusinc.com logo wall.
 *
 * `src` is intentionally unset until an official white SVG/PNG is placed in
 * /public/images/clients (see HANDOFF.md → Client logos). Until then the grid
 * renders a typeset placeholder for that client.
 *
 * ✓ = appears on the current consensusinc.com site (logo wall or industry pages)
 * ○ = listed in the brief / capabilities deck; not on the current site
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Nestlé" }, // ✓ (Nestlé — City of Ripon)
  { name: "The Home Depot" }, // ✓
  { name: "Kroger" }, // ✓ (Ralphs Sherman Oaks)
  { name: "Target" }, // ✓
  { name: "IKEA" }, // ✓
  { name: "Goodman" }, // ○
  { name: "Niagara Bottling" }, // ✓
  { name: "Westfield" }, // ✓
  { name: "Limoneira" }, // ✓
  { name: "Kaiser Permanente" }, // ✓
  { name: "LA Phil" }, // ○
  { name: "Live Nation" }, // ○
  { name: "Nike" }, // ○
  { name: "Warner Bros." }, // ✓
  { name: "Hollywood Bowl" }, // ○
  { name: "California Lottery" }, // ○
  { name: "LAFC" }, // ○
  { name: "LAX" }, // ✓ (Los Angeles World Airports)
  { name: "LA Metro" }, // ✓
  { name: "Hollywood Burbank Airport" }, // ✓ (RS&H — Burbank Bob Hope Airport)
  { name: "U.S. Chamber of Commerce" }, // ○
  { name: "California High-Speed Rail Authority" }, // ✓
  { name: "Port of Los Angeles" }, // ✓
  { name: "LA County Public Works" }, // ✓
  { name: "Honeywell" }, // ✓
  { name: "Lockheed Martin" }, // ✓
  { name: "Northrop Grumman" }, // ✓
  { name: "SoCalGas" }, // ✓
  { name: "Stemilt" }, // ○
  { name: "USC" }, // ✓
  { name: "Amtrak" }, // ✓
  { name: "BNSF" }, // ✓
  { name: "WeWork" }, // ✓
  { name: "Playa Vista" }, // ✓
  { name: "Metropolitan Water District" }, // ✓
  { name: "OCTA" }, // ✓
];
