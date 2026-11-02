import type { CSSProperties } from 'react';
import { getTileGradient } from '@lib/tmdb';
import { studioImageUrl } from '@lib/studio/imagePath';

type Size = 'w185' | 'w342' | 'w500' | 'w780' | 'w1280';

/**
 * A TMDB poster through the studio image proxy. With no poster it draws the
 * site's stable per-title gradient instead of a broken image.
 */
export function Poster({
  path,
  seed,
  size = 'w780',
  width,
  height,
  radius,
  style,
}: {
  path: string | null;
  seed: string | number;
  size?: Size;
  width: number | string;
  height: number | string;
  radius: number;
  style?: CSSProperties;
}) {
  const src = studioImageUrl(path, size);
  const box: CSSProperties = {
    width,
    height,
    borderRadius: radius,
    flexShrink: 0,
    overflow: 'hidden',
    ...style,
  };

  if (!src) {
    return (
      <div aria-hidden style={{ ...box, background: getTileGradient(seed) }} />
    );
  }

  return (
    <img
      src={src}
      alt=""
      style={{ ...box, objectFit: 'cover', display: 'block' }}
    />
  );
}
