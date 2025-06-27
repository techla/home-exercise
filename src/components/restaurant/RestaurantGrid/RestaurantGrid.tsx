import type { RestaurantGridProps } from './RestaurantGrid.types';

import styles from './RestaurantGrid.module.scss';

const RestaurantGrid: React.FC<RestaurantGridProps> = ({ children }) => {
  return (
    <ul className={styles.restaurantGrid} data-testid="restaurant-list">
      {children}
    </ul>
  );
};

export { RestaurantGrid };
