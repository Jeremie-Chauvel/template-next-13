import '@/styles/globals.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  void import('@axe-core/react').then(({ default: reactAxe }) => {
    const ACCESSIBILITY_CHECK_DELAY = 1000;

    return reactAxe(React, ReactDOM, ACCESSIBILITY_CHECK_DELAY);
  });
}

// https://nextjs.org/docs/basic-features/font-optimization
const inter = Inter({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
