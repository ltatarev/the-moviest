import '../styles/globals.css';
import { DM_Sans, Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dmSans',
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.variable} ${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
