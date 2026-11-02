import type { HeatmapData } from '@lib/studio/types';
import { fetchHeatmap } from '../api';
import { AccentText, CardFrame, Grain, Wordmark } from '../components/Card';
import { Poster } from '../components/Poster';
import {
  bandRangeLabel,
  bestAndWorst,
  cellColours,
  cellLayout,
  paletteBands,
  paletteScale,
  splitHeatmap,
  type HeatmapPart,
  type Pick as EpisodePick,
} from '../heatmap';
import { slugify } from '../text';
import {
  colors,
  fonts,
  HEATMAP_NO_VOTES,
  HEATMAP_PALETTES,
  type HeatmapPalette,
} from '../theme';
import type { PickedTitle, TemplateDef } from '../types';

type Input = {
  show: PickedTitle | null;
  headline: string;
  minVotes: number;
  palette: HeatmapPalette;
  legend: 'show' | 'hide';
};

type Data = HeatmapData;

const LABEL_COLUMN = 56;
const GAP = 10;
/** Height the legend and its gap take; the grid gets it when the legend is hidden. */
const LEGEND_SPACE = 56;
const EXTREME_ROW_HEIGHT = 40;
/** The best and worst rows make the header taller; the grid gives up that height. */
const GRID_AREA = { width: 952 - LABEL_COLUMN - GAP, height: 800 };

function yearsLabel(show: HeatmapData['show']): string | null {
  if (!show.firstYear) {
    return null;
  }

  const end = show.inProduction ? 'now' : show.lastYear;

  return end && end !== show.firstYear
    ? `${show.firstYear}–${end}`
    : show.firstYear;
}

/**
 * One summary row: the score in its grid cell colour, then the label, the
 * episode code, and the episode name. The colour links the row to its cell.
 */
function ExtremeRow({
  label,
  pick,
  palette,
}: {
  label: string;
  pick: EpisodePick;
  palette: HeatmapPalette;
}) {
  const cell = cellColours(pick.vote, palette);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        minWidth: 0,
        height: EXTREME_ROW_HEIGHT,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 76,
          height: EXTREME_ROW_HEIGHT,
          borderRadius: 10,
          background: cell.fill,
          color: cell.text,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: fonts.display,
          fontWeight: 700,
          fontSize: 26,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {pick.vote.toFixed(1)}
      </span>
      <span
        style={{
          flexShrink: 0,
          width: 84,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: colors.textTertiary,
        }}
      >
        {label}
      </span>
      <span
        style={{
          flexShrink: 0,
          minWidth: 112,
          fontFamily: fonts.display,
          fontWeight: 600,
          fontSize: 28,
          color: colors.text,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        S{pick.season} E{pick.episode}
      </span>
      {pick.name && (
        <span
          style={{
            minWidth: 0,
            fontSize: 26,
            color: colors.textSecondary,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          “{pick.name}”
        </span>
      )}
    </div>
  );
}

function HeatmapCard({
  input,
  data,
  part,
  partIndex,
  partCount,
}: {
  input: Input;
  data: Data;
  part: HeatmapPart;
  partIndex: number;
  partCount: number;
}) {
  const extremes = bestAndWorst(data.seasons, input.minVotes);
  const rows = part.episodeTo - part.episodeFrom + 1;
  const layout = cellLayout(
    part.seasons.length,
    rows,
    input.legend === 'show'
      ? GRID_AREA
      : { ...GRID_AREA, height: GRID_AREA.height + LEGEND_SPACE },
    GAP,
  );
  const years = yearsLabel(data.show);
  const scale = paletteScale(input.palette);
  const seasonRange =
    partCount > 1
      ? `part ${partIndex + 1}/${partCount} · S${part.seasons[0].number}–S${part.seasons[part.seasons.length - 1].number}` +
        (part.episodeFrom > 1 ||
        part.episodeTo < Math.max(...part.seasons.map((s) => s.episodes.length))
          ? ` · E${part.episodeFrom}–E${part.episodeTo}`
          : '')
      : null;
  const eyebrow = [data.show.title, years, seasonRange]
    .filter(Boolean)
    .join(' · ');
  const gridColumns = `${LABEL_COLUMN}px repeat(${part.seasons.length}, ${layout.cellWidth}px)`;
  const episodeNumbers = Array.from(
    { length: rows },
    (_, index) => part.episodeFrom + index,
  );

  return (
    <CardFrame
      background={colors.ground}
      color={colors.text}
      style={{
        padding: '60px 64px 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
      }}
    >
      <Grain opacity={0.12} blend="overlay" />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          gap: 28,
          alignItems: 'center',
        }}
      >
        <Poster
          path={data.show.posterPath}
          seed={data.show.id}
          size="w185"
          width={104}
          height={156}
          radius={16}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: colors.textTertiary,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {eyebrow}
          </span>
          <div
            style={{
              fontFamily: fonts.display,
              fontWeight: 800,
              fontSize: 60,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            <AccentText text={input.headline} />
          </div>
          {extremes && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginTop: 10,
              }}
            >
              <ExtremeRow
                label="Best"
                pick={extremes.best}
                palette={input.palette}
              />
              <ExtremeRow
                label="Worst"
                pick={extremes.worst}
                palette={input.palette}
              />
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: GAP,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridColumns,
            gap: GAP,
          }}
        >
          <span />
          {part.seasons.map((season) => (
            <span
              key={season.number}
              style={{
                textAlign: 'center',
                fontFamily: fonts.display,
                fontWeight: 600,
                fontSize: 26,
                color: colors.textSecondary,
              }}
            >
              S{season.number}
            </span>
          ))}
        </div>
        {episodeNumbers.map((episodeNumber) => (
          <div
            key={episodeNumber}
            style={{
              display: 'grid',
              gridTemplateColumns: gridColumns,
              gap: GAP,
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: Math.min(24, layout.cellHeight * 0.5),
                color: colors.textTertiary,
              }}
            >
              E{episodeNumber}
            </span>
            {part.seasons.map((season) => {
              const episode = season.episodes.find(
                (item) => item.number === episodeNumber,
              );

              if (!episode) {
                return (
                  <div
                    key={season.number}
                    style={{ height: layout.cellHeight }}
                  />
                );
              }

              const enough = episode.votes >= input.minVotes;
              const band = cellColours(episode.vote, input.palette);

              return (
                <div
                  key={season.number}
                  style={{
                    height: layout.cellHeight,
                    borderRadius: Math.min(14, layout.cellHeight / 4),
                    boxSizing: 'border-box',
                    background: enough ? band.fill : HEATMAP_NO_VOTES.fill,
                    border: enough
                      ? 'none'
                      : `2px solid ${HEATMAP_NO_VOTES.border}`,
                    color: enough ? band.text : HEATMAP_NO_VOTES.text,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: fonts.display,
                    fontWeight: 700,
                    fontSize: layout.fontSize,
                  }}
                >
                  {layout.showNumbers
                    ? enough
                      ? episode.vote.toFixed(1)
                      : '–'
                    : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {input.legend === 'show' && (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {scale ? (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 24,
                color: '#D7CDE6',
              }}
            >
              {scale[0].value.toFixed(1)} or less
              <span
                style={{
                  width: 280,
                  height: 24,
                  borderRadius: 8,
                  background: `linear-gradient(to right, ${scale
                    .map(
                      (stop) =>
                        `${stop.fill} ${(((stop.value - scale[0].value) / (scale[scale.length - 1].value - scale[0].value)) * 100).toFixed(1)}%`,
                    )
                    .join(', ')})`,
                }}
              />
              {scale[scale.length - 1].value.toFixed(1)}+
            </span>
          ) : (
            <>
              {paletteBands(input.palette).map((band, index) => (
                <span
                  key={band.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 24,
                    color: '#D7CDE6',
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 8,
                      background: band.fill,
                    }}
                  />
                  {band.label}
                  {!layout.showNumbers && (
                    <span style={{ color: colors.textTertiary }}>
                      {bandRangeLabel(index)}
                    </span>
                  )}
                </span>
              ))}
            </>
          )}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 24,
              color: '#D7CDE6',
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                boxSizing: 'border-box',
                background: HEATMAP_NO_VOTES.fill,
                border: `2px solid ${HEATMAP_NO_VOTES.border}`,
              }}
            />
            {HEATMAP_NO_VOTES.label}
          </span>
        </div>
      )}

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <span style={{ fontSize: 22, color: colors.textTertiary }}>
          TMDB community scores per episode · Data: TMDB
        </span>
        <Wordmark size={44} color={colors.text} />
      </div>
    </CardFrame>
  );
}

export const heatmap: TemplateDef<Input, Data> = {
  id: 'heatmap',
  name: 'Episode heatmap',
  description: 'Every episode’s TMDB score as a season × episode grid.',
  fields: {
    show: { kind: 'title', label: 'Show', media: 'tv' },
    headline: {
      kind: 'text',
      label: 'Headline',
      help: 'Wrap one word in *asterisks* for the coral accent.',
      max: 40,
    },
    minVotes: {
      kind: 'number',
      label: 'Minimum votes per episode',
      help: 'Episodes with fewer votes show as "not enough votes".',
      min: 0,
      max: 500,
    },
    palette: {
      kind: 'select',
      label: 'Colours',
      help: 'Traffic light and colour-blind safe use the scales readers already know.',
      options: (Object.keys(HEATMAP_PALETTES) as HeatmapPalette[]).map(
        (value) => ({ value, label: HEATMAP_PALETTES[value].label }),
      ),
    },
    legend: {
      kind: 'select',
      label: 'Legend',
      help: 'Hide the colour key below the grid in the exported image.',
      options: [
        { value: 'show', label: 'Show legend' },
        { value: 'hide', label: 'Hide legend' },
      ],
    },
  },
  defaults: {
    show: null,
    headline: 'When did it *fall off?*',
    minVotes: 5,
    palette: 'brand',
    legend: 'show',
  },
  validate: () => [],
  dataKey: (input) => String(input.show?.id ?? ''),
  resolve: async (input) => {
    if (!input.show) {
      throw new Error('Pick a show');
    }

    return fetchHeatmap(input.show.id);
  },
  slides: (input, data) => {
    if (!data.seasons.length) {
      return [];
    }

    const parts = splitHeatmap(data.seasons);

    return parts.map((part, index) => ({
      key: `part-${index}`,
      label: parts.length > 1 ? `Part ${index + 1}` : 'Heatmap',
      element: (
        <HeatmapCard
          input={input}
          data={data}
          part={part}
          partIndex={index}
          partCount={parts.length}
        />
      ),
    }));
  },
  slug: (_input, data) => slugify(data.show.title),
};
