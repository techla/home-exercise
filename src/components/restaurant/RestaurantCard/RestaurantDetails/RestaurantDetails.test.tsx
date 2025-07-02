import { render, screen } from '@testing-library/react';
import { RestaurantDetails } from './RestaurantDetails';

const mockProps = {
  id: '123',
  name: 'Le Petit Bistrot',
  address: {
    street: '15 Rue de la Paix',
    postalCode: '75001',
    locality: 'Paris',
  },
  averagePrice: {
    amount: 4500,
    currency: 'EUR',
  },
};

describe('RestaurantDetails', () => {
  it('renders restaurant name', () => {
    render(<RestaurantDetails {...mockProps} />);
    
    expect(screen.getByText('Le Petit Bistrot')).toBeInTheDocument();
  });

  it('renders formatted address', () => {
    render(<RestaurantDetails {...mockProps} />);
    
    expect(screen.getByText(/15 Rue de la Paix.*75001.*Paris/)).toBeInTheDocument();
  });

  it('renders formatted price', () => {
    render(<RestaurantDetails {...mockProps} />);
    
    expect(screen.getByText('€45 average price')).toBeInTheDocument();
  });

  it('has proper structured data attributes', () => {
    render(<RestaurantDetails {...mockProps} />);
    
    const nameElement = screen.getByText('Le Petit Bistrot');
    expect(nameElement.tagName.toLowerCase()).toBe('h2');
    
    const addressElement = screen.getByText(/15 Rue de la Paix.*75001.*Paris/);
    expect(addressElement.tagName.toLowerCase()).toBe('address');
    
    const priceElement = screen.getByText('€45 average price');
    expect(priceElement.tagName.toLowerCase()).toBe('p');
  });

  it('formats price correctly for different currencies', () => {
    const propsWithUSD = {
      ...mockProps,
      averagePrice: {
        amount: 3000,
        currency: 'USD',
      },
    };
    
    render(<RestaurantDetails {...propsWithUSD} />);
    
    expect(screen.getByText('$30 average price')).toBeInTheDocument();
  });
});
