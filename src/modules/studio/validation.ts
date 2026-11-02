import type { FieldDef, PickedTitle, TemplateDef } from './types';

/**
 * Everything that would make an exported card wrong or show placeholder text.
 * Export stays disabled while this returns anything.
 */
export function validateInput<I extends object, D>(
  template: TemplateDef<I, D>,
  input: I,
): string[] {
  const errors: string[] = [];
  const fields = template.fields as Record<string, FieldDef<I>>;
  const values = input as Record<string, unknown>;

  for (const [key, field] of Object.entries(fields)) {
    if (field.showWhen && !field.showWhen(input)) {
      continue;
    }

    const value = values[key];

    switch (field.kind) {
      case 'text':
      case 'multiline': {
        const text = typeof value === 'string' ? value.trim() : '';

        if (!text && !field.optional) {
          errors.push(`${field.label} is empty`);
        }

        if (field.max && text.length > field.max) {
          errors.push(`${field.label} is longer than ${field.max} characters`);
        }

        break;
      }
      case 'titles': {
        const count = Array.isArray(value) ? value.length : 0;

        if (count < field.min) {
          errors.push(`${field.label}: pick at least ${field.min}`);
        } else if (count > field.max) {
          errors.push(`${field.label}: at most ${field.max}`);
        }

        break;
      }
      case 'title':
        if (!value) {
          errors.push(`${field.label}: pick a title`);
        }

        break;
      case 'number':
        if (
          typeof value !== 'number' ||
          Number.isNaN(value) ||
          value < field.min ||
          value > field.max
        ) {
          errors.push(`${field.label} must be ${field.min}–${field.max}`);
        }

        break;
      case 'month':
        if (
          typeof value !== 'string' ||
          !/^\d{4}-(0[1-9]|1[0-2])$/.test(value)
        ) {
          errors.push(`${field.label}: pick a month`);
        }

        break;
      case 'select':
        if (!field.options.some((option) => option.value === value)) {
          errors.push(`${field.label}: pick an option`);
        }

        break;
    }
  }

  return [...errors, ...(template.validate?.(input) ?? [])];
}

export function isPickedTitle(value: unknown): value is PickedTitle {
  const title = value as PickedTitle;

  return (
    typeof title === 'object' &&
    title !== null &&
    Number.isInteger(title.id) &&
    (title.media === 'movie' || title.media === 'tv') &&
    typeof title.title === 'string'
  );
}
