import type { JsonLdObject } from '@lib/jsonLd';
import Head from 'next/head';

/**
 * Escapes the characters that can close the script element or break the
 * page. Reviews and watchlists hold user text, so this is necessary.
 */
export function serializeJsonLd(data: JsonLdObject): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

type JsonLdProps = {
  /** Unique on the page, so next/head keeps each script once. */
  id: string;
  data: JsonLdObject;
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Head>
      <script
        key={`jsonld-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
      />
    </Head>
  );
}
