import type { RestaurantDetailsProps } from './RestaurantDetails.types';

import styles from './RestaurantDetails.module.scss';

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  id,
  name,
  address,
  averagePrice,
}) => {
  const nameId = `restaurant-name-${id}`;
  const formatedAmount = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: averagePrice.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(averagePrice.amount/100);

  return (
    <div>
      <h2 id={nameId} className={styles.name}>{name}</h2>
      <address className={styles.address}>{address.street} {address.postalCode} {address.locality}</address>
      <p className={styles.price}>{`${formatedAmount} average price`}</p>
    </div>
  );
};

export { RestaurantDetails };