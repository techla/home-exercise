import type { CityGridProps } from './CityGrid.types';
import styles from './CityGrid.module.scss';

const CityGrid: React.FC<CityGridProps> = (props) => {
  return (
    <ul
      {...props}
      className={styles.cityGrid}
      data-cy="city-list"
    />
  );
};

export { CityGrid };
