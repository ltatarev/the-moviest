import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, type ReactNode } from 'react';
import { studioFontVariables } from '../fonts';

/** Chrome for studio pages: no site navbar, footer or ambient background. */
export function StudioShell({
  title,
  children,
  showLogout = true,
}: {
  title: string;
  children: ReactNode;
  showLogout?: boolean;
}) {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  async function logout() {
    setSigningOut(true);
    await fetch('/api/studio/logout', { method: 'POST' }).catch(() => null);
    await router.replace('/studio/login');
  }

  return (
    <div className={`${studioFontVariables} min-h-screen bg-ink text-chalk`}>
      <Head>
        <title>{`${title} · Moviest Studio`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
        <Link
          href="/studio"
          className="font-display text-lg font-bold tracking-tight"
        >
          moviest <span className="text-dim">studio</span>
        </Link>
        {showLogout && (
          <button
            type="button"
            onClick={logout}
            disabled={signingOut}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-dim hover:text-chalk disabled:opacity-50"
          >
            {signingOut ? 'Signing out…' : 'Sign out'}
          </button>
        )}
      </header>
      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6">
        {children}
      </div>
    </div>
  );
}

export const inputClass =
  'w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[15px] text-chalk placeholder:text-dimmer focus:border-accent-soft focus:outline-none';

export const buttonClass =
  'rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-chalk hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40';

export const primaryButtonClass =
  'rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40';
