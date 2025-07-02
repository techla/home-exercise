import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders section header with title', () => {
    render(<SectionHeader title="Test Title"><div>Content</div></SectionHeader>);
    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
  });

  it('renders content area', () => {
    render(<SectionHeader title="Test"><div data-testid="content">Test Content</div></SectionHeader>);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('renders with toggle button when toggleable', () => {
    render(
      <SectionHeader title="Test" toggleable>
        <div>Content</div>
      </SectionHeader>
    );
    
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders without toggle button by default', () => {
    render(<SectionHeader title="Test"><div>Content</div></SectionHeader>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('uses h1 as default heading level', () => {
    render(<SectionHeader title="Test"><div>Content</div></SectionHeader>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<SectionHeader title="Test Title"><div>Content</div></SectionHeader>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('tabIndex', '0');
  });
});
