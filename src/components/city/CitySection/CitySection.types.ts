import type { City } from '../../../../graphql/queries/types';

type CityProps = {
  currentCityName: string;
  cities: Array<City>;
}

export type { CityProps };