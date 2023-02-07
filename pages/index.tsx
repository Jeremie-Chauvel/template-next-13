import Head from 'next/head';

import { env } from '@/services/env';
import styles from '@/styles/Home.module.css';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        Monoprix connect: {env('NEXT_PUBLIC_API_BASE_URL')}
      </main>
    </>
  );
};

export default Home;
