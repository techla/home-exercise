import type { CityGridItemProps } from './CityGridItem.types';
import styles from './CityGridItem.module.scss';

const CityGridItem: React.FC<CityGridItemProps> = ({ position, children }) => {
  const positionClass = `position-${position}`;
  
  return (
    <li className={`${styles.gridItem} ${styles[positionClass]}`}>
      {children}
    </li>
  );
};

export { CityGridItem };
