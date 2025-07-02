import type { RestaurantGridProps } from './RestaurantGrid.types';

import styles from './RestaurantGrid.module.scss';

const RestaurantGrid: React.FC<RestaurantGridProps> = (props) => {
  return (
    <ul
    {...props}
      className={styles.restaurantGrid}
    />
  );
};

export { RestaurantGrid };
