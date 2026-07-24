import { BLUR_DATA_URL, getTileGradient } from '@lib/tmdb';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

type BackdropImageProps = {
  src: string | null;
  /** Seeds the gradient shown when there is no still to fall back on. */
  title: string;
  priority?: boolean;
  className?: string;
};

/** A wide still filling its positioned parent, over a gradient of last resort. */
export function BackdropImage({
  src,
  title,
  priority,
  className,
}: BackdropImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ background: getTileGradient(title) }}
      />

      {Boolean(src) && !failed && (
        <Image
          src={src as string}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          onError={() => setFailed(true)}
          className={cn('object-cover object-top', className)}
        />
      )}
    </>
  );
}
