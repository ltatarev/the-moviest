import { getInitials } from '@lib/format';
import { getTileGradient } from '@lib/tmdb';
import cn from 'classnames';

type AvatarProps = {
  name: string;
  size?: number;
  className?: string;
};

/**
 * Initials on a gradient. The app has no profile pictures of its own, so this
 * stands in for every author — the gradient is derived from the name, which
 * keeps the same person the same colour everywhere.
 */
export function Avatar({ name, size = 34, className }: AvatarProps) {
  return (
    <span
      aria-hidden
      style={{
        background: getTileGradient(name),
        width: size,
        height: size,
        fontSize: Math.round(size * 0.36),
      }}
      className={cn(
        'grid flex-none place-items-center rounded-full font-display font-semibold text-white/90',
        className,
      )}
    >
      {getInitials(name)}
    </span>
  );
}
