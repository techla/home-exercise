import type { RestaurantGridItemProps } from './RestaurantGridItem.types';
import styles from './RestaurantGridItem.module.scss';

const RestaurantGridItem: React.FC<RestaurantGridItemProps> = (props) => {
  return (
    <li
      {...props}
      className={styles.gridItem}
    />
  );
};

export { RestaurantGridItem };
