import IconChatBubble from '../../../ui/icons/IconChatBubble';
import type { RestaurantRatingProps } from './RestaurantRating.types';

import styles from './RestaurantRating.module.scss';

const RestaurantRating: React.FC<RestaurantRatingProps> = ({
  ratingValue,
  reviewCount,
}) => {
  return (
    <div className={styles.rating}>
      {ratingValue && (
        <strong className={styles.score} itemProp="ratingValue" aria-label={`Rating: ${ratingValue} out of 10`}>
          {ratingValue}
        </strong>
      )}
      {reviewCount && (
        <div itemProp="reviewCount" className={styles.reviewCount} aria-label={`${reviewCount} reviews`}>
          <i aria-hidden="true" className={styles.chatIcon}><IconChatBubble /></i>
          <span className={styles.countNumber}>{(reviewCount).toLocaleString('en-US')}</span>
        </div>
      )}
    </div>
  );
};

export { RestaurantRating };