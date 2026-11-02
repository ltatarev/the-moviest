import type { AnyTemplate } from '../types';
import { favourites } from './favourites';
import { heatmap } from './heatmap';
import { trending } from './trending';

/** Every template the studio offers, in the order shown on `/studio`. */
export const TEMPLATES: AnyTemplate[] = [favourites, trending, heatmap];

export function getTemplate(id: unknown): AnyTemplate | undefined {
  return TEMPLATES.find((template) => template.id === id);
}
