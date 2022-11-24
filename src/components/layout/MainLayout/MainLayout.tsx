import Link from 'next/link';
import React, { ReactNode } from 'react';

import styles from './MainLayout.module.scss';

interface MainLayoutProp {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProp) => {
  return (
    <div className={styles.container}>
      <>
        <header>
          <Link href="/">
            <h1>flexbox vs grid</h1>
          </Link>
          <hr />
        </header>
        {children}
        <footer>
          <Link href="https://chulakov.com/">Chulakov</Link>
        </footer>
      </>
    </div>
  );
};
