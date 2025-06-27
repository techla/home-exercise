import type { Restaurant } from '../../../../graphql/queries/types';

type RestaurantSectionProps = {
  restaurants: Array<Restaurant>;
  currentCity: string;
};

export type { RestaurantSectionProps };