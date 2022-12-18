import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { MemoryRouter } from 'react-router-dom';

describe('ProductCard component', () => {
  const cart = [];
  const prod = {
    name: 'product',
    price: 9.92,
    img: 'https://google.com',
  };

  test('It renders the product image', () => {
    render(<ProductCard product={prod} cart={cart} />);
    const image = screen.getByAltText(prod.name);
    expect(image).toBeInTheDocument();
  });

  test('It renders a link when hasLink is true', () => {
    render(
      <MemoryRouter>
        <ProductCard product={prod} hasLink={true} cart={cart} />
      </MemoryRouter>
    );
    const linkImg = screen.queryAllByRole('link')[0];
    expect(linkImg).toBeInTheDocument();
  });

  test('If hasLink is false, no link is rendered', () => {
    render(
      <MemoryRouter>
        <ProductCard
          product={prod}
          hasLink={false}
          link={'/products/1'}
          cart={cart}
        />
      </MemoryRouter>
    );
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  test('The link rendered matches the link passed', () => {
    const link = '/products/1';
    render(
      <MemoryRouter>
        <ProductCard product={prod} hasLink={true} link={link} cart={cart} />
      </MemoryRouter>
    );

    const linkImg = screen.queryAllByRole('link')[0];

    expect(linkImg).toBeInTheDocument();
    expect(linkImg).toHaveAttribute('href', link);
  });
});
