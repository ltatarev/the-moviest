import React from 'react';

type HomeLayoutProps = {
  children: React.ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="bg-homeBackground bg-fixed h-full bg-cover relative flex flex-col items-center w-full min-h-screen min-w-screen px-10">
      {children}
    </div>
  );
}
