import type { HeatmapSeason } from '@lib/studio/types';
import {
  HEATMAP_BANDS,
  HEATMAP_PALETTES,
  type HeatmapPalette,
  type ScaleStop,
} from './theme';

/** Pure heatmap logic, kept apart from the card so it can be tested. */

export type CellColours = { fill: string; text: string };

export type Band = (typeof HEATMAP_BANDS)[number] & CellColours;

function paletteDef(palette: HeatmapPalette) {
  return HEATMAP_PALETTES[palette] ?? HEATMAP_PALETTES.brand;
}

/** The scale stops of a gradient palette, or null for a band palette. */
export function paletteScale(
  palette: HeatmapPalette = 'brand',
): readonly ScaleStop[] | null {
  const def = paletteDef(palette);

  return 'scale' in def ? def.scale : null;
}

/**
 * The bands with the colours of a band palette. A gradient palette has no
 * bands of its own, so this falls back to the brand colours.
 */
export function paletteBands(palette: HeatmapPalette = 'brand'): Band[] {
  const def = paletteDef(palette);
  const colours = 'bands' in def ? def.bands : HEATMAP_PALETTES.brand.bands;

  return HEATMAP_BANDS.map((band, index) => ({ ...band, ...colours[index] }));
}

export function bandFor(
  value: number,
  palette: HeatmapPalette = 'brand',
): Band {
  const bands = paletteBands(palette);

  return bands.find((band) => value >= band.min) ?? bands[bands.length - 1];
}

function hexToRgb(hex: string): [number, number, number] {
  const number = Number.parseInt(hex.slice(1), 16);

  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
}

function rgbToHex(rgb: number[]): string {
  return `#${rgb
    .map((channel) => Math.round(channel).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`;
}

/** The fill at a score: a blend of the two stops on each side of it. */
export function scaleFill(value: number, stops: readonly ScaleStop[]): string {
  const first = stops[0];
  const last = stops[stops.length - 1];

  if (value <= first.value) {
    return first.fill;
  }

  if (value >= last.value) {
    return last.fill;
  }

  const upper = stops.findIndex((stop) => stop.value >= value);
  const from = stops[upper - 1];
  const to = stops[upper];
  const t = (value - from.value) / (to.value - from.value);
  const a = hexToRgb(from.fill);
  const b = hexToRgb(to.fill);

  return rgbToHex(
    a.map((channel, index) => channel + (b[index] - channel) * t),
  );
}

/** Fill and text colour of a cell with this score. */
export function cellColours(
  value: number,
  palette: HeatmapPalette = 'brand',
): CellColours {
  const def = paletteDef(palette);

  if (!('scale' in def)) {
    return bandFor(value, palette);
  }

  return {
    fill: scaleFill(value, def.scale),
    text:
      value < def.lightTextBelow || value > def.lightTextAbove
        ? def.lightText
        : def.text,
  };
}

export type Pick = {
  season: number;
  episode: number;
  name: string;
  vote: number;
};

/**
 * Best and worst episode among those with enough votes. Ties go to the
 * earlier episode (season first, then episode).
 */
export function bestAndWorst(
  seasons: HeatmapSeason[],
  minVotes: number,
): { best: Pick; worst: Pick } | null {
  let best: Pick | null = null;
  let worst: Pick | null = null;

  for (const season of [...seasons].sort((a, b) => a.number - b.number)) {
    for (const episode of [...season.episodes].sort(
      (a, b) => a.number - b.number,
    )) {
      if (episode.votes < minVotes) {
        continue;
      }

      const pick = {
        season: season.number,
        episode: episode.number,
        name: episode.name,
        vote: episode.vote,
      };

      if (!best || pick.vote > best.vote) {
        best = pick;
      }

      if (!worst || pick.vote < worst.vote) {
        worst = pick;
      }
    }
  }

  return best && worst ? { best, worst } : null;
}

export type HeatmapPart = {
  seasons: HeatmapSeason[];
  /** 1-based episode range shown in this part. */
  episodeFrom: number;
  episodeTo: number;
};

/**
 * Splits a big show into slides: at most `maxSeasons` columns and
 * `maxEpisodes` rows per slide. A single part when it fits.
 */
export function splitHeatmap(
  seasons: HeatmapSeason[],
  maxSeasons = 12,
  maxEpisodes = 30,
): HeatmapPart[] {
  const parts: HeatmapPart[] = [];

  for (let start = 0; start < seasons.length; start += maxSeasons) {
    const group = seasons.slice(start, start + maxSeasons);
    const longest = Math.max(
      0,
      ...group.flatMap((season) =>
        season.episodes.map((episode) => episode.number),
      ),
    );

    for (let from = 1; from <= Math.max(longest, 1); from += maxEpisodes) {
      const to = Math.min(from + maxEpisodes - 1, Math.max(longest, 1));

      parts.push({ seasons: group, episodeFrom: from, episodeTo: to });
    }
  }

  return parts;
}

export type CellLayout = {
  cellWidth: number;
  cellHeight: number;
  showNumbers: boolean;
  fontSize: number;
};

/**
 * Cell size that fills the grid area. Numbers are hidden when a cell gets too
 * small to read them; the legend then shows the value ranges instead.
 */
export function cellLayout(
  columns: number,
  rows: number,
  area: { width: number; height: number },
  gap = 10,
): CellLayout {
  const safeColumns = Math.max(columns, 1);
  const safeRows = Math.max(rows, 1);
  const cellWidth = Math.min(
    150,
    Math.floor((area.width - gap * (safeColumns - 1)) / safeColumns),
  );
  const cellHeight = Math.min(
    76,
    Math.floor((area.height - gap * (safeRows - 1)) / safeRows),
  );
  const showNumbers = cellHeight >= 40 && cellWidth >= 56;

  return {
    cellWidth,
    cellHeight,
    showNumbers,
    fontSize: Math.min(28, Math.round(cellHeight * 0.42)),
  };
}

export function bandRangeLabel(index: number): string {
  const band = HEATMAP_BANDS[index];
  const above = HEATMAP_BANDS[index - 1];

  if (!above) {
    return `${band.min.toFixed(1)}+`;
  }

  if (band.min === 0) {
    return `< ${above.min.toFixed(1)}`;
  }

  return `${band.min.toFixed(1)}–${(above.min - 0.1).toFixed(1)}`;
}
