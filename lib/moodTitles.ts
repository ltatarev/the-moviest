import { type Mood, moodRequest, toDiscoverParams } from './moods';
import { fetchResults, getDiscoverEndpoint, getListEndpoint } from './tmdb';
import type { ContentType, MovieType } from './types';

/** The region the server renders. See `DEFAULT_WATCH_REGION`. */
const SERVER_REGION = 'US';

/**
 * The titles behind a mood, in one medium. Pages are fetched together and
 * joined; a title that moves between two pages while TMDB updates is kept
 * once. A failed page gives no titles, not an error.
 */
export async function fetchMoodTitles(
  mood: Mood,
  mediaType: ContentType,
  today: Date,
  pages = 1,
): Promise<Array<MovieType>> {
  const numbers = Array.from({ length: pages }, (_, i) => i + 1);
  let lists: Array<Array<MovieType>>;

  if (mood.source.kind === 'cinemas') {
    lists = await Promise.all(
      numbers.map((page) =>
        fetchResults(
          `${getListEndpoint('movie', 'now_playing')}&region=${SERVER_REGION}&page=${page}`,
        ),
      ),
    );
  } else {
    const request = moodRequest(mood, mediaType);

    if (!request) {
      return [];
    }

    lists = await Promise.all(
      numbers.map((page) =>
        fetchResults(
          getDiscoverEndpoint(
            request.mediaType,
            toDiscoverParams(request, today, page),
          ),
        ),
      ),
    );
  }

  const seen = new Set<string>();

  return lists.flat().filter((title) => {
    const key = String(title.id);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}
