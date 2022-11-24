import styles from './Home.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export const Home = () => {
  return (
    <>
      <Head>
        <title>flexbox vs grid</title>
        <meta name="description" content="Demo for flex vs grid speech" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <Link href="/flexbox" className={styles.card}>
          <h2>Flexbox base &rarr;</h2>
          <p>Detailed analysis flexbox</p>
        </Link>
      </main>
    </>
  );
};
