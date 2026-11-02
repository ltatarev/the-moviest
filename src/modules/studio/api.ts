import type {
  HeatmapData,
  MediaType,
  Region,
  SearchResult,
  TitleDetails,
  TrendingItem,
  TrendingSource,
} from '@lib/studio/types';

/** Client-side calls to the studio API routes. */

export class StudioApiError extends Error {}

async function getJson<T>(
  path: string,
  params: Record<string, string>,
): Promise<T> {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${path}?${query}`, {
    credentials: 'same-origin',
  });

  if (response.status === 401) {
    window.location.assign(
      `/studio/login?next=${encodeURIComponent(window.location.pathname)}`,
    );

    throw new StudioApiError('Signed out');
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null);

    throw new StudioApiError(
      body?.error ?? `Request failed (${response.status})`,
    );
  }

  return response.json() as Promise<T>;
}

export function searchTitles(q: string, media: MediaType | 'multi') {
  return getJson<SearchResult[]>('/api/studio/search', { q, media });
}

export function fetchTitle(media: MediaType, id: number, region: Region) {
  return getJson<TitleDetails>('/api/studio/title', {
    media,
    id: String(id),
    region,
  });
}

export function fetchTrending(params: {
  source: TrendingSource;
  region: Region;
  month?: string;
  ids?: number[];
}) {
  const query: Record<string, string> = { region: params.region };

  if (params.ids?.length) {
    query.ids = params.ids.join(',');
  } else {
    query.source = params.source;

    if (params.month) {
      query.month = params.month;
    }
  }

  return getJson<TrendingItem[]>('/api/studio/trending', query);
}

export function fetchHeatmap(id: number) {
  return getJson<HeatmapData>('/api/studio/heatmap', { id: String(id) });
}
