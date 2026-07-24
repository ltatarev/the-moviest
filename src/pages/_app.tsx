// Import order is load-bearing — see the comment in `layers.css`.
import '../styles/layers.css';
import '@mantine/core/styles.layer.css';
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider forceColorScheme="dark">
      <main className={`${jakarta.variable} ${outfit.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
