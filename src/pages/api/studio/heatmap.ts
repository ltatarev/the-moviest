import { idParam, studioGet } from '@lib/studio/route';
import { getHeatmap } from '@lib/studio/tmdb';

export default studioGet(async (query) => getHeatmap(idParam(query.id)));
