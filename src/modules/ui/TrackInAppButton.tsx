import { APP_STORE_URL } from '@lib/site';
import cn from 'classnames';
import { Plus } from './Icons';

type TrackInAppButtonProps = {
  /** Solid accent for the main action, glass everywhere else. */
  variant?: 'primary' | 'ghost';
  /** Names the title for screen readers, for example "Track Dune in Moviest". */
  title?: string;
};

/**
 * The way from the site into the app. It always opens the App Store page: a
 * bare `moviest://` link shows an error in Safari when the app is not
 * installed. On a title page the Smart App Banner opens the title in the app.
 */
export function TrackInAppButton({
  variant = 'ghost',
  title,
}: TrackInAppButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={title ? `Track ${title} in Moviest` : 'Track in Moviest'}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 ease-silk hover:-translate-y-0.5',
        variant === 'primary'
          ? 'bg-accent text-white shadow-glow hover:shadow-glow-strong'
          : 'border border-white/20 bg-white/10 text-chalk backdrop-blur-md hover:bg-white/[.18]',
      )}
    >
      <Plus width={18} height={18} />
      Track in Moviest
    </a>
  );
}
