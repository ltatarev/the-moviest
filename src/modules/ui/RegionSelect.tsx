import { regionName, type WatchRegion } from '@lib/watch';
import cn from 'classnames';

import { ChevronDown } from './Icons';

type RegionSelectProps = {
  value: WatchRegion;
  regions: ReadonlyArray<WatchRegion>;
  onChange: (region: string) => void;
  /** Hide the visible "Region" label on small screens. */
  compactLabel?: boolean;
};

/**
 * The region picker for watch data. It keeps the native select for keyboard
 * and screen reader use, and draws its own surface and chevron.
 */
export function RegionSelect({
  value,
  regions,
  onChange,
  compactLabel = false,
}: RegionSelectProps) {
  return (
    <label className="flex flex-none items-center gap-2.5 text-[13px] text-dim">
      <span className={cn(compactLabel && 'sr-only sm:not-sr-only')}>
        Region
      </span>
      <span className="group relative inline-flex items-center">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="cursor-pointer appearance-none rounded-full border border-white/10 bg-white/[.05] py-2 pl-4 pr-9 text-[13px] font-medium text-chalk transition-colors duration-200 ease-silk hover:border-white/20 hover:bg-white/[.1] focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          {regions.map((code) => (
            <option key={code} value={code} className="bg-ink text-chalk">
              {regionName(code)}
            </option>
          ))}
        </select>
        <ChevronDown
          width={14}
          height={14}
          strokeWidth={2}
          className="pointer-events-none absolute right-3.5 text-dim transition-colors duration-200 group-hover:text-chalk"
        />
      </span>
    </label>
  );
}
