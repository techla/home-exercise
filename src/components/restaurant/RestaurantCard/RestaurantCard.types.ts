import { Address, AveragePrice, AggregateRatings } from '../../../../graphql/queries/types';

type RestaurantCardProps = {
  key?: string;
  id: string;
  slug: string;
  name: string;
  address: Address;
  averagePrice: AveragePrice;
  photo: string;
  aggregateRatings?: AggregateRatings;
  offer?: string;
};

export type { RestaurantCardProps };