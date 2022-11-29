import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function HomeLayout({ children }: Props) {
  return (
    <div className="bg-homeBackground bg-fixed h-full bg-cover relative flex place-content-center overflow-auto w-full min-h-screen">
      <div className="container pt-10">{children}</div>
    </div>
  );
}
