import { Reveal } from './Reveal';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/** Masthead for the pages that open on a list rather than a hero. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Reveal as="header" className="pt-6 sm:pt-10">
      <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
        <span className="h-[7px] w-[7px] rounded-full bg-accent" />
        {eyebrow}
      </p>

      <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-.035em] sm:text-5xl lg:text-[58px]">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-dim">
          {description}
        </p>
      )}
    </Reveal>
  );
}
