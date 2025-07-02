import { CityCard } from '../CityCard/CityCard';
import { CityGrid } from '../CityGrid/CityGrid';
import { CityGridItem } from '../CityGridItem/CityGridItem';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import type { CityProps } from './CitySection.types';

import styles from './CitySection.module.scss';

const CitySection: React.FC<CityProps> = ({ cities, currentCityName }) => {
  const sectionId = 'city-section';
  
  return (
    <section 
      className={styles.section}
      id={sectionId}
      role="region"
    >
      <SectionHeader title={currentCityName} toggleable={true}>
        <CityGrid>
          {cities.map((city) => (
            <CityGridItem key={city.id}>
              <CityCard {...city} />
            </CityGridItem>
          ))}
        </CityGrid>
      </SectionHeader>
    </section>
  );
};

export { CitySection };
