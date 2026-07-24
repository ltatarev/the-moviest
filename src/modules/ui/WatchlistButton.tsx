import cn from 'classnames';
import { Check, Plus } from './Icons';

type WatchlistButtonProps = {
  saved: boolean;
  onToggle: () => void;
  /** Solid accent for the primary action, glass everywhere else. */
  variant?: 'primary' | 'ghost';
  label?: string;
  savedLabel?: string;
};

/**
 * Controlled watchlist toggle — the plus rotates out as the check rotates in.
 * The caller owns the state because the hero tracks one flag per slide.
 */
export function WatchlistButton({
  saved,
  onToggle,
  variant = 'ghost',
  label = 'Watchlist',
  savedLabel = 'On your list',
}: WatchlistButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={onToggle}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 ease-silk hover:-translate-y-0.5',
        variant === 'primary'
          ? 'bg-accent text-white shadow-glow hover:shadow-glow-strong'
          : 'border border-white/20 bg-white/10 text-chalk backdrop-blur-md hover:bg-white/[.18]',
      )}
    >
      <span className="relative grid h-[18px] w-[18px] place-items-center">
        <Plus
          className={cn(
            'absolute transition-all duration-300 ease-silk',
            saved ? 'rotate-90 scale-0 opacity-0' : 'opacity-100',
          )}
        />
        <Check
          className={cn(
            'absolute transition-all duration-300 ease-silk',
            variant === 'primary' ? 'text-white' : 'text-accent-soft',
            saved ? 'opacity-100' : '-rotate-90 scale-0 opacity-0',
          )}
        />
      </span>
      {saved ? savedLabel : label}
    </button>
  );
}
