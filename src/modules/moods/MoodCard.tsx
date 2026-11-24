import type { Mood } from '@lib/moods';
import { getImageSrc } from '@lib/tmdb';
import { BackdropImage } from '@modules/ui';
import cn from 'classnames';
import Link from 'next/link';

type MoodCardProps = {
  mood: Mood;
  /** A still from the mood's first title. */
  backdropPath: string | null;
};

/** One mood on the index page: a still from its grid, its name and a line. */
export function MoodCard({ mood, backdropPath }: MoodCardProps) {
  return (
    <Link
      href={`/moods/${mood.slug}`}
      className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-card border border-white/10 p-5 transition-all duration-300 ease-silk hover:-translate-y-1 hover:border-accent/45 hover:shadow-lift sm:p-6"
    >
      <BackdropImage
        src={getImageSrc(backdropPath, 'w780')}
        title={mood.title}
        className="transition-transform duration-700 ease-silk group-hover:scale-[1.05]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#080410] via-[#080410]/55 to-[#080410]/5"
      />

      <span className="relative flex items-center gap-2.5">
        <span
          aria-hidden
          className={cn('h-2 w-2 flex-none rounded-full', mood.dot)}
        />
        <b className="font-display text-xl font-semibold tracking-[-.02em] sm:text-2xl">
          {mood.title}
        </b>
      </span>
      <span className="relative mt-1.5 text-[13px] leading-relaxed text-white/70">
        {mood.blurb}
      </span>
    </Link>
  );
}
