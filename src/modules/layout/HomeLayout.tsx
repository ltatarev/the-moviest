import React from 'react';
import Head from 'next/head';
import { Footer } from '@modules/ui';

type HomeLayoutProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
};

export function HomeLayout({ children, hideFooter = false }: HomeLayoutProps) {
  return (
    <div className="bg-homeBackground bg-fixed h-full bg-cover relative flex flex-col items-center w-full min-h-screen min-w-screen px-10">
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col container">
        {children}
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
}
