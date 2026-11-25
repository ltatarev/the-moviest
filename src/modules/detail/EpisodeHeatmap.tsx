import { formatVote, MIN_VOTES, type RankedEpisode } from '@lib/episodes';
import type { HeatmapSeason } from '@lib/studio/types';
import {
  bandRangeLabel,
  cellColours,
  paletteBands,
} from '@modules/studio/heatmap';
import { HEATMAP_BANDS, HEATMAP_NO_VOTES } from '@modules/studio/theme';
import cn from 'classnames';
import { type CSSProperties, useState } from 'react';

type EpisodeHeatmapProps = {
  title: string;
  seasons: Array<HeatmapSeason>;
  best: RankedEpisode | null;
  worst: RankedEpisode | null;
};

/** The episode that the readout shows. */
type Pointed = {
  season: number;
  number: number;
  name: string;
  vote: number;
  enough: boolean;
  fill: string;
};

/** A band index, or "few" for episodes with fewer than MIN_VOTES votes. */
type BandKey = number | 'few';

function isSame(
  episode: RankedEpisode | null,
  season: number,
  number: number,
): boolean {
  return episode?.season === season && episode.episode === number;
}

function bandIndex(vote: number): number {
  const index = HEATMAP_BANDS.findIndex((band) => vote >= band.min);

  return index === -1 ? HEATMAP_BANDS.length - 1 : index;
}

/** Cells sweep in season by season. Cap the delay for long shows. */
function sweepDelay(column: number, row: number): string {
  return `${Math.min(column * 70 + row * 10, 900)}ms`;
}

/**
 * Every episode rating as a table: one column per season, one row per
 * episode. A table, not a picture, so that search engines and screen readers
 * can read each value. Wide shows scroll inside the frame, not the page.
 *
 * Point at a cell to read its episode above the grid. Point at a legend
 * entry to see only the episodes in that band; click it to keep the filter.
 */
export function EpisodeHeatmap({
  title,
  seasons,
  best,
  worst,
}: EpisodeHeatmapProps) {
  const [pointed, setPointed] = useState<Pointed | null>(null);
  const [previewBand, setPreviewBand] = useState<BandKey | null>(null);
  const [pinnedBand, setPinnedBand] = useState<BandKey | null>(null);

  const rows = Math.max(
    0,
    ...seasons.flatMap((season) => season.episodes.map((e) => e.number)),
  );
  const rowNumbers = Array.from({ length: rows }, (_, i) => i + 1);
  const bands = paletteBands('brand');
  const activeBand = previewBand ?? pinnedBand;

  const counts = new Map<BandKey, number>();

  for (const season of seasons) {
    for (const episode of season.episodes) {
      const key: BandKey =
        episode.votes >= MIN_VOTES ? bandIndex(episode.vote) : 'few';

      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  function bandName(key: BandKey): string {
    return key === 'few'
      ? `with fewer than ${MIN_VOTES} votes`
      : `${bands[key].label.toLowerCase()} (${bandRangeLabel(key)})`;
  }

  function readout() {
    if (pointed) {
      return {
        tag: `S${pointed.season} E${pointed.number}`,
        name: pointed.name || `Episode ${pointed.number}`,
        value: pointed.enough ? formatVote(pointed.vote) : '–',
        fill: pointed.fill,
      };
    }

    if (activeBand !== null) {
      const count = counts.get(activeBand) ?? 0;

      return {
        tag: `${count} ${count === 1 ? 'episode' : 'episodes'}`,
        name: bandName(activeBand),
        value: null,
        fill:
          activeBand === 'few' ? HEATMAP_NO_VOTES.fill : bands[activeBand].fill,
      };
    }

    if (best) {
      return {
        tag: 'Best',
        name: `S${best.season} E${best.episode} · ${best.name || `Episode ${best.episode}`}`,
        value: formatVote(best.vote),
        fill: cellColours(best.vote, 'brand').fill,
      };
    }

    return null;
  }

  const line = readout();

  function legendProps(key: BandKey) {
    const pressed = pinnedBand === key;

    return {
      type: 'button' as const,
      'aria-pressed': pressed,
      onPointerEnter: () => setPreviewBand(key),
      onPointerLeave: () => setPreviewBand(null),
      onFocus: () => setPreviewBand(key),
      onBlur: () => setPreviewBand(null),
      onClick: () => setPinnedBand(pressed ? null : key),
      className: cn(
        'flex items-center gap-2 rounded-full px-2.5 py-1 transition-colors duration-200 ease-silk',
        'hover:bg-white/[.06] hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-soft',
        pressed && 'bg-white/[.08] text-chalk',
        activeBand !== null && activeBand !== key && !pressed && 'opacity-60',
      ),
    };
  }

  return (
    <div>
      <div className="rounded-card border border-white/10 bg-white/[.03] p-3 sm:p-5">
        {line && (
          <p
            aria-hidden="true"
            className="sticky top-[84px] z-10 mx-auto mb-3 flex h-9 w-fit max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-ink/80 px-4 text-[13px] backdrop-blur-xl sm:mb-4"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-sm transition-colors duration-200 ease-silk"
              style={{ backgroundColor: line.fill }}
            />
            <span className="shrink-0 font-semibold uppercase tracking-[.1em] text-dim text-[11px]">
              {line.tag}
            </span>
            <span className="min-w-0 truncate text-chalk">{line.name}</span>
            {line.value && (
              <span className="shrink-0 font-display text-[15px] font-semibold tabular-nums text-chalk">
                {line.value}
              </span>
            )}
          </p>
        )}

        <div className="overflow-x-auto">
          <table
            className="heatmap mx-auto border-separate border-spacing-1 text-center"
            onPointerLeave={() => setPointed(null)}
          >
            <caption className="sr-only">
              {`TMDB user rating of each ${title} episode, by season`}
            </caption>
            <thead>
              <tr>
                <th scope="col" className="sr-only">
                  Episode
                </th>
                {seasons.map((season) => (
                  <th
                    key={season.number}
                    scope="col"
                    className={cn(
                      'px-1 pb-1 text-[11px] font-semibold uppercase tracking-[.1em] transition-colors duration-150',
                      pointed?.season === season.number
                        ? 'text-chalk'
                        : 'text-dimmer',
                    )}
                  >
                    <abbr
                      title={`Season ${season.number}`}
                      className="no-underline"
                    >
                      S{season.number}
                    </abbr>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowNumbers.map((number) => (
                <tr key={number}>
                  <th
                    scope="row"
                    className={cn(
                      'pr-2 text-right text-[11px] font-semibold transition-colors duration-150',
                      pointed?.number === number ? 'text-chalk' : 'text-dimmer',
                    )}
                  >
                    <abbr title={`Episode ${number}`} className="no-underline">
                      E{number}
                    </abbr>
                  </th>
                  {seasons.map((season, column) => {
                    const episode = season.episodes.find(
                      (e) => e.number === number,
                    );

                    if (!episode) {
                      return <td key={season.number} aria-hidden="true" />;
                    }

                    const enough = episode.votes >= MIN_VOTES;
                    const colours = enough
                      ? cellColours(episode.vote, 'brand')
                      : {
                          fill: HEATMAP_NO_VOTES.fill,
                          text: HEATMAP_NO_VOTES.text,
                        };
                    const key: BandKey = enough
                      ? bandIndex(episode.vote)
                      : 'few';
                    const muted = activeBand !== null && activeBand !== key;
                    const isBest = isSame(best, season.number, number);
                    const isWorst = isSame(worst, season.number, number);
                    const isPointed =
                      pointed?.season === season.number &&
                      pointed.number === number;
                    const label = `Season ${season.number}, episode ${number}${episode.name ? `, “${episode.name}”` : ''}: ${enough ? `${formatVote(episode.vote)}/10` : HEATMAP_NO_VOTES.label}`;
                    const point = () =>
                      setPointed({
                        season: season.number,
                        number,
                        name: episode.name,
                        vote: episode.vote,
                        enough,
                        fill: colours.fill,
                      });

                    return (
                      <td
                        key={season.number}
                        onPointerEnter={point}
                        onClick={point}
                        style={
                          {
                            backgroundColor: colours.fill,
                            color: colours.text,
                            '--sweep-delay': sweepDelay(column, number),
                          } as CSSProperties
                        }
                        className={cn(
                          'heatmap-cell h-9 min-w-11 cursor-default rounded-md px-1.5 text-[13px] font-semibold tabular-nums',
                          !enough && 'border border-white/[.06]',
                          (isBest || isWorst) &&
                            'outline outline-2 outline-offset-1',
                          isBest && 'outline-chalk',
                          isWorst && 'outline-dimmer',
                          muted && 'is-muted',
                          isPointed && 'is-pointed',
                        )}
                      >
                        <span className="sr-only">{label}</span>
                        <span aria-hidden="true">
                          {enough ? formatVote(episode.vote) : '–'}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ul className="-mx-2.5 mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-[12px] text-dim">
        {bands.map((band, i) =>
          counts.has(i) ? (
            <li key={band.label}>
              <button
                {...legendProps(i)}
                aria-label={`Show only ${band.label.toLowerCase()} episodes, ${bandRangeLabel(i)}`}
              >
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-sm"
                  style={{ backgroundColor: band.fill }}
                />
                {band.label} {bandRangeLabel(i)}
              </button>
            </li>
          ) : (
            <li
              key={band.label}
              className="flex items-center gap-2 px-2.5 py-1 opacity-60"
            >
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: band.fill }}
              />
              {band.label} {bandRangeLabel(i)}
            </li>
          ),
        )}
        {counts.has('few') && (
          <li>
            <button
              {...legendProps('few')}
              aria-label={`Show only episodes with fewer than ${MIN_VOTES} votes`}
            >
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-sm border border-white/10"
                style={{ backgroundColor: HEATMAP_NO_VOTES.fill }}
              />
              {`Fewer than ${MIN_VOTES} votes`}
            </button>
          </li>
        )}
        {best && (
          <li className="flex items-center gap-2 px-2.5 py-1">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-sm outline outline-2 outline-chalk"
            />
            Best episode
          </li>
        )}
        {worst && (
          <li className="flex items-center gap-2 px-2.5 py-1">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-sm outline outline-2 outline-dimmer"
            />
            Worst episode
          </li>
        )}
      </ul>
    </div>
  );
}
