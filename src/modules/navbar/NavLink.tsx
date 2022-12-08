import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

type NavLinkProps = {
  title: string;
  route: string;
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

export function NavLink({ title, route }: NavLinkProps) {
  const router = useRouter();
  const isActive = isRouteActive(route, router);

  const classNames = cn(
    'px-5 mx-3 py-2 decoration-none font-semibold rounded-lg hover:bg-slate-50 hover:bg-opacity-10',
    {
      'bg-slate-100 bg-opacity-10 hover:bg-opacity-20': isActive,
    }
  );

  return (
    <Link href={route} className={classNames}>
      {title}
    </Link>
  );
}
