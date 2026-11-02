import { BadRequest, idParam, stringParam, studioGet } from '@lib/studio/route';
import { getTitleDetails } from '@lib/studio/tmdb';
import { isRegion } from '@lib/studio/types';

export default studioGet(async (query) => {
  const media = stringParam(query.media);
  const region = stringParam(query.region) ?? 'DE';

  if (media !== 'movie' && media !== 'tv') {
    throw new BadRequest('Invalid media');
  }

  if (!isRegion(region)) {
    throw new BadRequest('Invalid region');
  }

  return getTitleDetails(media, idParam(query.id), region);
});
