import type { ClientLogo } from "./types";

/**
 * Client logo grid — 4 columns × 5 rows (20 marks).
 * Files are the flat-white PNGs served by the current consensusinc.com logo
 * wall (200px wide). Replace with vector/white SVGs when available; the grid
 * scales any aspect ratio. Width/height are the source pixel sizes.
 */
const L = (name: string, file: string, width: number, height: number): ClientLogo => ({
  name,
  src: `/images/clients/${file}.png`,
  width,
  height,
});

export const CLIENT_LOGOS: ClientLogo[] = [
  L("The Home Depot", "home-depot", 200, 199),
  L("IKEA", "ikea", 200, 71),
  L("Target", "target", 200, 254),
  L("Kaiser Permanente", "kaiser", 200, 69),
  L("Warner Bros.", "warner-bros", 200, 185),
  L("Honeywell", "honeywell", 200, 35),
  L("Northrop Grumman", "northrop", 200, 60),
  L("SoCalGas", "socalgas", 200, 141),
  L("Westfield", "westfield", 200, 65),
  L("Niagara Bottling", "niagara", 200, 88),
  L("LA Metro", "la-metro", 200, 76),
  L("California High-Speed Rail Authority", "chsra", 200, 71),
  L("Port of Los Angeles", "port-la", 200, 217),
  L("USC", "usc", 200, 43),
  L("Amtrak", "amtrak", 200, 83),
  L("BNSF Railway", "bnsf", 200, 32),
  L("WeWork", "wework", 200, 45),
  L("Playa Vista", "playa-vista", 200, 100),
  L("Metropolitan Water District of Southern California", "mwd", 200, 200),
  L("OCTA", "octa", 200, 243),
];
