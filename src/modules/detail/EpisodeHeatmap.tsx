import { formatVote, MIN_VOTES, type RankedEpisode } from '@lib/episodes';
import type { HeatmapSeason } from '@lib/studio/types';
import {
  bandRangeLabel,
  cellColours,
  paletteBands,
} from '@modules/studio/heatmap';
import { HEATMAP_NO_VOTES } from '@modules/studio/theme';
import cn from 'classnames';

type EpisodeHeatmapProps = {
  title: string;
  seasons: Array<HeatmapSeason>;
  best: RankedEpisode | null;
  worst: RankedEpisode | null;
};

function isSame(
  episode: RankedEpisode | null,
  season: number,
  number: number,
): boolean {
  return episode?.season === season && episode.episode === number;
}

/**
 * Every episode rating as a table: one column per season, one row per
 * episode. A table, not a picture, so that search engines and screen readers
 * can read each value. Wide shows scroll inside the frame, not the page.
 */
export function EpisodeHeatmap({
  title,
  seasons,
  best,
  worst,
}: EpisodeHeatmapProps) {
  const rows = Math.max(
    0,
    ...seasons.flatMap((season) => season.episodes.map((e) => e.number)),
  );
  const rowNumbers = Array.from({ length: rows }, (_, i) => i + 1);
  const bands = paletteBands('brand');

  return (
    <div>
      <div className="overflow-x-auto rounded-card border border-white/10 bg-white/[.03] p-3 sm:p-5">
        <table className="mx-auto border-separate border-spacing-1 text-center">
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
                  className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-[.1em] text-dimmer"
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
                  className="pr-2 text-right text-[11px] font-semibold text-dimmer"
                >
                  <abbr title={`Episode ${number}`} className="no-underline">
                    E{number}
                  </abbr>
                </th>
                {seasons.map((season) => {
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
                  const isBest = isSame(best, season.number, number);
                  const isWorst = isSame(worst, season.number, number);
                  const label = `Season ${season.number}, episode ${number}${episode.name ? `, “${episode.name}”` : ''}: ${enough ? `${formatVote(episode.vote)}/10` : HEATMAP_NO_VOTES.label}`;

                  return (
                    <td
                      key={season.number}
                      title={label}
                      style={{
                        backgroundColor: colours.fill,
                        color: colours.text,
                      }}
                      className={cn(
                        'h-9 min-w-11 rounded-md px-1.5 text-[13px] font-semibold tabular-nums',
                        !enough && 'border border-white/[.06]',
                        (isBest || isWorst) &&
                          'outline outline-2 outline-offset-1',
                        isBest && 'outline-chalk',
                        isWorst && 'outline-dimmer',
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

      <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-dim">
        {bands.map((band, i) => (
          <li key={band.label} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: band.fill }}
            />
            {band.label} {bandRangeLabel(i)}
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-sm border border-white/10"
            style={{ backgroundColor: HEATMAP_NO_VOTES.fill }}
          />
          {`Fewer than ${MIN_VOTES} votes`}
        </li>
        {best && (
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-sm outline outline-2 outline-chalk"
            />
            Best episode
          </li>
        )}
        {worst && (
          <li className="flex items-center gap-2">
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
