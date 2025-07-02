import type { CityGridItemProps } from './CityGridItem.types';
import styles from './CityGridItem.module.scss';

const CityGridItem: React.FC<CityGridItemProps> = (props) => {
  return (
    <li
      {...props}
      className={styles.gridItem}
    />
  );
};

export { CityGridItem };
