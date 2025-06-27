import type { Address, AveragePrice } from '../../../../../graphql/queries/types';

type RestaurantDetailsProps = {
  id: string;
  name: string;
  address: Address;
  averagePrice: AveragePrice;
};

export type { RestaurantDetailsProps };