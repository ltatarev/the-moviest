import { absoluteUrl, truncate } from '@lib/seo';
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME } from '@lib/site';
import Head from 'next/head';

type SeoProps = {
  /** The page name without the site name. Leave it out on the home page. */
  title?: string;
  description?: string;
  /** The canonical path of the page, for example `/movie/693134`. */
  path: string;
  /** An absolute URL or a site path. */
  image?: string | null;
  type?: 'website' | 'video.movie' | 'video.tv_show' | 'article';
  noIndex?: boolean;
};

/**
 * The title, description, canonical URL and link-preview tags of a page.
 * The `key` props let a page replace the defaults that HomeLayout sets.
 */
export function Seo({
  title,
  description = SITE_DESCRIPTION,
  path,
  image,
  type = 'website',
  noIndex = false,
}: SeoProps) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — browse films and TV shows`;
  const text = truncate(description);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image || DEFAULT_OG_IMAGE);

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={text} />
      <link key="canonical" rel="canonical" href={url} />
      {noIndex && <meta key="robots" name="robots" content="noindex, follow" />}

      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:title" property="og:title" content={title ?? SITE_NAME} />
      <meta key="og:description" property="og:description" content={text} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:image" property="og:image" content={imageUrl} />

      <meta
        key="twitter:card"
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={title ?? SITE_NAME}
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={text}
      />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
    </Head>
  );
}
