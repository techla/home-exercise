import { render, screen } from '@testing-library/react';
import { CitySection } from './CitySection';

const mockCities = [
  {
    id: '1',
    name: 'Paris',
    photo: '/paris.jpg'
  },
  {
    id: '2', 
    name: 'Lyon',
    photo: '/lyon.jpg'
  },
  {
    id: '3',
    name: 'Marseille', 
    photo: '/marseille.jpg'
  }
];

describe('CitySection', () => {
  it('renders city section with current city name as title', () => {
    render(<CitySection cities={mockCities} currentCityName="Paris" />);
    
    expect(screen.getByRole('heading', { name: 'Paris' })).toBeInTheDocument();
  });

  it('renders all cities in the grid', () => {
    render(<CitySection cities={mockCities} currentCityName="Paris" />);
    
    const parisTexts = screen.getAllByText('Paris');
    expect(parisTexts.length).toBeGreaterThan(0);
    expect(screen.getByText('Lyon')).toBeInTheDocument();
    expect(screen.getByText('Marseille')).toBeInTheDocument();
  });

  it('renders correct number of city cards', () => {
    render(<CitySection cities={mockCities} currentCityName="Paris" />);
    
    const cityLinks = screen.getAllByRole('link');
    expect(cityLinks).toHaveLength(3);
  });

  it('renders toggle button when toggleable is true', () => {
    render(<CitySection cities={mockCities} currentCityName="Paris" />);
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded');
  });
});
