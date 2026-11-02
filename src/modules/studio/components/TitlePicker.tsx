import { useEffect, useId, useRef, useState } from 'react';
import { studioImageUrl } from '@lib/studio/imagePath';
import type { MediaType, SearchResult } from '@lib/studio/types';
import { searchTitles } from '../api';
import type { PickedTitle } from '../types';
import { buttonClass, inputClass } from './StudioShell';

function toPicked(result: SearchResult): PickedTitle {
  return {
    id: result.id,
    media: result.media,
    title: result.title,
    year: result.year,
    posterPath: result.posterPath,
  };
}

/** Type a name, pick the right TMDB match. */
function TitleSearch({
  media,
  onPick,
  disabled,
}: {
  media: MediaType | 'multi';
  onPick: (title: PickedTitle) => void;
  disabled?: boolean;
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const listId = useId();
  const latest = useRef(0);

  useEffect(() => {
    const q = query.trim();

    if (q.length < 2) {
      return;
    }

    const request = ++latest.current;
    const timer = setTimeout(async () => {
      setStatus('loading');

      try {
        const found = await searchTitles(q, media);

        if (request === latest.current) {
          setResults(found);
          setStatus('idle');
        }
      } catch {
        if (request === latest.current) {
          setStatus('error');
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, media]);

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        disabled={disabled}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={disabled ? 'List is full' : 'Search TMDB…'}
        aria-label="Search TMDB"
        aria-controls={listId}
        className={inputClass}
      />
      {status === 'loading' && (
        <span className="absolute right-3 top-2.5 text-xs text-dim">
          searching…
        </span>
      )}
      {status === 'error' && (
        <p className="mt-1 text-xs text-accent-soft">Search failed.</p>
      )}
      {query.trim().length >= 2 && results.length > 0 && (
        <ul
          id={listId}
          className="absolute z-20 mt-1 max-h-[360px] w-full overflow-auto rounded-lg border border-white/15 bg-[#160f24] p-1 shadow-xl"
        >
          {results.map((result) => {
            const poster = studioImageUrl(result.posterPath, 'w185');

            return (
              <li key={`${result.media}-${result.id}`}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left hover:bg-white/10"
                  onClick={() => {
                    onPick(toPicked(result));
                    setQuery('');
                    setResults([]);
                  }}
                >
                  {poster ? (
                    <img
                      src={poster}
                      alt=""
                      className="h-12 w-8 rounded object-cover"
                    />
                  ) : (
                    <span className="h-12 w-8 rounded bg-white/10" />
                  )}
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">
                      {result.title}
                    </span>
                    <span className="block text-xs text-dim">
                      {[
                        result.media === 'tv' ? 'TV' : 'Film',
                        result.year,
                        result.originalTitle,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function SingleTitlePicker({
  value,
  media,
  onChange,
}: {
  value: PickedTitle | null;
  media: MediaType | 'multi';
  onChange: (value: PickedTitle | null) => void;
}) {
  if (value) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
        <span className="text-sm">
          <strong>{value.title}</strong>{' '}
          <span className="text-dim">{value.year}</span>
        </span>
        <button
          type="button"
          className={buttonClass}
          onClick={() => onChange(null)}
        >
          Change
        </button>
      </div>
    );
  }

  return <TitleSearch media={media} onPick={onChange} />;
}

export function TitleListPicker({
  value,
  media,
  max,
  withNote,
  onChange,
}: {
  value: PickedTitle[];
  media: MediaType | 'multi';
  max: number;
  withNote?: boolean;
  onChange: (value: PickedTitle[]) => void;
}) {
  function move(index: number, delta: number) {
    const next = [...value];
    const [item] = next.splice(index, 1);
    next.splice(index + delta, 0, item);
    onChange(next);
  }

  function update(index: number, patch: Partial<PickedTitle>) {
    onChange(
      value.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <TitleSearch
        media={media}
        disabled={value.length >= max}
        onPick={(title) => {
          if (
            !value.some(
              (item) => item.id === title.id && item.media === title.media,
            )
          ) {
            onChange([...value, title]);
          }
        }}
      />
      {value.length > 0 && (
        <ol className="flex flex-col gap-1.5">
          {value.map((item, index) => (
            <li
              key={`${item.media}-${item.id}`}
              className="rounded-lg border border-white/10 bg-white/[.03] px-2 py-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 text-right text-xs text-dim">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm">
                  <strong>{item.title}</strong>{' '}
                  <span className="text-dim">{item.year}</span>
                </span>
                <button
                  type="button"
                  aria-label={`Move ${item.title} up`}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                  className="h-8 w-8 rounded-md text-dim hover:bg-white/10 disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  aria-label={`Move ${item.title} down`}
                  disabled={index === value.length - 1}
                  onClick={() => move(index, 1)}
                  className="h-8 w-8 rounded-md text-dim hover:bg-white/10 disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  type="button"
                  aria-label={`Remove ${item.title}`}
                  onClick={() => onChange(value.filter((_, i) => i !== index))}
                  className="h-8 w-8 rounded-md text-dim hover:bg-white/10 hover:text-accent-soft"
                >
                  ×
                </button>
              </div>
              {withNote && (
                <input
                  type="text"
                  value={item.note ?? ''}
                  maxLength={160}
                  onChange={(event) =>
                    update(index, { note: event.target.value })
                  }
                  placeholder="Why they love it (optional)"
                  aria-label={`Note for ${item.title}`}
                  className={`${inputClass} mt-1.5 py-1.5 text-sm`}
                />
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
