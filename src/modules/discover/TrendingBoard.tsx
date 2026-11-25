import { getTitle, getYear } from '@lib/format';
import { getImageSrc } from '@lib/tmdb';
import type { ContentType, MovieType } from '@lib/types';
import { BackdropImage, PosterImage, Reveal } from '@modules/ui';
import Link from 'next/link';

type TrendingBoardProps = {
  /** This week's top titles, films and shows together, with `media_type`. */
  items: Array<MovieType>;
};

function kindOf(item: MovieType): ContentType {
  return item.media_type === 'tv' ? 'tv' : 'movie';
}

function metaOf(item: MovieType): string {
  return [kindOf(item) === 'tv' ? 'Series' : 'Film', getYear(item)]
    .filter(Boolean)
    .join(' · ');
}

function rankOf(i: number): string {
  return String(i + 1).padStart(2, '0');
}

/** Number one as a large still, numbers two to five as a list beside it. */
export function TrendingBoard({ items }: TrendingBoardProps) {
  const [first, ...rest] = items;

  if (!first) {
    return null;
  }

  const firstTitle = getTitle(first);

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-8">
      <Reveal>
        <Link
          href={`/${kindOf(first)}/${first.id}`}
          className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-card border border-white/10 p-6 transition-all duration-300 ease-silk hover:border-accent/45 hover:shadow-lift sm:p-8 lg:aspect-auto lg:h-full lg:min-h-[340px]"
        >
          <BackdropImage
            src={getImageSrc(first.backdrop_path, 'w1280')}
            title={firstTitle}
            className="transition-transform duration-700 ease-silk group-hover:scale-[1.04]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#080410] via-[#080410]/40 to-transparent"
          />
          <span className="absolute left-5 top-5 rounded-lg border border-white/[.14] bg-[#080410]/55 px-2.5 py-1 font-display text-sm font-bold backdrop-blur-md sm:left-6 sm:top-6">
            01
          </span>
          <b className="relative font-display text-2xl font-bold tracking-[-.025em] drop-shadow-text transition-colors duration-200 group-hover:text-accent-soft sm:text-[32px]">
            {firstTitle}
          </b>
          <span className="relative mt-1 text-sm text-white/70">
            {metaOf(first)}
          </span>
        </Link>
      </Reveal>

      <ol className="grid grid-cols-1 gap-2">
        {rest.map((item, i) => {
          const title = getTitle(item);

          return (
            <Reveal as="li" key={item.id} delay={(i + 1) * 60}>
              <Link
                href={`/${kindOf(item)}/${item.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-colors duration-200 ease-silk hover:border-white/10 hover:bg-white/[.05]"
              >
                <span className="relative aspect-[2/3] w-[52px] flex-none overflow-hidden rounded-xl border border-white/10">
                  <PosterImage
                    src={getImageSrc(item.poster_path, 'w92')}
                    title={title}
                    sizes="52px"
                    label={false}
                  />
                </span>
                <span className="w-9 flex-none font-display text-2xl font-bold text-dimmer">
                  {rankOf(i + 1)}
                </span>
                <span className="min-w-0">
                  <b className="block truncate text-[15px] font-semibold tracking-[-.01em] transition-colors duration-200 group-hover:text-accent-soft">
                    {title}
                  </b>
                  <span className="text-[13px] text-dim">{metaOf(item)}</span>
                </span>
              </Link>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
