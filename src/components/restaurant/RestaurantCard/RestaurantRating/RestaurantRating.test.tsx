import { render, screen } from '@testing-library/react';
import { RestaurantRating } from './RestaurantRating';

describe('RestaurantRating', () => {
  it('renders rating with value and review count', () => {
    render(<RestaurantRating ratingValue={8.5} reviewCount={42} />);
    
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders only rating value when no review count', () => {
    render(<RestaurantRating ratingValue={7.8} />);
    
    expect(screen.getByText('7.8')).toBeInTheDocument();
    expect(screen.queryByText('15')).not.toBeInTheDocument();
  });

  it('renders only review count when no rating value', () => {
    render(<RestaurantRating reviewCount={15} />);
    
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.queryByText(/^\d+\.\d+$/)).not.toBeInTheDocument();
  });

  it('renders with chat icon', () => {
    render(<RestaurantRating ratingValue={8.0} reviewCount={20} />);
    
    expect(screen.getByText('20').parentElement?.querySelector('svg')).toBeInTheDocument();
  });
});
