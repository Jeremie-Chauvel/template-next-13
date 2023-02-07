import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <Head />

      <body>
        <Script strategy="beforeInteractive" id="env-var" src="/__ENV.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
