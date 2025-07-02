import { render, screen } from '@testing-library/react';
import { CityGridItem } from './CityGridItem';

describe('CityGridItem', () => {
  it('renders children in list item', () => {
    render(
      <CityGridItem>
        <div data-testid="city-content">Paris City Card</div>
      </CityGridItem>
    );
    
    expect(screen.getByTestId('city-content')).toBeInTheDocument();
  });
});
