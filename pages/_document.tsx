import { Head, Html, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
