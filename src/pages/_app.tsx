/**
 * DO NOT EDIT
 */
import React from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import '@/styles/reset.css';
import '@/styles/globals.css';
import styles from '@/styles/App.module.css';

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
  }),
  cache: new InMemoryCache({}),
});

const montserrat = Montserrat({
  weight: ['300', '500', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <style jsx global>
        {`
          :root {
            --core-typography-font-family-product: ${montserrat.style
              .fontFamily};
          }
        `}
      </style>
      <header className={styles.header}>
        <Link href="/">
          <Image src="/logo.svg" alt="TheFork" width={122} height={24} />
        </Link>
      </header>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <p>
          Made with ❤️ at{' '}
          <a
            href="https://www.thefork.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__logo}
          >
            <Image src="/logo.svg" alt="TheFork" width={122} height={24} />
          </a>
        </p>
      </footer>
    </ApolloProvider>
  );
}
