import { Group, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from './NavLink';

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <div className="py-10 w-full">
      <div className="h-16 px-10 text-slate-100">
        <div className="flex place-content-between items-center">
          <Link href="/">
            <Image src="/assets/logo.png" height={50} width={210} alt="" />
          </Link>

          <div className="hidden md:flex flex-1 place-content-center">
            <NavLink title="Discover" route="/discover" />
            <NavLink title="Reviews" route="/reviews" />
            <NavLink title="Watchlists" route="/watchlists" />
          </div>

          <div className="hidden lg:flex">
            <div className="bg-accent-pink text-black rounded-lg mx-5 px-5 py-2 items-center flex hover:cursor-pointer hover:bg-violet-600">
              Log in
            </div>
            <div className="border border-pink-700 text-white rounded-lg mx-5 px-5 py-2 items-center flex hover:cursor-pointer hover:bg-pink-600">
              Sign up
            </div>
          </div>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            color="white"
            className="flex md:hidden items-center"
          />
        </div>
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="The Moviest"
        className="lg:hidden"
        styles={{
          body: {
            fontFamily: 'sans-serif',

            'a:hover': {
              fontWeight: 600,
              backgroundColor: 'whitesmoke',
              backgroundOpacity: '10',
              borderRadius: 20,
            },
          },
        }}
        zIndex={1000000}
        transition="slide-right"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <div className="flex flex-col mb-5">
          <NavLink title="Discover" route="/discover" />
          <NavLink title="Reviews" route="/reviews" />
          <NavLink title="Watchlists" route="/watchlists" />
        </div>
        <Group position="center" grow pb="xl" px="md">
          <div className="bg-accent-pink text-black rounded-lg mx-5 px-5 py-2 items-center flex hover:cursor-pointer hover:bg-violet-600">
            Log in
          </div>
          <div className="border border-pink-700 text-white rounded-lg mx-5 px-5 py-2 items-center flex hover:cursor-pointer hover:bg-pink-600">
            Sign up
          </div>
        </Group>
      </Drawer>
    </div>
  );
}
