import { render, screen } from '@testing-library/react';
import { CityGrid } from './CityGrid';

describe('CityGrid', () => {
  it('renders children', () => {
    render(
      <CityGrid>
        <div data-testid="city-item-1">Paris</div>
        <div data-testid="city-item-2">Lyon</div>
        <div data-testid="city-item-3">Marseille</div>
      </CityGrid>
    );
    
    expect(screen.getByTestId('city-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('city-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('city-item-3')).toBeInTheDocument();
  });
});
