import React from 'react';
import Head from 'next/head';
import { Footer } from '@modules/ui';
import { AmbientBackground } from './AmbientBackground';

type HomeLayoutProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
};

export function HomeLayout({ children, hideFooter = false }: HomeLayoutProps) {
  return (
    /* The page fades up from its own background colour, so arriving from the
       splash — which dissolves into that same ink — has no seam in it. */
    <div className="animate-fade-in relative flex min-h-screen w-full flex-col overflow-x-clip bg-ink text-chalk">
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AmbientBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col px-5 pb-16 sm:px-8 lg:px-10">
        {children}
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
}
