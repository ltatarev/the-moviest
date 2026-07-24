import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

type NavLinkProps = {
  title: string;
  route: string;
  /** Stacked full-width links inside the mobile drawer. */
  block?: boolean;
  onClick?: () => void;
};

type Route = {
  route: string;
};

function isRouteActive(link: string, router: Route) {
  if (link === '/') {
    return router.route === '/' && link === '/';
  }

  return router.route.match(link);
}

export function NavLink({
  title,
  route,
  block = false,
  onClick,
}: NavLinkProps) {
  const router = useRouter();
  const isActive = isRouteActive(route, router);

  const classNames = cn(
    'group/link relative text-sm transition-all duration-200 ease-silk',
    'hover:text-chalk',
    block
      ? 'flex w-full items-center rounded-2xl border border-white/5 px-5 py-3.5 text-base font-medium'
      : 'rounded-full px-[18px] py-[9px] font-medium',
    isActive
      ? 'bg-white/[.13] font-semibold text-chalk'
      : 'text-dim hover:bg-white/[.06]',
  );

  return (
    <Link href={route} className={classNames} onClick={onClick}>
      {title}
      {/* Underline that grows out from the centre on hover. */}
      {!isActive && (
        <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-accent-soft/70 transition-transform duration-300 ease-silk group-hover/link:scale-x-100" />
      )}
    </Link>
  );
}
