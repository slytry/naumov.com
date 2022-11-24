import styles from './Flexbox.module.scss';

import Head from 'next/head';
import { ProductCard } from './ProductCard';
import Link from 'next/link';

export const Flexbox = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>flexbox vs grid</title>
        <meta name="description" content="Demo for flex vs grid speech" />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Flexbox base &rarr;</h2>
            <p>Detailed analysis flexbox</p>
          </Link>
        </div>
        <ProductCard />
      </main>
    </div>
  );
};
