import type { Anniversary } from '@lib/anniversaries';
import { formatDate, getTitle } from '@lib/format';
import { getImageSrc } from '@lib/tmdb';
import { BackdropImage, Reveal } from '@modules/ui';
import Link from 'next/link';

/** "Moonlight turns 10": the best-known films of this month, years ago. */
export function Anniversaries({ items }: { items: Array<Anniversary> }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ years, film }, i) => {
        const title = getTitle(film);

        return (
          <Reveal key={film.id} delay={i * 70}>
            <Link
              href={`/movie/${film.id}`}
              className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-card border border-white/10 p-6 transition-all duration-300 ease-silk hover:-translate-y-1 hover:border-accent/45 hover:shadow-lift"
            >
              <BackdropImage
                src={getImageSrc(film.backdrop_path, 'w780')}
                title={title}
                className="transition-transform duration-700 ease-silk group-hover:scale-[1.05]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#080410] via-[#080410]/50 to-transparent"
              />
              <span className="relative text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
                {years} years ago
              </span>
              <b className="relative mt-1.5 font-display text-2xl font-bold tracking-[-.025em] drop-shadow-text">
                {title} turns {years}
              </b>
              {film.release_date && (
                <span className="relative mt-1 text-[13px] text-white/70">
                  Released {formatDate(film.release_date)}
                </span>
              )}
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
