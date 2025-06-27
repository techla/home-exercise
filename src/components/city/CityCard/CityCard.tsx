import Image from 'next/image';
import Link from 'next/link';

import type { CityCardProps } from './CityCard.types';

import styles from './CityCard.module.scss';

const CityCard: React.FC<CityCardProps> = ({ id, photo, name }) => {
  return (
    <Link 
      href={`/city/${id}`} 
      data-testid={`city-card`} 
      className={styles.cardLink}
      aria-label={`View restaurants in ${name}`}
    >
      <figure className={styles.card}>
        <Image
          src={photo}
          alt={`Photo of ${name} city`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className={styles.image}
          priority
        />
        <figcaption className={styles.caption}>{name}</figcaption>
      </figure>
    </Link>
  );
};
export { CityCard };