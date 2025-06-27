import type { RestaurantGridItemProps } from './RestaurantGridItem.types';
import styles from './RestaurantGridItem.module.scss';

const RestaurantGridItem: React.FC<RestaurantGridItemProps> = ({ children }) => {
  return (
    <li className={styles.gridItem}>
      {children}
    </li>
  );
};

export { RestaurantGridItem };
