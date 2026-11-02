/** White outline social glyphs (stroke-based, currentColor). */
const ICONS: Record<string, React.ReactNode> = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </>
  ),
  x: (
    <>
      <path d="M4 4l16 16M20 4L4 20" />
    </>
  ),
  vimeo: (
    <>
      <path d="M3.5 9.2l1.2-1.4c1.6-1.9 3-1.3 3.4 1.4.5 3 1 5.7 2 5.7.9 0 2.5-2.3 3-4.1.5-1.6-.8-1.6-1.9-1.1.7-3.3 3.6-5.4 6.1-4.8 2.6.6 2.6 3.4 1.5 6.1-1.6 3.8-5.4 8-8.5 8-2.6 0-3.2-3.4-4.3-7.4-.5-1.9-.9-3-1.6-2.9-.3 0-.6.2-.9.5Z" />
    </>
  ),
};

export function socialKey(label: string) {
  const l = label.toLowerCase();
  if (l.includes("linkedin")) return "linkedin";
  if (l.includes("instagram")) return "instagram";
  if (l.includes("x") || l.includes("twitter")) return "x";
  if (l.includes("vimeo")) return "vimeo";
  return null;
}

export default function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const glyph = ICONS[name];
  if (!glyph) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
