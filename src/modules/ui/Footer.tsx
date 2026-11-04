import Link from 'next/link';
import { APP_PAGE } from '@lib/site';
import { Github } from './Github';

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-7 text-[13px] text-dimmer sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <span className="rounded-lg border border-[#01B4E4]/40 px-3 py-1.5 text-[11px] font-semibold tracking-[.06em] text-[#01B4E4] transition-all duration-300 ease-silk hover:border-[#01B4E4] hover:bg-[#01B4E4]/10">
          TMDB
        </span>
        <span>The Moviest — a hobby project. Data by The Movie Database.</span>
        <Link
          href={APP_PAGE}
          className="text-accent-soft transition-colors duration-300 ease-silk hover:text-chalk"
        >
          Track films and shows with the iPhone and iPad app
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link
          href="https://github.com/ltatarev"
          target="_blank"
          rel="noreferrer"
          aria-label="Source on GitHub"
          className="text-dimmer transition-all duration-300 ease-silk hover:-translate-y-0.5 hover:text-chalk"
        >
          <Github className="h-5 w-5" />
        </Link>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
