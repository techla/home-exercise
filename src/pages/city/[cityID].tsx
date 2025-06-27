import type { GetServerSideProps, NextPage } from 'next';
import { useRef } from 'react';
import { useRouter } from 'next/router'
import { ApolloClient, useQuery, HttpLink, InMemoryCache, NormalizedCacheObject, useApolloClient } from '@apollo/client'
import { GET_CITIES_AND_RESTAURANTS } from '../../../graphql/queries/getCitiesAndRestaurants';
import { GetCitiesAndRestaurantsResponse, GetRestaurantsVars } from '../../../graphql/queries/types';
import { RestaurantSection } from '@/components/restaurant/RestaurantSection/RestaurantSection';
import { CitySection } from '@/components/city/CitySection/CitySection';
import '../../styles/custom.css';
import '../../styles/globals.ext.css';

type CityPageProps = { initialApolloState: NormalizedCacheObject, cityId: string };

const CityPage: NextPage<CityPageProps> = ({initialApolloState, cityId: propCityId}) => {
  const { query, isReady } = useRouter()
  const cityID = propCityId ?? (query.cityID as string)
  const client = useApolloClient();
  const hasRestored = useRef(false);

  if (!hasRestored.current) {
    client.cache.restore(initialApolloState);
    hasRestored.current = true;
  }
  const { data, loading } = useQuery<GetCitiesAndRestaurantsResponse, GetRestaurantsVars>(GET_CITIES_AND_RESTAURANTS, {
    client,
    variables: { cityID },
    skip: !isReady && !propCityId
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredCities = data!.getCities.filter(city => city.id !== cityID);
  const currentCityName = data!.getCities.find(city => city.id === cityID)!.name;
  const restaurants = data!.getRestaurants;

  if (!restaurants || !filteredCities || !currentCityName) {
    return <div>No data found</div>;
  }

  return (
    <>
      <CitySection cities={filteredCities} currentCityName={currentCityName} />
      <RestaurantSection restaurants={restaurants} currentCity={currentCityName}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  if (typeof query.cityID !== 'string') {
    return {
      notFound: true,
    };
  }

  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

   await apolloClient.query({
    query: GET_CITIES_AND_RESTAURANTS,
    variables: { cityID: query.cityID },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      cityId: query.cityID,
    },
  };
};

export default CityPage;
