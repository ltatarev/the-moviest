import { FactType } from '@lib/types';

/** The dry facts, one per row. Rows TMDB had nothing for never make it here. */
export function FactsPanel({ facts }: { facts: Array<FactType> }) {
  return (
    <dl className="grid gap-x-10 rounded-card border border-white/10 bg-white/[.05] px-6 sm:grid-cols-2 sm:px-8">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4 text-[13px] last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
        >
          <dt className="text-dimmer">{fact.label}</dt>
          <dd className="text-right font-semibold">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
