/** Small pure helpers for card copy. */

export type TextSegment = { text: string; accent: boolean };

/**
 * `"Olivia's *favourite* films"` → plain / accent / plain segments. A single
 * unmatched `*` stays literal. Accent words render italic coral on cards.
 */
export function parseAccent(source: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const pattern = /\*([^*]+)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(source))) {
    if (match.index > last) {
      segments.push({ text: source.slice(last, match.index), accent: false });
    }

    segments.push({ text: match[1], accent: true });
    last = match.index + match[0].length;
  }

  if (last < source.length) {
    segments.push({ text: source.slice(last), accent: false });
  }

  return segments;
}

/** Fills `{name}` placeholders; unknown names are left as written. */
export function fillPlaceholders(
  source: string,
  values: Record<string, string | undefined>,
): string {
  return source.replace(/\{(\w+)\}/g, (whole, name: string) => {
    const value = values[name];

    return value === undefined || value === '' ? whole : value;
  });
}

/** True if any `{placeholder}` is still unfilled. */
export function hasPlaceholder(text: string): boolean {
  return /\{\w+\}/.test(text);
}

/**
 * Font size for a title that should stay on as few lines as possible: up to
 * two steps down from `base` as the text gets longer, then the caller clamps.
 */
export function fitFontSize(
  text: string,
  base: number,
  charsAtBase: number,
): number {
  const length = text.length;

  if (length <= charsAtBase) {
    return base;
  }

  if (length <= charsAtBase * 1.35) {
    return Math.round(base * 0.84);
  }

  return Math.round(base * 0.7);
}

export function slugify(text: string): string {
  return (
    text
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'post'
  );
}

/** `2026-10` → `October 2026`. */
export function monthLabel(month: string): string {
  const [year, monthNumber] = month.split('-').map(Number);

  if (!year || !monthNumber) {
    return month;
  }

  return new Date(Date.UTC(year, monthNumber - 1, 1)).toLocaleString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function currentMonth(now: Date = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}
