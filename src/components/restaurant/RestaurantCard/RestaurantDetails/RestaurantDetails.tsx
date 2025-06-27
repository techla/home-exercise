import type { RestaurantDetailsProps } from './RestaurantDetails.types';

import styles from './RestaurantDetails.module.scss';

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  id,
  name,
  address,
  averagePrice,
}) => {
  const nameId = `restaurant-name-${id}`;
  
  return (
    <div>
      <h2 id={nameId} className={styles.name}>{name}</h2>
      <address className={styles.address}>{address.street} {address.postalCode} {address.locality}</address>
      <p className={styles.price}>{averagePrice.amount} {averagePrice.currency}</p>
    </div>
  );
};

export { RestaurantDetails };