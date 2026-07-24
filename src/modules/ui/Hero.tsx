import { formatRating, getTitle, getYear, truncate } from '@lib/format';
import { getGenreNames, getImageSrc } from '@lib/tmdb';
import { ContentType, MovieType } from '@lib/types';
import cn from 'classnames';
import Link from 'next/link';
import {
  CSSProperties,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BackdropImage } from './BackdropImage';
import { ArrowRight, ChevronLeft, ChevronRight } from './Icons';
import { WatchlistButton } from './WatchlistButton';

const INTERVAL = 7000;
/** Horizontal travel, in px, that counts as a deliberate swipe. */
const SWIPE_THRESHOLD = 48;

type HeroProps = {
  items: Array<MovieType>;
  type: ContentType;
  eyebrow?: string;
};

export function Hero({ items, type, eyebrow = 'Trending now' }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  const count = items.length;
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Touch devices get no hover, so swiping stands in for the arrow buttons.
  const onTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];

    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: TouchEvent) => {
    const start = swipeStart.current;

    swipeStart.current = null;

    if (!start || count < 2) {
      return;
    }

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    // Ignore anything shallow or mostly vertical — that's a page scroll.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) {
      return;
    }

    go(dx < 0 ? index + 1 : index - 1);
  };

  // Autoplay, held while the pointer or keyboard focus is inside the hero.
  useEffect(() => {
    if (paused || count < 2) {
      return;
    }

    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced) {
      return;
    }

    const timer = window.setTimeout(() => go(index + 1), INTERVAL);

    return () => window.clearTimeout(timer);
  }, [index, paused, count, go]);

  if (!count) {
    return null;
  }

  const active = items[index];
  const title = getTitle(active);
  const rating = formatRating(active.vote_average);
  const year = getYear(active);
  const genres = getGenreNames(active.genre_ids, 3);
  const isSaved = Boolean(saved[active.id]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={`${eyebrow} — featured`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="group/hero relative h-[520px] touch-pan-y overflow-hidden rounded-hero border border-white/10 sm:h-[580px] lg:h-[620px]"
    >
      {/* Backdrops crossfade; the active one slowly pushes in (Ken Burns). */}
      {items.map((item, i) => (
        <div
          key={item.id}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-[900ms] ease-silk',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <BackdropImage
            src={getImageSrc(item.backdrop_path, 'w1280')}
            title={getTitle(item)}
            priority={i === 0}
            className={cn(
              'transition-transform duration-[9000ms] ease-out',
              i === index ? 'scale-110' : 'scale-100',
            )}
          />
        </div>
      ))}

      {/* Scrims: bottom-up for the copy, left-to-right for the text column. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/20 to-transparent"
      />

      <div
        key={active.id}
        className="absolute bottom-16 left-6 z-10 max-w-[620px] pr-6 sm:bottom-20 sm:left-10 lg:left-14"
      >
        <p
          className="animate-fade-up mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft"
          style={{ animationDelay: '60ms' }}
        >
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          {eyebrow}
        </p>

        <h1
          className="animate-fade-up font-display text-[42px] font-bold leading-[1.03] tracking-[-.035em] sm:text-6xl lg:text-[72px]"
          style={{ animationDelay: '120ms' }}
        >
          <Link
            href={`/${type}/${active.id}`}
            className="transition-colors duration-300 hover:text-accent-soft"
          >
            {title}
          </Link>
        </h1>

        <div
          className="animate-fade-up mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-chalk/80"
          style={{ animationDelay: '180ms' }}
        >
          {rating && (
            <span className="rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-[#180810]">
              {rating}
            </span>
          )}
          {year && <span>{year}</span>}
          {genres.length > 0 && (
            <>
              <span className="text-dimmer">·</span>
              <span>{genres.join(' · ')}</span>
            </>
          )}
        </div>

        <p
          className="animate-fade-up mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/70"
          style={{ animationDelay: '240ms' }}
        >
          {truncate(active.overview, 260)}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: '300ms' }}
        >
          <Link
            href={`/${type}/${active.id}`}
            className="group/cta inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:shadow-glow-strong"
          >
            View details
            <ArrowRight className="transition-transform duration-300 ease-silk group-hover/cta:translate-x-1" />
          </Link>

          <WatchlistButton
            saved={isSaved}
            onToggle={() =>
              setSaved((current) => ({
                ...current,
                [active.id]: !current[active.id],
              }))
            }
          />
        </div>
      </div>

      {count > 1 && (
        <>
          {/* Dots double as the mobile control, so each keeps a 44px tap row. */}
          <div className="absolute bottom-8 left-6 z-10 -my-3 flex items-center gap-3 sm:left-10 sm:gap-2 lg:left-14">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${getTitle(item)}`}
                aria-current={i === index}
                className="group/dot flex items-center py-3"
              >
                <span
                  className={cn(
                    'block h-1 overflow-hidden rounded-full transition-all duration-300 ease-silk',
                    i === index
                      ? 'w-8 bg-white/25'
                      : 'w-3 bg-white/30 group-hover/dot:w-5 group-hover/dot:bg-white/60',
                  )}
                >
                  {i === index && (
                    <span
                      key={`${item.id}-progress`}
                      className={cn(
                        'block h-full w-full rounded-full bg-white',
                        !paused && 'dot-progress',
                      )}
                      style={
                        { '--hero-interval': `${INTERVAL}ms` } as CSSProperties
                      }
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="absolute bottom-7 right-6 z-10 hidden gap-2.5 opacity-0 transition-opacity duration-300 ease-silk group-hover/hero:opacity-100 focus-within:opacity-100 sm:right-10 sm:flex lg:right-11">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 ease-silk hover:scale-105 hover:bg-white/25 active:scale-95"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 ease-silk hover:scale-105 hover:bg-white/25 active:scale-95"
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
