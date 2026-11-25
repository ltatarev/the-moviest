import { isWatchRegion, type WatchRegion } from '@lib/watch';
import { useSyncExternalStore } from 'react';

/**
 * The viewer's watch region, shared by the title page and Discover. One
 * setting controls the whole site.
 */
const STORAGE_KEY = 'moviest.watchRegion';
const EVENT = 'moviest:watch-region';

/** The saved region, else the region of the browser language, else null. */
function readPreferredRegion(): WatchRegion | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (isWatchRegion(saved)) {
      return saved;
    }
  } catch {
    // Storage can be blocked. The browser language still works.
  }

  for (const language of navigator.languages ?? [navigator.language]) {
    const region = language.split('-')[1]?.toUpperCase();

    if (isWatchRegion(region)) {
      return region;
    }
  }

  return null;
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);

  return () => window.removeEventListener(EVENT, onChange);
}

/**
 * Null on the server and in the first browser render, so hydration matches.
 * Then the saved or language region.
 */
export function usePreferredRegion(): WatchRegion | null {
  return useSyncExternalStore(subscribe, readPreferredRegion, () => null);
}

export function savePreferredRegion(region: WatchRegion): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, region);
  } catch {
    // The choice then lasts for this page only.
  }

  window.dispatchEvent(new Event(EVENT));
}
