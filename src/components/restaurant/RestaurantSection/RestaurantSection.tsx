import { RestaurantGrid } from '../RestaurantGrid/RestaurantGrid';
import { RestaurantGridItem } from '../RestaurantGridItem/RestaurantGridItem';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import type { RestaurantSectionProps } from './RestaurantSection.types';

import styles from './RestaurantSection.module.scss';

const RestaurantSection: React.FC<RestaurantSectionProps> = ({ restaurants, currentCity }) => {
  return (
    <section className={styles.section}>
      <SectionHeader title={`Restaurants in ${currentCity}`}>
        <RestaurantGrid>
          {restaurants.map((restaurant) => (
            <RestaurantGridItem key={restaurant.id}>
              <RestaurantCard {...restaurant} />
            </RestaurantGridItem>
          ))}
        </RestaurantGrid>
      </SectionHeader>
    </section>
  );
};

export { RestaurantSection };