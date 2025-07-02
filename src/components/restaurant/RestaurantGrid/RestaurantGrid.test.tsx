import { render, screen } from '@testing-library/react';
import { RestaurantGrid } from './RestaurantGrid';

describe('RestaurantGrid', () => {
  it('renders children in grid structure', () => {
    render(
      <RestaurantGrid>
        <div data-testid="restaurant-item-1">Restaurant 1</div>
        <div data-testid="restaurant-item-2">Restaurant 2</div>
      </RestaurantGrid>
    );
    
    expect(screen.getByTestId('restaurant-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('restaurant-item-2')).toBeInTheDocument();
  });
});
