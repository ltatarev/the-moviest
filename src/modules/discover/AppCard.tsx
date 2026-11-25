import { APP_STORE_URL } from '@lib/site';

/**
 * Discover in the app has sections that read your own library. The site has
 * no library, so it says where they are. Name only what the App Store
 * listing names.
 */
export function AppCard() {
  return (
    <div className="relative overflow-hidden rounded-hero border border-white/10 bg-white/[.05] p-7 backdrop-blur-md">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-iris/25 blur-[70px]"
      />
      <p className="relative mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
        <span className="h-[7px] w-[7px] rounded-full bg-accent" />
        In the app
      </p>
      <h2 className="relative font-display text-2xl font-bold tracking-[-.025em]">
        Make this page yours
      </h2>
      <p className="relative mt-3 text-[15px] leading-relaxed text-dim">
        This page shows what everyone watches. Moviest adds what is yours: your
        watchlist for films and TV, what you have seen, and widgets for your
        home screen.
      </p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="relative mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:shadow-glow-strong"
      >
        Get Moviest, free
      </a>
    </div>
  );
}
