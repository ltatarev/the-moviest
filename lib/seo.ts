import { SITE_URL } from './site';
import type { TitleDetailType } from './types';
import { getDefaultStreamNames } from './watch';

/** Search engines cut a meta description at about this many characters. */
export const DESCRIPTION_LIMIT = 160;

/** Makes a site path or an absolute URL into an absolute URL. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

/** Collapses white space and cuts the text at a word boundary. */
export function truncate(text: string, limit = DESCRIPTION_LIMIT): string {
  const clean = text.replace(/\s+/g, ' ').trim();

  if (clean.length <= limit) {
    return clean;
  }

  const cut = clean.slice(0, limit - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const body = lastSpace > limit / 2 ? cut.slice(0, lastSpace) : cut;

  return `${body.replace(/[\s,.;:–—-]+$/, '')}…`;
}

function joinNames(names: Array<string>): string {
  if (names.length <= 1) {
    return names.join('');
  }

  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

/**
 * An answer-first description of a film or a show: what it is, when it came
 * out, who made it and who is in it. The overview fills the rest of the space.
 */
export function getTitleDescription(detail: TitleDetailType): string {
  const kind = detail.type === 'tv' ? 'TV series' : 'film';
  const genre = detail.genres.slice(0, 2).join(' and ').toLowerCase();
  const year = detail.year ? ` (${detail.year})` : '';
  const length = detail.length ? `, ${detail.length}` : '';

  const parts = [
    `${detail.title}${year} is ${genre ? `a ${genre} ${kind}` : `a ${kind}`}${length}.`,
  ];

  const maker = detail.crew.find(
    (credit) => credit.role === 'Director' || credit.role === 'Created by',
  );

  if (maker) {
    const verb = maker.role === 'Director' ? 'Directed' : 'Created';
    parts.push(`${verb} by ${maker.name}.`);
  }

  const stars = detail.cast.slice(0, 3).map((person) => person.name);

  if (stars.length > 0) {
    parts.push(`With ${joinNames(stars)}.`);
  }

  const streams = getDefaultStreamNames(detail.watch).slice(0, 3);

  if (streams.length > 0) {
    parts.push(`Streaming on ${joinNames(streams)} in the US.`);
  }

  // Keep each fact whole: drop a fact that does not fit, cut only the overview.
  const facts = parts.reduce((text, part) =>
    `${text} ${part}`.length <= DESCRIPTION_LIMIT ? `${text} ${part}` : text,
  );

  if (!detail.overview) {
    return facts;
  }

  const room = DESCRIPTION_LIMIT - facts.length - 1;

  return room >= 40 ? `${facts} ${truncate(detail.overview, room)}` : facts;
}
