import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { APP_STORE_ID } from '@lib/site';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html {...mantineHtmlProps}>
        <Head>
          <ColorSchemeScript />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#0B0716" />
          <meta name="theme-color" content="#0B0716" />
          {/* Safari on iOS shows a banner that opens or installs the app. */}
          <meta name="apple-itunes-app" content={`app-id=${APP_STORE_ID}`} />
        </Head>

        <body className="bg-ink">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
