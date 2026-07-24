import { BLUR_DATA_URL, getTileGradient } from '@lib/tmdb';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

type PosterImageProps = {
  /** Fully resolved image URL, or null when there is nothing to show. */
  src: string | null;
  /** Also seeds the fallback gradient, so one title keeps one colour. */
  title: string;
  sizes: string;
  priority?: boolean;
  /** Prints the title over the fallback. Off for tiles too small to read. */
  label?: boolean;
  imageClassName?: string;
};

/**
 * Fills its (positioned) parent with a poster, over a gradient keyed to the
 * title. The gradient is not just for missing paths: posters saved years ago
 * point at files TMDB has since deleted, so the image also steps aside when it
 * fails to load and leaves a deliberate-looking placeholder behind.
 */
export function PosterImage({
  src,
  title,
  sizes,
  priority,
  label = true,
  imageClassName,
}: PosterImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <>
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ background: getTileGradient(title) }}
      />

      {showImage && (
        <Image
          src={src as string}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          onError={() => setFailed(true)}
          className={cn('object-cover', imageClassName)}
        />
      )}

      {!showImage && label && (
        <b className="absolute inset-x-4 bottom-4 font-display text-lg font-bold leading-tight tracking-[-.02em] text-white/90 drop-shadow-text">
          {title}
        </b>
      )}
    </>
  );
}
