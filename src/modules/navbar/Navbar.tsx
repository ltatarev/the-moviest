import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Github } from '@modules/ui/Github';
import { Menu } from '@modules/ui/Icons';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from './NavLink';

const ROUTES = [
  { title: 'Discover', route: '/discover' },
  { title: 'Reviews', route: '/reviews' },
  { title: 'Watchlists', route: '/watchlists' },
];

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  // Condense the bar into a floating glass pill once the page starts moving.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 flex items-center justify-between gap-6 transition-all duration-300 ease-silk',
          scrolled ? 'py-3' : 'py-6',
        )}
      >
        {/* The bar sits inside the centred content column, so its glass has to
            be painted by a separate layer that reaches both viewport edges. */}
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 border-b transition-colors duration-300 ease-silk',
            scrolled
              ? 'border-white/10 bg-ink/70 backdrop-blur-xl'
              : 'border-transparent',
          )}
        />

        <Link
          href="/home"
          aria-label="The Moviest — home"
          className="group flex items-center"
        >
          <Image
            src="/assets/logo.png"
            height={90}
            width={210}
            alt="The Moviest"
            priority
            className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[.05] p-1 backdrop-blur-md md:flex">
          {ROUTES.map((item) => (
            <NavLink key={item.route} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/ltatarev"
            target="_blank"
            rel="noreferrer"
            aria-label="Source on GitHub"
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[.05] text-dim transition-all duration-200 ease-silk hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[.12] hover:text-chalk sm:grid"
          >
            <Github className="h-[18px] w-[18px]" />
          </Link>

          <button
            type="button"
            onClick={toggleDrawer}
            aria-label="Open menu"
            aria-expanded={drawerOpened}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[.05] text-chalk transition-colors duration-200 hover:bg-white/[.12] md:hidden"
          >
            <Menu width={20} height={20} />
          </button>
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="20rem"
        color="white"
        offset={12}
        radius={24}
        padding="lg"
        zIndex={1000000}
        overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
        transitionProps={{
          transition: 'slide-left',
          duration: 260,
          timingFunction: 'cubic-bezier(.2,.7,.3,1)',
        }}
        title={
          <Link
            href="/home"
            onClick={closeDrawer}
            aria-label="The Moviest — home"
            className="flex items-center"
          >
            <Image
              src="/assets/logo.png"
              height={90}
              width={210}
              alt="The Moviest"
              className="h-8 w-auto"
            />
          </Link>
        }
        classNames={{
          content:
            'border border-white/15 bg-white/[.09] text-chalk shadow-[0_30px_80px_-20px_rgba(0,0,0,.85)] backdrop-blur-2xl',
          header: 'bg-transparent text-chalk',
          close:
            'rounded-full text-dim transition-colors duration-200 hover:bg-white/[.12] hover:text-chalk',
        }}
      >
        <nav className="mt-6 flex flex-col gap-2">
          {ROUTES.map((item) => (
            <NavLink key={item.route} {...item} block onClick={closeDrawer} />
          ))}
        </nav>
      </Drawer>
    </>
  );
}
