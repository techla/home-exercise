import { gql } from '@apollo/client'

const GET_CITIES_AND_RESTAURANTS = gql`
  query GetCitiesAndRestaurants($cityID: ID!) {
    getCities {
      id
      name
      photo
    }
    getRestaurants(cityID: $cityID) {
      id
      name
      slug
      photo
      address {
        street
        postalCode
        locality
      }
      averagePrice {
        amount
        currency
      }
      aggregateRatings {
        ratingValue
        reviewCount
      }
      offer
    }
  }
`

export { GET_CITIES_AND_RESTAURANTS }