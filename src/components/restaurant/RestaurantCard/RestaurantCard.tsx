
import Image from 'next/image';

import { Button } from '../../ui/Button/Button';
import RestaurantLink from '../RestaurantLink';
import { RestaurantDetails } from './RestaurantDetails/RestaurantDetails';
import { RestaurantRating } from './RestaurantRating/RestaurantRating';
import type { RestaurantCardProps } from './RestaurantCard.types';

import styles from './RestaurantCard.module.scss';

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, slug, name, photo, address, averagePrice, aggregateRatings, offer }) => {
  const showRating = aggregateRatings?.ratingValue || aggregateRatings?.reviewCount;
  const buttonLabel = `Book${offer ? ` • Up to -${offer}%` : ''}`;
  const nameId = `restaurant-name-${id}`;
  
  return (
    <RestaurantLink restaurantID={id} restaurantSlug={slug} data-testid="restaurant-card">
      <article
        itemScope
        itemType="https://schema.org/Restaurant"
        aria-labelledby={nameId}
        className={styles.card}
      >
        <div className={styles.image}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            src={photo}
            alt={`Interior view of ${name} restaurant`}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.infos}>
            <RestaurantDetails {...{ id, name, address, averagePrice }} />
            {showRating && <RestaurantRating {...aggregateRatings} />}
          </div>
          <Button
            label={buttonLabel}
            className={styles.button}
          />
        </div>
      </article>
    </RestaurantLink>
  );
};
export { RestaurantCard };