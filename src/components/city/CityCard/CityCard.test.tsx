import { render, screen } from '@testing-library/react';
import { CityCard } from './CityCard';

const mockCity = {
  id: '123',
  name: 'Paris',
  photo: '/test-image.jpg'
};

describe('CityCard', () => {
  it('renders city card with correct information', () => {
    render(<CityCard {...mockCity} />);
    
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByAltText('Panoramic view of Paris city')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<CityCard {...mockCity} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Visit Paris to discover restaurants in the city');
    expect(link).toHaveAttribute('href', '/city/123');
  });

  it('has correct image attributes', () => {
    render(<CityCard {...mockCity} />);
    
    const image = screen.getByAltText('Panoramic view of Paris city');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });
});
