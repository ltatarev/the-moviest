import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';
import { SlidePreview } from '@modules/studio/components/SlidePreview';
import {
  buttonClass,
  primaryButtonClass,
  StudioShell,
} from '@modules/studio/components/StudioShell';
import { TemplateForm } from '@modules/studio/components/TemplateForm';
import {
  clearDraft,
  loadDraft,
  parsePostFile,
  saveDraft,
  toPostFile,
} from '@modules/studio/drafts';
import {
  downloadBlob,
  pngFileName,
  renderCardPng,
  zipPngs,
} from '@modules/studio/export';
import { getTemplate } from '@modules/studio/templates';
import type { AnyTemplate, SlideDef } from '@modules/studio/types';
import { validateInput } from '@modules/studio/validation';

const PREVIEW_SCALE = 0.3;

type Fetched = { key: string; data: unknown };

function Editor({ template }: { template: AnyTemplate }) {
  // The editor only renders client-side (after the router is ready), so the
  // localStorage draft can be read during the first render.
  const [input, setInput] = useState<object>(() => loadDraft(template));
  const [fetched, setFetched] = useState<Fetched | null>(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [exporting, setExporting] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);
  const cards = useRef(new Map<string, HTMLDivElement>());
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => saveDraft(template.id, input), 400);

    return () => clearTimeout(timer);
  }, [input, template.id]);

  const errors = useMemo(
    () => validateInput(template, input),
    [template, input],
  );
  const dataKey = template.dataKey(input);
  const isStale = fetched !== null && fetched.key !== dataKey;

  const slides: SlideDef[] = useMemo(() => {
    if (!fetched || isStale) {
      return [];
    }

    try {
      return template.slides(input, fetched.data);
    } catch (error) {
      console.error(error);

      return [];
    }
  }, [template, input, fetched, isStale]);

  const slug =
    fetched && !isStale ? template.slug(input, fetched.data) : 'post';
  const canExport = slides.length > 0 && errors.length === 0 && !exporting;

  async function fetchData() {
    setFetching(true);
    setFetchError(null);

    try {
      const key = template.dataKey(input);
      const data = await template.resolve(input);
      setFetched({ key, data });
    } catch (error) {
      setFetchError(error instanceof Error ? error.message : 'Fetching failed');
    } finally {
      setFetching(false);
    }
  }

  const exportSlides = useCallback(
    async (which: SlideDef[]) => {
      const files: Array<{ name: string; blob: Blob }> = [];

      for (const slide of which) {
        const node = cards.current.get(slide.key);

        if (!node) {
          throw new Error(`Slide "${slide.label}" is not on screen`);
        }

        files.push({
          name: pngFileName(template.id, slug, slides.indexOf(slide)),
          blob: await renderCardPng(node),
        });
      }

      return files;
    },
    [slides, slug, template.id],
  );

  async function exportOne(slide: SlideDef) {
    setExporting(slide.key);
    setExportError(null);

    try {
      const [file] = await exportSlides([slide]);
      downloadBlob(file.blob, file.name);
    } catch (error) {
      setExportError(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setExporting(null);
    }
  }

  async function exportAll() {
    setExporting('all');
    setExportError(null);

    try {
      const files = await exportSlides(slides);

      if (files.length === 1) {
        downloadBlob(files[0].blob, files[0].name);
      } else {
        downloadBlob(await zipPngs(files), `${template.id}-${slug}.zip`);
      }
    } catch (error) {
      setExportError(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setExporting(null);
    }
  }

  function savePostFile() {
    const blob = new Blob(
      [JSON.stringify(toPostFile(template.id, input), null, 2)],
      {
        type: 'application/json',
      },
    );
    downloadBlob(blob, `${template.id}-${slug}.json`);
  }

  async function openPostFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    try {
      setInput(parsePostFile(await file.text(), template));
      setFetched(null);
    } catch (error) {
      setFetchError(
        error instanceof Error ? error.message : 'Could not read that file',
      );
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(320px,400px)_minmax(0,1fr)]">
      <section className="flex flex-col gap-5" aria-label="Inputs">
        <div>
          <Link href="/studio" className="text-sm text-dim hover:text-chalk">
            ← Templates
          </Link>
          <h1 className="mt-2 font-display text-2xl font-bold">
            {template.name}
          </h1>
          <p className="text-sm text-dim">{template.description}</p>
        </div>

        <TemplateForm template={template} input={input} onChange={setInput} />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={fetchData}
            disabled={fetching}
            className={primaryButtonClass}
          >
            {fetching ? 'Fetching…' : fetched ? 'Fetch again' : 'Fetch data'}
          </button>
          <button type="button" onClick={savePostFile} className={buttonClass}>
            Save post file
          </button>
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className={buttonClass}
          >
            Open post file
          </button>
          <button
            type="button"
            onClick={() => {
              clearDraft(template.id);
              setInput(template.defaults);
              setFetched(null);
            }}
            className={buttonClass}
          >
            Reset
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={openPostFile}
            aria-label="Open post file"
          />
        </div>

        {fetchError && (
          <p role="alert" className="text-sm text-accent-soft">
            {fetchError}
          </p>
        )}
        {errors.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-dim">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </section>

      <section
        className="flex min-w-0 flex-col gap-4 self-start lg:sticky lg:top-4"
        aria-label="Slides"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">
            Slides{' '}
            {slides.length > 0 && (
              <span className="text-dim">({slides.length})</span>
            )}
          </h2>
          <button
            type="button"
            onClick={exportAll}
            disabled={!canExport}
            className={primaryButtonClass}
          >
            {exporting === 'all'
              ? 'Exporting…'
              : slides.length > 1
                ? 'Download all (.zip)'
                : 'Download PNG'}
          </button>
        </div>
        {isStale && (
          <p className="text-sm text-accent-soft">
            The titles or settings changed since the last fetch. Fetch again to
            update the slides.
          </p>
        )}
        {!fetched && (
          <p className="text-sm text-dim">
            Fill in the inputs, then fetch data to see the slides.
          </p>
        )}
        {fetched && !isStale && slides.length === 0 && (
          <p className="text-sm text-dim">Nothing to show for this input.</p>
        )}
        {exportError && (
          <p role="alert" className="text-sm text-accent-soft">
            {exportError}
          </p>
        )}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {slides.map((slide) => (
            <SlidePreview
              key={slide.key}
              element={slide.element}
              label={slide.label}
              scale={PREVIEW_SCALE}
              exporting={exporting === slide.key}
              disabled={!canExport}
              onExport={() => exportOne(slide)}
              cardRef={(node) => {
                if (node) {
                  cards.current.set(slide.key, node);
                } else {
                  cards.current.delete(slide.key);
                }
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function StudioTemplatePage() {
  const router = useRouter();
  const template = router.isReady
    ? getTemplate(router.query.templateId)
    : undefined;

  return (
    <StudioShell title={template?.name ?? 'Template'}>
      {!router.isReady ? null : template ? (
        <Editor key={template.id} template={template} />
      ) : (
        <p className="text-dim">
          No template called “{String(router.query.templateId)}”.{' '}
          <Link href="/studio" className="underline">
            Back to templates
          </Link>
        </p>
      )}
    </StudioShell>
  );
}
