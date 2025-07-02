
import Image from 'next/image';

import { Button } from '../../ui/Button/Button';
import RestaurantLink from '../RestaurantLink';
import { RestaurantDetails } from './RestaurantDetails/RestaurantDetails';
import { RestaurantRating } from './RestaurantRating/RestaurantRating';
import type { RestaurantCardProps } from './RestaurantCard.types';

import styles from './RestaurantCard.module.scss';

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, slug, name, photo, address, averagePrice, aggregateRatings, offer }) => {
  const showRating = aggregateRatings?.ratingValue || aggregateRatings?.reviewCount;
  const buttonLabel = `Book${offer ? ` • Up to ${offer}` : ''}`;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: averagePrice.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(averagePrice.amount/100);
  
  const fullAddress = `${address.street}, ${address.postalCode} ${address.locality}`;
  
  const fullDescription = [
    `Restaurant ${name}`,
    `located at ${fullAddress}`,
    `${formattedPrice} average price`,
    aggregateRatings?.ratingValue && `rated ${aggregateRatings.ratingValue} out of 10 stars`,
    aggregateRatings?.reviewCount && `based on ${aggregateRatings.reviewCount} reviews`,
    offer && `special offer up to ${offer}`
  ].filter(Boolean)
   .join(', ');

  return (
    <RestaurantLink 
      restaurantID={id} 
      restaurantSlug={slug} 
      data-cy="restaurant-card"
      aria-label={fullDescription}
    >
      <article
        itemScope
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
            className={styles.button}
            tabIndex={-1}
            aria-hidden="true"
          >
            {buttonLabel}
          </Button>
        </div>
      </article>
    </RestaurantLink>
  );
};
export { RestaurantCard };