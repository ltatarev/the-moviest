import { ArrowRight, ChevronDown } from '@modules/ui/Icons';
import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

/** How long the splash takes to dissolve into the page background. */
const EXIT_MS = 420;
/**
 * The route swap is kicked off part-way through the fade rather than after it:
 * /home is server-rendered, so its data fetch overlaps the tail of the fade and
 * the two finish at roughly the same moment.
 */
const HANDOFF_MS = 260;

/** Ignore trackpad drift and inertia — only a deliberate push down counts. */
const WHEEL_THRESHOLD = 6;
const SWIPE_THRESHOLD = 40;

const SCROLL_KEYS = ['ArrowDown', 'PageDown', ' ', 'Spacebar'];

export default function Landing() {
  const router = useRouter();
  const video = useRef<HTMLVideoElement>(null);
  const [exiting, setExiting] = useState(false);
  // A ref, not the state, guards the handler: state updates land too late to
  // stop the second wheel event of the same gesture.
  const leaving = useRef(false);

  // The clip is decoration; hold it still for anyone who asked for less motion.
  useEffect(() => {
    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced) {
      video.current?.pause();
    }
  }, []);

  // Warm the bundle so the handoff is waiting on data, not JavaScript.
  useEffect(() => {
    router.prefetch('/home');
  }, [router]);

  const enter = useCallback(() => {
    if (leaving.current) {
      return;
    }

    leaving.current = true;

    const reduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced) {
      router.push('/home');

      return;
    }

    setExiting(true);
    window.setTimeout(() => router.push('/home'), HANDOFF_MS);
  }, [router]);

  // There is nothing to scroll here, so the intent to scroll is the trigger.
  useEffect(() => {
    let touchStart = 0;

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > WHEEL_THRESHOLD) {
        enter();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      // Leave the keys alone while a link or button has focus — space belongs
      // to whatever is focused, not to the page.
      if (event.target !== document.body) {
        return;
      }

      if (SCROLL_KEYS.includes(event.key)) {
        enter();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStart = event.touches[0].clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStart - event.touches[0].clientY > SWIPE_THRESHOLD) {
        enter();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [enter]);

  return (
    /* Fading the whole splash out reveals the body, which is already the page
       background the next route paints on — so the handoff has nothing to
       flash through. */
    <div
      style={{ transitionDuration: `${EXIT_MS}ms` }}
      className={cn(
        'relative flex min-h-screen w-full flex-col overflow-hidden bg-ink text-chalk transition-opacity ease-silk',
        exiting && 'opacity-0',
      )}
    >
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        ref={video}
        autoPlay
        muted
        playsInline
        loop
        poster="/assets/00.png"
        aria-hidden
        style={{ transitionDuration: `${EXIT_MS}ms` }}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-transform ease-silk',
          exiting && 'scale-105',
        )}
      >
        <source src="/assets/bg.webm" type="video/webm" />
      </video>

      {/* Scrims: bottom-up so the copy holds, left-to-right for the text column. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent"
      />
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 opacity-[.04]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-1 flex-col px-5 pb-10 sm:px-8 lg:px-10">
        <header className="py-6">
          <Image
            src="/assets/logo.png"
            height={90}
            width={210}
            alt="The Moviest"
            priority
            className="h-10 w-auto"
          />
        </header>

        <main className="flex flex-1 flex-col justify-center py-14">
          <p
            className="animate-fade-up mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft"
            style={{ animationDelay: '80ms' }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            Films, shows and the people who love them
          </p>

          <h1
            className="animate-fade-up max-w-[900px] font-display text-[44px] font-bold leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-[84px]"
            style={{ animationDelay: '140ms' }}
          >
            Everything you meant to watch.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-[540px] text-base leading-relaxed text-white/75"
            style={{ animationDelay: '200ms' }}
          >
            What is trending this week, what is still on in cinemas, and the
            lists other people have already done the work on.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: '260ms' }}
          >
            {/* Still a real link — middle-click and "open in new tab" keep
                working — but a plain click takes the same exit as scrolling. */}
            <Link
              href="/home"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey) {
                  return;
                }

                event.preventDefault();
                enter();
              }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:shadow-glow-strong"
            >
              Explore
              <ArrowRight className="transition-transform duration-300 ease-silk group-hover:translate-x-1" />
            </Link>

            <Link
              href="/watchlists"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-chalk backdrop-blur-md transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:bg-white/[.18]"
            >
              Browse watchlists
            </Link>
          </div>
        </main>

        {/* Also a button: the gesture is invisible otherwise, and a pointer
            device with no wheel has to have something to aim at. */}
        <button
          type="button"
          onClick={enter}
          className="animate-fade-up group mx-auto mb-10 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-dim transition-colors duration-200 ease-silk hover:text-chalk"
          style={{ animationDelay: '340ms' }}
        >
          Scroll to enter
          <ChevronDown
            width={20}
            height={20}
            className="animate-bounce text-accent-soft"
          />
        </button>

        <footer className="flex flex-wrap items-center gap-4 text-[13px] text-dimmer">
          <span className="rounded-lg border border-[#01B4E4]/40 px-3 py-1.5 text-[11px] font-semibold tracking-[.06em] text-[#01B4E4]">
            TMDB
          </span>
          <span>
            The Moviest — a hobby project. Data by The Movie Database.
          </span>
        </footer>
      </div>
    </div>
  );
}
