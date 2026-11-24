import type { Mood } from '@lib/moods';
import cn from 'classnames';
import Link from 'next/link';

type MoodPillsProps = {
  moods: Array<Mood>;
  /** The slug of the mood on show, so its pill reads as the current page. */
  current?: string;
};

/**
 * A wrapping row of text pills, one per mood: a dot in the mood's colour and
 * its name. The same row as "In the mood for…" on Discover in the app.
 */
export function MoodPills({ moods, current }: MoodPillsProps) {
  if (moods.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2.5">
      {moods.map((mood) => {
        const isCurrent = mood.slug === current;

        return (
          <li key={mood.slug}>
            <Link
              href={`/moods/${mood.slug}`}
              aria-current={isCurrent ? 'page' : undefined}
              className={cn(
                'inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-silk hover:-translate-y-0.5',
                isCurrent
                  ? 'border-accent/50 bg-accent/15 text-chalk'
                  : 'border-white/10 bg-white/[.05] text-chalk/90 hover:border-white/20 hover:bg-white/[.1]',
              )}
            >
              <span
                aria-hidden
                className={cn('h-2 w-2 flex-none rounded-full', mood.dot)}
              />
              {mood.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
