import { formatCount } from '@lib/format';
import { getImageSrc } from '@lib/tmdb';
import { TitleDetailType } from '@lib/types';
import {
  Breadcrumb,
  PosterImage,
  Rail,
  Reveal,
  SectionHeader,
  WatchlistButton,
} from '@modules/ui';
import { useState } from 'react';
import { CastGrid } from './CastGrid';
import { FactsPanel } from './FactsPanel';
import { ScoreRing } from './ScoreRing';
import { TitleBackdrop } from './TitleBackdrop';

/**
 * A movie or a show, rendered from the same view model. Every block below the
 * masthead is optional: TMDB's coverage varies wildly between titles, so a
 * section with nothing behind it is left out rather than shown empty.
 */
export function TitleDetail({ detail }: { detail: TitleDetailType }) {
  const [saved, setSaved] = useState(false);

  const {
    type,
    title,
    tagline,
    overview,
    posterPath,
    backdropPath,
    year,
    length,
    genres,
    score,
    votes,
    cast,
    crew,
    facts,
    similar,
  } = detail;

  const director = crew[0];
  const factline = [
    year,
    length,
    director && `${director.role}: ${director.name}`,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <TitleBackdrop path={backdropPath} title={title} />

      <div className="pt-[170px] sm:pt-[240px] lg:pt-[280px]">
        <Breadcrumb
          items={[
            { label: 'Discover', href: '/discover' },
            {
              label: type === 'tv' ? 'TV shows' : 'Movies',
              href: '/discover',
            },
            { label: title },
          ]}
        />
      </div>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
        <Reveal className="max-w-[190px] lg:max-w-none">
          <div className="relative aspect-[2/3] overflow-hidden rounded-card border border-white/[.14] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
            <PosterImage
              src={getImageSrc(posterPath, 'w500')}
              title={title}
              sizes="(max-width: 1100px) 190px, 300px"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display text-[34px] font-bold leading-[1.03] tracking-[-.035em] sm:text-5xl lg:text-[64px]">
            {title}
          </h1>

          {tagline && (
            <p className="mt-3 text-lg font-medium text-accent-soft">
              {tagline}
            </p>
          )}

          {factline && <p className="mt-5 text-sm text-chalk/85">{factline}</p>}

          {genres.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <li
                  key={genre}
                  className="rounded-full border border-white/10 bg-white/[.05] px-4 py-2 text-[13px] font-medium"
                >
                  {genre}
                </li>
              ))}
            </ul>
          )}

          {score !== null && (
            <div className="mt-7 flex w-fit items-center gap-6 rounded-card border border-white/10 bg-white/[.05] px-6 py-5">
              <ScoreRing score={score} />
              <div className="text-[13px] leading-relaxed text-dim">
                <b className="block text-sm font-semibold text-chalk">
                  User score
                </b>
                {votes > 0
                  ? `${formatCount(votes)} ${votes === 1 ? 'rating' : 'ratings'}`
                  : 'Not rated yet'}
              </div>
            </div>
          )}

          {overview && (
            <p className="mt-7 max-w-[680px] text-base leading-[1.75] text-white/80">
              {overview}
            </p>
          )}

          <div className="mt-7">
            <WatchlistButton
              saved={saved}
              onToggle={() => setSaved((current) => !current)}
              variant="primary"
              label="Add to watchlist"
              savedLabel="On your watchlist"
            />
          </div>

          {crew.length > 0 && (
            <div className="mt-9 grid max-w-[680px] gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              {crew.map((credit) => (
                <div key={credit.role}>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[.1em] text-dimmer">
                    {credit.role}
                  </span>
                  <b className="text-sm font-semibold">{credit.name}</b>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>

      {cast.length > 0 && (
        <section className="mt-[72px]">
          <Reveal>
            <SectionHeader eyebrow="Top billed" title="Cast" />
          </Reveal>
          <CastGrid cast={cast} />
        </section>
      )}

      {facts.length > 0 && (
        <section className="mt-[72px]">
          <Reveal>
            <SectionHeader
              eyebrow="The particulars"
              title={type === 'tv' ? 'Show details' : 'Film details'}
            />
          </Reveal>
          <Reveal delay={80}>
            <FactsPanel facts={facts} />
          </Reveal>
        </section>
      )}

      {similar.length > 0 && (
        <section className="mt-[72px]">
          <Reveal>
            <SectionHeader eyebrow="If you liked this" title="More like this" />
          </Reveal>
          <Rail items={similar} type={type} />
        </section>
      )}
    </>
  );
}
