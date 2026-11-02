import { BadRequest, stringParam, studioGet } from '@lib/studio/route';
import { getTrending, getTrendingByIds, monthRange } from '@lib/studio/tmdb';
import { isRegion } from '@lib/studio/types';

export default studioGet(async (query) => {
  const region = stringParam(query.region) ?? 'DE';
  const ids = stringParam(query.ids);

  if (!isRegion(region)) {
    throw new BadRequest('Invalid region');
  }

  if (ids) {
    const parsed = ids.split(',').map(Number);

    if (
      parsed.length > 10 ||
      parsed.some((id) => !Number.isInteger(id) || id <= 0)
    ) {
      throw new BadRequest('Invalid ids');
    }

    return getTrendingByIds(parsed, region);
  }

  const source = stringParam(query.source) ?? 'week';
  const month = stringParam(query.month);

  if (source !== 'week' && source !== 'popular' && source !== 'new') {
    throw new BadRequest('Invalid source');
  }

  if (source === 'new' && !(month && monthRange(month))) {
    throw new BadRequest('Pick a month');
  }

  return getTrending(source, region, month);
});
