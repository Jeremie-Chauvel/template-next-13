import Head from 'next/head';

import styles from '@/styles/Home.module.css';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>Monoprix connect</main>
    </>
  );
};

export default Home;
