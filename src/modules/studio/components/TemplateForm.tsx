import type { FieldDef, PickedTitle, TemplateDef } from '../types';
import { inputClass } from './StudioShell';
import { SingleTitlePicker, TitleListPicker } from './TitlePicker';

/** The input form, built from a template's field definitions. */
export function TemplateForm<I extends object, D>({
  template,
  input,
  onChange,
}: {
  template: TemplateDef<I, D>;
  input: I;
  onChange: (next: I) => void;
}) {
  const fields = Object.entries(template.fields) as Array<
    [keyof I & string, FieldDef<I>]
  >;
  const values = input as Record<string, unknown>;

  function set(name: string, value: unknown) {
    onChange({ ...input, [name]: value });
  }

  return (
    <div className="flex flex-col gap-4">
      {fields.map(([name, field]) => {
        if (field.showWhen && !field.showWhen(input)) {
          return null;
        }

        const id = `field-${name}`;
        const value = values[name];

        return (
          <div key={name} className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-semibold">
              {field.label}
            </label>
            {renderControl(id, field, value, (next) => set(name, next))}
            {field.help && <p className="text-xs text-dim">{field.help}</p>}
          </div>
        );
      })}
    </div>
  );
}

function renderControl<I>(
  id: string,
  field: FieldDef<I>,
  value: unknown,
  set: (value: unknown) => void,
) {
  switch (field.kind) {
    case 'text':
      return (
        <input
          id={id}
          type="text"
          value={typeof value === 'string' ? value : ''}
          placeholder={field.placeholder}
          maxLength={field.max ? field.max + 20 : undefined}
          onChange={(event) => set(event.target.value)}
          className={inputClass}
        />
      );
    case 'multiline':
      return (
        <textarea
          id={id}
          rows={3}
          value={typeof value === 'string' ? value : ''}
          placeholder={field.placeholder}
          onChange={(event) => set(event.target.value)}
          className={inputClass}
        />
      );
    case 'select':
      return (
        <select
          id={id}
          value={typeof value === 'string' ? value : ''}
          onChange={(event) => set(event.target.value)}
          className={inputClass}
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value} className="bg-ink">
              {option.label}
            </option>
          ))}
        </select>
      );
    case 'number':
      return (
        <input
          id={id}
          type="number"
          min={field.min}
          max={field.max}
          value={typeof value === 'number' && !Number.isNaN(value) ? value : ''}
          onChange={(event) => set(event.target.valueAsNumber)}
          className={inputClass}
        />
      );
    case 'month':
      return (
        <input
          id={id}
          type="month"
          value={typeof value === 'string' ? value : ''}
          onChange={(event) => set(event.target.value)}
          className={inputClass}
        />
      );
    case 'title':
      return (
        <SingleTitlePicker
          media={field.media}
          value={(value as PickedTitle | null) ?? null}
          onChange={set}
        />
      );
    case 'titles':
      return (
        <TitleListPicker
          media={field.media}
          max={field.max}
          withNote={field.withNote}
          value={Array.isArray(value) ? (value as PickedTitle[]) : []}
          onChange={set}
        />
      );
  }
}
