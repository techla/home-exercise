import { render, screen } from '@testing-library/react';
import { RestaurantCard } from './RestaurantCard';

const mockRestaurant = {
  id: '456',
  slug: 'le-bistrot',
  name: 'Le Bistrot',
  photo: '/restaurant.jpg',
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
};

describe('RestaurantCard', () => {
  it('renders restaurant card with correct information', () => {
    render(<RestaurantCard {...mockRestaurant} />);
    
    expect(screen.getByText('Le Bistrot')).toBeInTheDocument();
    expect(screen.getByText(/123 Main St/)).toBeInTheDocument();
    expect(screen.getByText(/75001/)).toBeInTheDocument();
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    expect(screen.getByText(/€50 average price/)).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<RestaurantCard {...mockRestaurant} />);
    
    const image = screen.getByAltText('Interior view of Le Bistrot restaurant');
    expect(image).toBeInTheDocument();
  });

  it('renders booking button with offer', () => {
    render(<RestaurantCard {...mockRestaurant} />);
    
    const button = screen.getByText('Book • Up to -25%');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-hidden', 'true');
    expect(button).toHaveAttribute('tabIndex', '-1');
  });

  it('renders booking button without offer', () => {
    const restaurantWithoutOffer = { ...mockRestaurant, offer: undefined };
    render(<RestaurantCard {...restaurantWithoutOffer} />);
    
    const button = screen.getByText('Book');
    expect(button).toBeInTheDocument();
  });

  it('renders without rating when not provided', () => {
    const restaurantWithoutRating = {
      ...mockRestaurant,
      aggregateRatings: undefined,
    };
    render(<RestaurantCard {...restaurantWithoutRating} />);
    
    expect(screen.queryByText('8.5')).not.toBeInTheDocument();
    expect(screen.queryByText('42')).not.toBeInTheDocument();
  });

  it('formats price correctly in description', () => {
    const customRestaurant = {
      ...mockRestaurant,
      averagePrice: {
        amount: 2500,
        currency: 'EUR'
      }
    };
    
    render(<RestaurantCard {...customRestaurant} />);
    
    const link = screen.getByRole('link');
    const ariaLabel = link.getAttribute('aria-label');
    
    expect(ariaLabel).toContain('€25');
  });

  it('builds description without all data', () => {
    const minimalRestaurant = {
      ...mockRestaurant,
      aggregateRatings: undefined,
      offer: undefined
    };
    
    render(<RestaurantCard {...minimalRestaurant} />);
    
    const link = screen.getByRole('link');
    const ariaLabel = link.getAttribute('aria-label');
    
    expect(ariaLabel).toContain('Restaurant Le Bistrot');
    expect(ariaLabel).toContain('located at 123 Main St, 75001 Paris');
    expect(ariaLabel).toContain('€50 average price');
    expect(ariaLabel).not.toContain('rated');
    expect(ariaLabel).not.toContain('reviews');
    expect(ariaLabel).not.toContain('special offer');
  });
});
