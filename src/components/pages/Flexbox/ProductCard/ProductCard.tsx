import { useProducts } from 'lib/api';
import Image from 'next/image';

import styles from './ProductCard.module.scss';

export function ProductCard() {
  const { data } = useProducts();

  return (
    <ul className={styles.cardsBlock}>
      {data?.products?.map(({ id, title, images, description }) => (
        <li className={styles.card} key={id}>
          <h3 className={styles.title}>{title}</h3>
          <Image src={images[0]} width="300" height="300" alt={title} className={styles.image} />
          <p className={styles.text}>{description}</p>
        </li>
      ))}
    </ul>
  );
}
