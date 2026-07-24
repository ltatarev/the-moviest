import Link from 'next/link';
import { Fragment } from 'react';

type Crumb = { label: string; href?: string };

/** Trail above a detail page. The last crumb is the current page, so unlinked. */
export function Breadcrumb({ items }: { items: Array<Crumb> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-white/60">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span className="mx-2.5 text-dimmer">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-200 ease-silk hover:text-accent-soft"
            >
              {item.label}
            </Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
