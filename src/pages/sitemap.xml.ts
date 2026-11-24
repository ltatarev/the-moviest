import type { GetServerSidePropsContext } from 'next';
import Review from '@lib/models/review';
import Watchlist from '@lib/models/watchlist';
import dbConnect from '@lib/mongo';
import { absoluteUrl } from '@lib/seo';
import { fetchResults, getListEndpoint, getTrendingEndpoint } from '@lib/tmdb';

/** The sitemap changes slowly, so the CDN keeps it for 1 hour. */
const SITEMAP_CACHE =
  'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

/** A sitemap file can hold 50,000 URLs. This keeps it far below that. */
const SAVED_LIMIT = 5000;

const STATIC_PATHS = ['/home', '/discover', '/reviews', '/watchlists'];

type Entry = { path: string; lastModified?: string };

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(entries: Array<Entry>): string {
  const urls = entries
    .map(({ path, lastModified }) => {
      const lastmod = lastModified
        ? `<lastmod>${escapeXml(lastModified)}</lastmod>`
        : '';

      return `<url><loc>${escapeXml(absoluteUrl(path))}</loc>${lastmod}</url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

type SavedItem = { _id: unknown; updatedAt?: Date; createdAt?: Date };

/**
 * Reads the saved pages from the database, not from the public API: the
 * Vercel firewall can challenge a server-to-server request to the domain.
 * A failed query gives an empty list, so the sitemap always renders.
 */
async function fetchSaved(
  resource: 'reviews' | 'watchlists',
): Promise<Array<Entry>> {
  try {
    await dbConnect();
    const model = resource === 'reviews' ? Review : Watchlist;
    const items: Array<SavedItem> = await model
      .find({}, { _id: 1, updatedAt: 1, createdAt: 1 })
      .sort({ updatedAt: -1 })
      .limit(SAVED_LIMIT)
      .lean()
      .exec();

    return items.map((item) => ({
      path: `/${resource}/${String(item._id)}`,
      lastModified: (item.updatedAt ?? item.createdAt)?.toISOString(),
    }));
  } catch (error) {
    console.error(`Sitemap: cannot load ${resource}`, error);

    return [];
  }
}

async function fetchTitles(): Promise<Array<Entry>> {
  const lists = await Promise.all([
    fetchResults(getTrendingEndpoint('movie')),
    fetchResults(getTrendingEndpoint('tv')),
    fetchResults(getListEndpoint('movie', 'now_playing')),
    fetchResults(getListEndpoint('movie', 'top_rated')),
    fetchResults(getListEndpoint('tv', 'popular')),
    fetchResults(getListEndpoint('tv', 'top_rated')),
  ]);
  const kinds = ['movie', 'tv', 'movie', 'movie', 'tv', 'tv'];
  const paths = new Set<string>();

  lists.forEach((list, i) =>
    list.forEach((title) => {
      paths.add(`/${kinds[i]}/${title.id}`);

      if (kinds[i] === 'tv') {
        paths.add(`/tv/${title.id}/episodes`);
      }
    }),
  );

  return [...paths].map((path) => ({ path }));
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const [titles, reviews, watchlists] = await Promise.all([
    fetchTitles(),
    fetchSaved('reviews'),
    fetchSaved('watchlists'),
  ]);

  const entries = [
    ...STATIC_PATHS.map((path) => ({ path })),
    ...titles,
    ...reviews,
    ...watchlists,
  ];

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', SITEMAP_CACHE);
  res.write(buildSitemap(entries));
  res.end();

  return { props: {} };
}

/** The response is written in getServerSideProps. */
export default function Sitemap() {
  return null;
}
