/**
 * Four overlapping circles (Venn) — Experience / Agility / Perspective / Fluency.
 * Pure SVG, scales with its container, brand-gradient strokes, large display labels.
 */
export default function VennDiagram({
  items,
  className = "",
}: {
  items: { k: string; v: string }[];
  className?: string;
}) {
  const r = 150;
  const d = 108; // offset from center
  const centers = [
    { cx: 260 - d, cy: 260 - d * 0.72 },
    { cx: 260 + d, cy: 260 - d * 0.72 },
    { cx: 260 - d, cy: 260 + d * 0.72 },
    { cx: 260 + d, cy: 260 + d * 0.72 },
  ];
  const labelPos = [
    { x: 260 - d - 38, y: 260 - d * 0.72 - 40 },
    { x: 260 + d + 38, y: 260 - d * 0.72 - 40 },
    { x: 260 - d - 38, y: 260 + d * 0.72 + 56 },
    { x: 260 + d + 38, y: 260 + d * 0.72 + 56 },
  ];
  const colors = ["#40BFED", "#F89520", "#EF73AC", "#9E479B"];

  return (
    <figure className={className} data-reveal>
      <svg viewBox="0 0 520 520" role="img" aria-labelledby="venn-title venn-desc" className="h-auto w-full">
        <title id="venn-title">{items.map((i) => i.k).join(", ")}</title>
        <desc id="venn-desc">{items.map((i) => `${i.k}: ${i.v}`).join(". ")}</desc>
        <defs>
          <linearGradient id="venn-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#40BFED" />
            <stop offset="36%" stopColor="#F89520" />
            <stop offset="68%" stopColor="#EF73AC" />
            <stop offset="100%" stopColor="#9E479B" />
          </linearGradient>
        </defs>
        {centers.map((c, i) => (
          <circle
            key={`fill-${i}`}
            cx={c.cx}
            cy={c.cy}
            r={r}
            fill={colors[i]}
            fillOpacity="0.14"
            style={{ mixBlendMode: "screen" }}
          />
        ))}
        {centers.map((c, i) => (
          <circle key={`ring-${i}`} cx={c.cx} cy={c.cy} r={r} fill="none" stroke="url(#venn-grad)" strokeWidth="1.5" strokeOpacity="0.9" />
        ))}
        {items.slice(0, 4).map((it, i) => (
          <text
            key={it.k}
            x={labelPos[i].x}
            y={labelPos[i].y}
            textAnchor="middle"
            fill="#fff"
            fontFamily="mongoose, Oswald, Impact, sans-serif"
            fontWeight="700"
            fontSize="46"
            letterSpacing="0.5"
            style={{ textTransform: "uppercase" }}
          >
            {it.k.toUpperCase()}
          </text>
        ))}
        {/* Center mark */}
        <circle cx="260" cy="260" r="5" fill="#fff" />
      </svg>
      <figcaption className="sr-only">
        {items.map((i) => (
          <span key={i.k}>
            {i.k}: {i.v}.{" "}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
