import type { RegionalData } from '@lib/regional';
import type { ContentType } from '@lib/types';
import {
  isWatchRegion,
  regionInSentence,
  regionName,
  WATCH_REGIONS,
} from '@lib/watch';
import { PosterCard, Rail, Reveal, SectionHeader } from '@modules/ui';
import {
  savePreferredRegion,
  usePreferredRegion,
} from '@modules/ui/watchRegion';
import cn from 'classnames';
import { useEffect, useState } from 'react';

type RegionalSectionsProps = {
  /** The default region, rendered on the server. */
  initial: RegionalData;
};

async function load(
  region: string,
  service: number | null,
  signal: AbortSignal,
): Promise<RegionalData> {
  const params = new URLSearchParams({ region });

  if (service) {
    params.set('service', String(service));
  }

  const response = await fetch(`/api/discover/regional?${params}`, { signal });

  if (!response.ok) {
    throw new Error(`Regional data failed: ${response.status}`);
  }

  return response.json();
}

function RegionSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (region: string) => void;
}) {
  return (
    <label className="flex flex-none items-center gap-2 text-[13px] text-dim">
      <span className="sr-only sm:not-sr-only">Region</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-full border border-white/15 bg-ink px-3.5 py-2 text-[13px] font-semibold text-chalk focus:border-accent-soft focus:outline-none"
      >
        {WATCH_REGIONS.map((code) => (
          <option key={code} value={code}>
            {regionName(code)}
          </option>
        ))}
      </select>
    </label>
  );
}

/**
 * In cinemas and Streaming now. Both depend on the region: the server
 * renders the default one, and the browser loads the viewer's own.
 */
export function RegionalSections({ initial }: RegionalSectionsProps) {
  const preferred = usePreferredRegion();
  const [data, setData] = useState(initial);
  const [wanted, setWanted] = useState<{
    region: string;
    service: number | null;
  } | null>(null);
  // The request that failed last, so a failure is not retried in a loop.
  const [failed, setFailed] = useState<string | null>(null);

  // The viewer's region, once the browser knows it.
  const region = wanted?.region ?? preferred ?? initial.region;
  const service = wanted?.service ?? null;
  const key = `${region}:${service ?? ''}`;
  const stale =
    region !== data.region || (service !== null && service !== data.service);
  const loading = stale && failed !== key;

  useEffect(() => {
    if (!loading) {
      return;
    }

    const controller = new AbortController();

    load(region, service, controller.signal)
      .then((next) => {
        setData(next);
        // The API falls back to the region's first service when the chosen
        // one is not there. Want what came back, or this effect runs again.
        setWanted({ region: next.region, service: next.service });
      })
      .catch((error: unknown) => {
        if ((error as Error).name !== 'AbortError') {
          console.error(error);
          setFailed(key);
        }
      });

    return () => controller.abort();
  }, [loading, region, service, key]);

  function chooseRegion(next: string) {
    if (!isWatchRegion(next)) {
      return;
    }

    savePreferredRegion(next);
    setWanted({ region: next, service: null });
  }

  function chooseService(next: number) {
    setWanted({ region: data.region, service: next });
  }

  const where = regionInSentence(data.region);

  return (
    <div
      aria-busy={loading}
      className={cn(
        'transition-opacity duration-300 ease-silk',
        loading && 'opacity-60',
      )}
    >
      {data.inCinemas.length > 0 && (
        <section className="mt-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-x-6">
            <SectionHeader
              eyebrow="In cinemas"
              title={`Playing now in ${where}`}
            />
            <div className="mb-7">
              <RegionSelect value={data.region} onChange={chooseRegion} />
            </div>
          </Reveal>
          <Rail items={data.inCinemas} type="movie" />
        </section>
      )}

      {data.services.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="On your services"
              title={`Streaming now in ${where}`}
            />
          </Reveal>

          <div
            role="group"
            aria-label="Streaming service"
            className="-mt-2 mb-8 flex flex-wrap gap-2.5"
          >
            {data.services.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === data.service}
                onClick={() => chooseService(item.id)}
                className={cn(
                  'rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-silk',
                  item.id === data.service
                    ? 'border-accent/50 bg-accent/15 text-chalk'
                    : 'border-white/10 bg-white/[.05] text-chalk/90 hover:border-white/20 hover:bg-white/[.1]',
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {data.streaming.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4">
              {data.streaming.map((item) => (
                <PosterCard
                  key={`${item.media_type}-${item.id}`}
                  movie={item}
                  type={(item.media_type as ContentType) ?? 'movie'}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-card border border-white/10 bg-white/[.04] px-6 py-10 text-center text-[15px] text-dim">
              Nothing came back for this service right now.
            </p>
          )}

          <p className="mt-6 text-[12px] text-dimmer">
            Availability from JustWatch, through TMDB. It can change.
          </p>
        </section>
      )}
    </div>
  );
}
