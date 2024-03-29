import { Sort, WatchlistQuery, QueryParams } from './types';

export const DEFAULT_PER_PAGE = 30;

export function formatPageQuery(query: QueryParams) {
  if (query.page) {
    return parseInt(query.page);
  }

  return 0;
}

export function formatSortQuery(query: QueryParams) {
  const params: Sort = {};

  if (query.sort) {
    params['title'] = query.sort;
  }

  return params;
}

export function formatWatchlistQuery(reqQuery: QueryParams) {
  const query: WatchlistQuery = {};

  if (reqQuery.id) {
    query['id'] = reqQuery.id.toString();
  }

  if (reqQuery.authorId) {
    query['author_id'] = reqQuery.authorId.toString();
  }

  if (query.title) {
    query['title'] = { title: { $regex: reqQuery.title, $options: 'i' } };
  }

  const page = formatPageQuery(reqQuery);
  const sort = formatSortQuery(reqQuery);

  return { query, page, sort };
}
