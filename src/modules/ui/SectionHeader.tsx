import Link from 'next/link';
import { ArrowRight } from './Icons';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  moreLabel?: string;
  moreHref?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  moreLabel = 'See all',
  moreHref,
}: SectionHeaderProps) {
  return (
    <div className="mb-7 flex items-end justify-between gap-6">
      <div>
        <p className="mb-2 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          {eyebrow}
        </p>
        <h2 className="font-display text-[26px] font-semibold tracking-[-.025em] sm:text-[32px]">
          {title}
        </h2>
      </div>

      {moreHref && (
        <Link
          href={moreHref}
          className="group hidden flex-none items-center gap-1.5 text-[13px] font-semibold text-dim transition-colors duration-200 ease-silk hover:text-accent-soft sm:flex"
        >
          {moreLabel}
          <ArrowRight
            width={15}
            height={15}
            className="transition-transform duration-300 ease-silk group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
