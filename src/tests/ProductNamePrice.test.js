import { render, screen } from '@testing-library/react';
import ProductNamePrice from '../components/ProductNamePrice';
import { MemoryRouter } from 'react-router-dom';

describe('ProductNamePrice component', () => {
  test('It renders the name', () => {
    render(<ProductNamePrice name='Blue shirt' />);
    const name = screen.getByText(/blue shirt/i);
    expect(name).toBeInTheDocument();
  });

  test('It renders the price', () => {
    render(<ProductNamePrice price={40.23} />);
    const price = screen.getByText(/40\.23/);
    expect(price).toBeInTheDocument();
  });

  test('It renders the price with two decimal places', () => {
    render(<ProductNamePrice price={20} />);
    const price = screen.getByText(/20\.00/);
    expect(price).toBeInTheDocument();
  });

  test('It renders "Product name" when no name is passed', () => {
    render(<ProductNamePrice />);
    const name = screen.getByText('Product name');
    expect(name).toBeInTheDocument();
  });

  test('It renders "0.00" when no price is passed', () => {
    render(<ProductNamePrice />);
    const price = screen.getByText(/0\.00/);
    expect(price).toBeInTheDocument();
  });

  test('It renders a link when hasLink is true', () => {
    render(
      <MemoryRouter>
        <ProductNamePrice hasLink={true} />
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  test('If hasLink is false, no link is rendered', () => {
    render(
      <MemoryRouter>
        <ProductNamePrice hasLink={false} link={'/products/1'} />
      </MemoryRouter>
    );
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  test('The link rendered matches the link passed', () => {
    const link = '/products/1';
    render(
      <MemoryRouter>
        <ProductNamePrice hasLink={true} link={link} />
      </MemoryRouter>
    );
    const linkTag = screen.getByRole('link');
    expect(linkTag).toBeInTheDocument();
    expect(linkTag).toHaveAttribute('href', link);
  });
});
