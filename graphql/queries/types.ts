type City = {
  id: string
  name: string
  photo: string
}

type Address = {
  street: string;
  postalCode: string;
  locality: string;
};

type AveragePrice = {
  amount: number;
  currency: string;
};

type AggregateRatings = {
  ratingValue?: number;
  reviewCount?: number;
};

type Restaurant = {
    id: string
    name: string
    slug: string
    photo: string
    address: Address
    averagePrice: AveragePrice
    aggregateRatings?: AggregateRatings
    offer?: string
  }


type GetCitiesAndRestaurantsResponse = {
  getCities: Array<City>;
  getRestaurants: Array<Restaurant>;
}

type GetRestaurantsVars = {
  cityID: string
}

export type {
  City,
  Restaurant,
  Address,
  AveragePrice,
  AggregateRatings,
  GetCitiesAndRestaurantsResponse,
  GetRestaurantsVars
};
