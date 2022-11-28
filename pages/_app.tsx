import "../styles/globals.css";
import { DM_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dmSans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
