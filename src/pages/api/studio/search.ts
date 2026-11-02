import { BadRequest, stringParam, studioGet } from '@lib/studio/route';
import { searchTitles } from '@lib/studio/tmdb';

export default studioGet(async (query) => {
  const q = stringParam(query.q)?.trim() ?? '';
  const media = stringParam(query.media) ?? 'multi';

  if (media !== 'movie' && media !== 'tv' && media !== 'multi') {
    throw new BadRequest('Invalid media');
  }

  if (q.length < 2 || q.length > 100) {
    return [];
  }

  return searchTitles(q, media);
});
