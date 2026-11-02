export type Stat = { value: string; label: string; note?: string };

export default function StatisticsGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-14 border-t border-white/12 pt-14 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
          <dd className="display t-stat inline-block">{s.value}</dd>
          <div className="gradient-rule mt-3 w-10" />
          <dt className="t-label mt-4 max-w-[18ch] text-white/60">{s.label}</dt>
          {s.note && <p className="mt-2 text-xs text-white/35">{s.note}</p>}
        </div>
      ))}
    </dl>
  );
}
