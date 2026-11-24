import { APP_PAGE, APP_STORE_URL } from '@lib/site';
import { ArrowRight, Check } from './Icons';

/**
 * Every fact here comes from the App Store listing. Do not add a feature
 * that the listing does not name.
 */
const FACTS = [
  'Films and shows in one watchlist',
  'Home screen widgets',
  'Import from IMDb and Trakt',
  'No ads, no tracking, no algorithmic feed',
];

/** The case for the iOS app, on the front page of the site. */
export function AppPitch() {
  return (
    <div className="relative overflow-hidden rounded-hero border border-white/10 bg-white/[.05] px-6 py-10 backdrop-blur-md sm:px-12 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-iris/25 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-[80px]"
      />

      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            Moviest for iPhone and iPad
          </p>
          <h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-[-.03em] sm:text-[40px]">
            One watchlist for films and TV
          </h2>
          <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-dim">
            This site is for browsing. The app keeps track of what you want to
            watch and what you have seen. It is free.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:shadow-glow-strong"
            >
              Get it on the App Store
            </a>
            <a
              href={APP_PAGE}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors duration-200 ease-silk hover:text-chalk"
            >
              More about the app
              <ArrowRight
                width={15}
                height={15}
                className="transition-transform duration-300 ease-silk group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <ul className="grid gap-3">
          {FACTS.map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 text-[15px] font-medium"
            >
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-accent/15 text-accent-soft">
                <Check width={15} height={15} />
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
