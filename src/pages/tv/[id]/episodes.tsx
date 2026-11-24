import type { ServerResponse } from 'node:http';
import { setSlowPageCache } from '@lib/cache';
import {
  episodeCode,
  type EpisodeSummary,
  type Faq,
  formatVote,
  getEpisodeAnswer,
  getEpisodeFaq,
  MIN_VOTES,
  type RankedEpisode,
  summarizeEpisodes,
} from '@lib/episodes';
import { getEpisodesJsonLd } from '@lib/jsonLd';
import { getHeatmap, TmdbError } from '@lib/studio/tmdb';
import type { HeatmapData } from '@lib/studio/types';
import { getImageSrc } from '@lib/tmdb';
import { EpisodeHeatmap } from '@modules/detail';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { Breadcrumb, JsonLd, Reveal, SectionHeader, Seo } from '@modules/ui';
import Link from 'next/link';

type EpisodesProps = {
  data: HeatmapData;
  summary: EpisodeSummary;
  answer: string;
  faq: Array<Faq>;
};

function years(data: HeatmapData): string {
  const { firstYear, lastYear, inProduction } = data.show;

  if (!firstYear) {
    return '';
  }

  if (inProduction) {
    return `${firstYear}–`;
  }

  return lastYear && lastYear !== firstYear
    ? `${firstYear}–${lastYear}`
    : firstYear;
}

function EpisodeList({ episodes }: { episodes: Array<RankedEpisode> }) {
  return (
    <ol className="divide-y divide-white/[.08] overflow-hidden rounded-card border border-white/10 bg-white/[.03]">
      {episodes.map((episode, i) => (
        <li
          key={episodeCode(episode)}
          className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-3 px-4 py-3 sm:px-5"
        >
          <span className="text-sm font-semibold tabular-nums text-dimmer">
            {i + 1}
          </span>
          <span className="min-w-0">
            <b className="block truncate text-[15px] font-semibold">
              {episode.name || `Episode ${episode.episode}`}
            </b>
            <span className="text-[12px] text-dim">
              {`${episodeCode(episode)} · ${episode.votes} votes`}
            </span>
          </span>
          <span className="font-display text-lg font-semibold tabular-nums">
            {formatVote(episode.vote)}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function Episodes({
  data,
  summary,
  answer,
  faq,
}: EpisodesProps) {
  const { title, showId } = summary;
  const span = years(data);
  const best = summary.top[0] ?? null;
  const worst = summary.bottom[0] ?? null;

  return (
    <HomeLayout>
      <Seo
        title={`${title} episode ratings: best and worst episodes`}
        description={answer}
        path={`/tv/${showId}/episodes`}
        image={getImageSrc(data.show.posterPath, 'w780')}
        noIndex={summary.rated === 0}
      />
      <JsonLd id="episodes" data={getEpisodesJsonLd(summary, faq)} />

      <Navbar />

      <div className="pt-8">
        <Breadcrumb
          items={[
            { label: 'Discover', href: '/discover' },
            { label: title, href: `/tv/${showId}` },
            { label: 'Episode ratings' },
          ]}
        />
      </div>

      <Reveal as="header" className="mt-6">
        <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          Episode ratings
        </p>
        <h1 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-.035em] sm:text-5xl">
          {`${title} episode ratings`}
        </h1>
        <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-chalk/90">
          {answer}
        </p>
        <p className="mt-3 text-[13px] text-dim">
          {[
            span,
            `${summary.episodes} episodes`,
            summary.average !== null &&
              `average ${formatVote(summary.average)}/10`,
            `ratings by TMDB users, episodes with fewer than ${MIN_VOTES} votes not ranked`,
          ]
            .filter(Boolean)
            .join(' · ')}
        </p>
      </Reveal>

      {summary.episodes > 0 && (
        <section className="mt-12">
          <Reveal>
            <SectionHeader eyebrow="Every episode" title="Heatmap by season" />
          </Reveal>
          <Reveal delay={80}>
            <EpisodeHeatmap
              title={title}
              seasons={data.seasons}
              best={best}
              worst={worst}
            />
          </Reveal>
        </section>
      )}

      {summary.top.length > 0 && (
        <section className="mt-[72px] grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Top rated"
                title={`Best ${title} episodes`}
              />
            </Reveal>
            <EpisodeList episodes={summary.top} />
          </div>

          {summary.bottom.length > 0 && (
            <div>
              <Reveal>
                <SectionHeader
                  eyebrow="Lowest rated"
                  title={`Worst ${title} episodes`}
                />
              </Reveal>
              <EpisodeList episodes={summary.bottom} />
            </div>
          )}
        </section>
      )}

      {summary.bestSeason && (
        <section className="mt-[72px]">
          <Reveal>
            <SectionHeader eyebrow="Season by season" title="Season averages" />
          </Reveal>
          <div className="overflow-x-auto rounded-card border border-white/10 bg-white/[.03]">
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] uppercase tracking-[.1em] text-dimmer">
                <tr>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    Season
                  </th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    Average
                  </th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    Episodes
                  </th>
                  <th scope="col" className="px-3 py-3 sm:px-5 font-semibold">
                    Best episode
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[.08]">
                {summary.seasons.map((season) => (
                  <tr key={season.number}>
                    <th scope="row" className="px-3 py-3 sm:px-5 font-semibold">
                      {`Season ${season.number}`}
                    </th>
                    <td className="px-3 py-3 sm:px-5 tabular-nums">
                      {season.average !== null
                        ? formatVote(season.average)
                        : '–'}
                    </td>
                    <td className="px-3 py-3 sm:px-5 tabular-nums">
                      {season.episodes}
                    </td>
                    <td className="px-3 py-3 sm:px-5 text-dim">
                      {season.best
                        ? `${season.best.name || `Episode ${season.best.episode}`} (${formatVote(season.best.vote)})`
                        : '–'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section className="mt-[72px] max-w-[760px]">
          <Reveal>
            <SectionHeader eyebrow="Quick answers" title="Questions" />
          </Reveal>
          <dl className="space-y-6">
            {faq.map((item) => (
              <div key={item.question}>
                <dt className="font-display text-lg font-semibold">
                  {item.question}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-white/80">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <p className="mt-12 text-[13px] text-dim">
        <Link
          href={`/tv/${showId}`}
          className="text-accent-soft transition-colors duration-200 ease-silk hover:text-chalk"
        >
          {`About ${title}: cast, crew and show details`}
        </Link>
      </p>
    </HomeLayout>
  );
}

type ServerProps = {
  query: { id: string };
  res: ServerResponse;
};

export async function getServerSideProps({ query, res }: ServerProps) {
  const id = Number(query.id);

  if (!Number.isInteger(id) || id <= 0) {
    return { notFound: true };
  }

  let data: HeatmapData;

  try {
    data = await getHeatmap(id);
  } catch (error) {
    if (error instanceof TmdbError && error.status === 404) {
      return { notFound: true };
    }

    throw error;
  }

  setSlowPageCache(res);
  const summary = summarizeEpisodes(data);

  return {
    props: {
      data,
      summary,
      answer: getEpisodeAnswer(summary),
      faq: getEpisodeFaq(summary),
    },
  };
}
