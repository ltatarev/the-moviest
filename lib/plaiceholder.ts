import { getPlaiceholder } from 'plaiceholder';

/**
 * plaiceholder v3 takes an image Buffer (not a src string) and no longer
 * returns an `img` object. This helper fetches the remote image, computes the
 * blurred base64 placeholder, and returns it alongside the original src.
 */
export async function getBlurredImage(src: string, size = 64) {
  const arrayBuffer = (await fetch(src).then((res) =>
    res.arrayBuffer(),
  )) as ArrayBuffer;
  const buffer = Buffer.from(arrayBuffer);
  const { base64 } = await getPlaiceholder(buffer, { size });

  return { src, base64 };
}
