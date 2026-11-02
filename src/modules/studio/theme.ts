/**
 * Card design values, from the "Moviest Social Cards" mockups (drawn at
 * 540×675, so every size here is already doubled for 1080×1350 output).
 *
 * Cards use these constants, never the site's Tailwind theme, so restyling the
 * site can't change exported images.
 */

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1350;

export const colors = {
  ground: '#0B0716',
  groundEnd: '#0E0A16',
  backdropFallback: '#2A1D3A',
  text: '#F3EEF8',
  textSecondary: '#B8A9D9',
  textQuote: '#E4DCEF',
  textTertiary: '#8F7FB3',
  coral: '#F4536E',
  pillFill: 'rgba(108, 99, 255, 0.22)',
  pillText: '#CFC9FF',
  chipFill: '#241A35',

  lavender: '#E8E0F4',
  lavenderText: '#140C22',
  lavenderSecondary: '#3A2C55',
  lavenderMuted: '#4B3C66',
  lavenderEyebrow: '#5B4A7A',
} as const;

export const fonts = {
  display: 'var(--studio-display), Outfit, sans-serif',
  body: 'var(--studio-body), "Plus Jakarta Sans", sans-serif',
} as const;

/** Heatmap bands: a value ≥ `min` takes that band. Tune here only. */
export const HEATMAP_BANDS = [
  { min: 8.5, label: 'Awesome' },
  { min: 7.8, label: 'Great' },
  { min: 7.0, label: 'Good' },
  { min: 6.2, label: 'Meh' },
  { min: 0, label: 'Rough' },
] as const;

type BandColors = { fill: string; text: string };

/** A colour at a score. Scores between two stops blend the two colours. */
export type ScaleStop = { value: number; fill: string };

type PaletteDef =
  | { label: string; bands: readonly BandColors[] }
  | {
      label: string;
      /** Ascending stops. Scores below the first stop take its colour. */
      scale: readonly ScaleStop[];
      text: string;
      /** Text on the dark cells: below `lightTextBelow` or above `lightTextAbove`. */
      lightText: string;
      lightTextBelow: number;
      lightTextAbove: number;
    };

/**
 * Cell colours per palette. A band palette has one entry per band in
 * `HEATMAP_BANDS` order. A scale palette blends colours across the scores.
 * "traffic" and "viridis" use the scales readers already know, so a red cell
 * never means a good episode.
 */
export const HEATMAP_PALETTES = {
  brand: {
    label: 'Moviest brand (coral = best)',
    bands: [
      { fill: '#F4536E', text: '#FFFFFF' },
      { fill: '#B5449A', text: '#FFFFFF' },
      { fill: '#6A4FC0', text: '#FFFFFF' },
      { fill: '#3A3580', text: '#E4DCEF' },
      { fill: '#221A33', text: '#9C8DBC' },
    ],
  },
  traffic: {
    label: 'Traffic light (green = best, red = worst)',
    scale: [
      { value: 7.0, fill: '#D7301F' },
      { value: 7.4, fill: '#EC6A2C' },
      { value: 7.8, fill: '#F59A2E' },
      { value: 8.2, fill: '#F9C93A' },
      { value: 8.5, fill: '#E9E54A' },
      { value: 8.8, fill: '#C4E04A' },
      { value: 9.1, fill: '#8ACB4C' },
      { value: 9.4, fill: '#4FB04A' },
      { value: 9.8, fill: '#23893A' },
    ],
    text: '#2A2A2A',
    lightText: '#FFFFFF',
    lightTextBelow: 7.2,
    lightTextAbove: 9.5,
  },
  viridis: {
    label: 'Colour-blind safe (yellow = best, purple = worst)',
    bands: [
      { fill: '#FDE725', text: '#1A1A05' },
      { fill: '#5EC962', text: '#0B1F10' },
      { fill: '#21918C', text: '#FFFFFF' },
      { fill: '#3B528B', text: '#FFFFFF' },
      { fill: '#440154', text: '#D9C6F0' },
    ],
  },
} as const satisfies Record<string, PaletteDef>;

export type HeatmapPalette = keyof typeof HEATMAP_PALETTES;

export const HEATMAP_NO_VOTES = {
  fill: '#16101F',
  border: 'rgba(255, 255, 255, 0.06)',
  text: '#5E5378',
  label: 'Not enough votes',
} as const;
