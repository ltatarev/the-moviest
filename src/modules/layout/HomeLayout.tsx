import React from 'react';

type HomeLayoutProps = {
  children: React.ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="bg-homeBackground bg-fixed h-full bg-cover relative flex place-content-center overflow-auto w-full min-h-screen">
      <div className="container pt-10">{children}</div>
    </div>
  );
}
