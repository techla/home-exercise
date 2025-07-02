import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  const mockOnToggle = jest.fn();

  beforeEach(() => {
    mockOnToggle.mockClear();
  });

  it('renders toggle button with expanded state', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders toggle button with collapsed state', () => {
    render(<ToggleButton expanded={false} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('calls onToggle when clicked', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct aria-label for expanded state', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Collapse');
  });

  it('has correct aria-label for collapsed state', () => {
    render(<ToggleButton expanded={false} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Expand');
  });

  it('handles aria-controls attribute', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} aria-controls="section-content" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-controls', 'section-content');
  });

  it('renders chevron icon', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} />);
    expect(screen.getByRole('button')).toContainHTML('svg');
  });

  it('handles keyboard navigation', () => {
    render(<ToggleButton expanded={true} onToggle={mockOnToggle} />);
    const button = screen.getByRole('button');
    
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    
    mockOnToggle.mockClear();
    
    fireEvent.keyDown(button, { key: ' ' });
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    
    mockOnToggle.mockClear();
    
    fireEvent.keyDown(button, { key: 'Escape' });
    expect(mockOnToggle).not.toHaveBeenCalled();
  });
});
