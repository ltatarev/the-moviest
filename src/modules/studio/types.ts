import type { ReactElement } from 'react';
import type { MediaType } from '@lib/studio/types';

/** A title as chosen in the picker; everything else is fetched in `resolve`. */
export type PickedTitle = {
  id: number;
  media: MediaType;
  title: string;
  year: string | null;
  posterPath: string | null;
  note?: string;
};

type FieldBase<I> = {
  label: string;
  help?: string;
  /** Hide the field (and skip its validation) unless this returns true. */
  showWhen?: (input: I) => boolean;
};

export type FieldDef<I> = FieldBase<I> &
  (
    | { kind: 'text'; placeholder?: string; max?: number; optional?: boolean }
    | {
        kind: 'multiline';
        placeholder?: string;
        max?: number;
        optional?: boolean;
      }
    | {
        kind: 'titles';
        media: MediaType | 'multi';
        min: number;
        max: number;
        withNote?: boolean;
      }
    | { kind: 'title'; media: MediaType | 'multi' }
    | { kind: 'select'; options: Array<{ value: string; label: string }> }
    | { kind: 'number'; min: number; max: number }
    | { kind: 'month' }
  );

export type SlideDef = {
  key: string;
  label: string;
  element: ReactElement;
};

export type TemplateDef<I extends object, D> = {
  id: string;
  name: string;
  description: string;
  fields: { [K in keyof I]: FieldDef<I> };
  defaults: I;
  /** Extra checks beyond what the field definitions already enforce. */
  validate?: (input: I) => string[];
  /**
   * The part of the input that decides what `resolve` fetches. When it
   * changes, the fetched data is stale; copy edits alone re-render live.
   */
  dataKey: (input: I) => string;
  resolve: (input: I) => Promise<D>;
  slides: (input: I, data: D) => SlideDef[];
  /** Used in file names: `{templateId}-{slug}-{nn}.png`. */
  slug: (input: I, data: D) => string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyTemplate = TemplateDef<any, any>;
