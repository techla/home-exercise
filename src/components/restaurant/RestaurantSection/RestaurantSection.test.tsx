import { render, screen } from '@testing-library/react';
import { RestaurantSection } from './RestaurantSection';

const mockRestaurants = [
  {
    id: '1',
    slug: 'le-bistrot',
    name: 'Le Bistrot',
    photo: '/restaurant1.jpg',
    address: {
      street: '123 Main St',
      postalCode: '75001',
      locality: 'Paris',
    },
    averagePrice: {
      amount: 5000,
      currency: 'EUR',
    },
    aggregateRatings: {
      ratingValue: 8.5,
      reviewCount: 42,
    },
    offer: '-25%',
  },
  {
    id: '2',
    slug: 'chez-marie',
    name: 'Chez Marie',
    photo: '/restaurant2.jpg',
    address: {
      street: '456 Avenue des Champs',
      postalCode: '75008',
      locality: 'Paris',
    },
    averagePrice: {
      amount: 7500,
      currency: 'EUR',
    },
    aggregateRatings: {
      ratingValue: 9.2,
      reviewCount: 128,
    },
  },
  {
    id: '3',
    slug: 'pizza-luigi',
    name: 'Pizza Luigi',
    photo: '/restaurant3.jpg',
    address: {
      street: '789 Rue de la Paix',
      postalCode: '75002',
      locality: 'Paris',
    },
    averagePrice: {
      amount: 2500,
      currency: 'EUR',
    },
    aggregateRatings: {
      ratingValue: 7.8,
      reviewCount: 56,
    },
    offer: '-15%',
  }
];

describe('RestaurantSection', () => {
  it('renders restaurant section with city name in title', () => {
    render(<RestaurantSection restaurants={mockRestaurants} currentCity="Paris" />);
    
    expect(screen.getByRole('heading', { name: 'Restaurants in Paris' })).toBeInTheDocument();
  });

  it('renders all restaurants', () => {
    render(<RestaurantSection restaurants={mockRestaurants} currentCity="Paris" />);
    
    expect(screen.getByText('Le Bistrot')).toBeInTheDocument();
    expect(screen.getByText('Chez Marie')).toBeInTheDocument();
    expect(screen.getByText('Pizza Luigi')).toBeInTheDocument();
  });

  it('renders restaurant details correctly', () => {
    render(<RestaurantSection restaurants={mockRestaurants} currentCity="Paris" />);
    
    expect(screen.getByText(/€50 average price/)).toBeInTheDocument();
    expect(screen.getByText(/€75 average price/)).toBeInTheDocument();
    expect(screen.getByText(/€25 average price/)).toBeInTheDocument();
    
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('9.2')).toBeInTheDocument();
    expect(screen.getByText('7.8')).toBeInTheDocument();
  });

  it('renders restaurant offers when available', () => {
    render(<RestaurantSection restaurants={mockRestaurants} currentCity="Paris" />);
    
    expect(screen.getByText('Book • Up to -25%')).toBeInTheDocument();
    expect(screen.getByText('Book • Up to -15%')).toBeInTheDocument();
    expect(screen.getByText('Book')).toBeInTheDocument();
  });

  it('handles different city names correctly', () => {
    render(<RestaurantSection restaurants={mockRestaurants} currentCity="Lyon" />);
    
    expect(screen.getByRole('heading', { name: 'Restaurants in Lyon' })).toBeInTheDocument();
  });

  it('handles restaurants without ratings', () => {
    const restaurantsWithoutRatings = [{
      ...mockRestaurants[0],
      aggregateRatings: undefined
    }];
    
    render(<RestaurantSection restaurants={restaurantsWithoutRatings} currentCity="Paris" />);
    
    expect(screen.getByText('Le Bistrot')).toBeInTheDocument();
    expect(screen.queryByText('8.5')).not.toBeInTheDocument();
    expect(screen.queryByText('42')).not.toBeInTheDocument();
  });
});
