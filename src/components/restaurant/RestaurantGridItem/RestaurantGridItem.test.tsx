import { render, screen } from '@testing-library/react';
import { RestaurantGridItem } from './RestaurantGridItem';

describe('RestaurantGridItem', () => {
  it('renders children in list item', () => {
    render(
      <RestaurantGridItem>
        <div data-testid="restaurant-content">Restaurant Card</div>
      </RestaurantGridItem>
    );
    
    expect(screen.getByTestId('restaurant-content')).toBeInTheDocument();
  });
});
