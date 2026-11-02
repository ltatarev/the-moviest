import type { AnyTemplate } from './types';

/**
 * Per-template drafts in localStorage (a convenience: may be empty, may
 * throw), plus a post file format so any post can be regenerated later.
 */

const key = (templateId: string) => `moviest-studio:draft:${templateId}`;

/** Defaults overlaid with whatever stored keys still exist in the template. */
export function mergeWithDefaults<I extends object>(
  defaults: I,
  stored: unknown,
): I {
  if (!stored || typeof stored !== 'object') {
    return defaults;
  }

  const merged = { ...defaults } as Record<string, unknown>;

  for (const name of Object.keys(defaults)) {
    const value = (stored as Record<string, unknown>)[name];
    const fallback = (defaults as Record<string, unknown>)[name];

    const sameShape = Array.isArray(fallback)
      ? Array.isArray(value)
      : fallback === null || typeof value === typeof fallback;

    if (value !== undefined && sameShape) {
      merged[name] = value;
    }
  }

  return merged as I;
}

export function loadDraft(template: AnyTemplate) {
  try {
    const raw = window.localStorage.getItem(key(template.id));

    return mergeWithDefaults(template.defaults, raw ? JSON.parse(raw) : null);
  } catch {
    return template.defaults;
  }
}

export function saveDraft(templateId: string, input: unknown) {
  try {
    window.localStorage.setItem(key(templateId), JSON.stringify(input));
  } catch {
    // Private mode or full storage: drafts are a nicety, carry on.
  }
}

export function clearDraft(templateId: string) {
  try {
    window.localStorage.removeItem(key(templateId));
  } catch {
    // ignore
  }
}

export type PostFile = {
  kind: 'moviest-studio-post';
  version: 1;
  template: string;
  input: unknown;
};

export function toPostFile(templateId: string, input: unknown): PostFile {
  return {
    kind: 'moviest-studio-post',
    version: 1,
    template: templateId,
    input,
  };
}

export function parsePostFile(text: string, template: AnyTemplate) {
  const data = JSON.parse(text) as Partial<PostFile>;

  if (data.kind !== 'moviest-studio-post' || data.version !== 1) {
    throw new Error('Not a Moviest Studio post file');
  }

  if (data.template !== template.id) {
    throw new Error(`This post is for the "${data.template}" template`);
  }

  return mergeWithDefaults(template.defaults, data.input);
}
