import type { CityGridProps } from './CityGrid.types';
import styles from './CityGrid.module.scss';

const CityGrid: React.FC<CityGridProps> = ({ children }) => {
  return (
    <ul className={styles.cityGrid} data-testid="city-list">
      {children}
    </ul>
  );
};

export { CityGrid };
