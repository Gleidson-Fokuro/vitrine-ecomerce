import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('It renders a nav element', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('It has two links', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test('The first link says Products', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent(/products/i);
  });

  test('The first link redirects to /products', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/products');
  });

  test('The second link says Cart', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[1]).toHaveTextContent(/cart/i);
  });

  test('The second link redirects to /cart', () => {
    const cart = [
      {
        quantity: 0,
      },
    ];

    render(
      <MemoryRouter>
        <Navbar cart={cart} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[1]).toHaveAttribute('href', '/cart');
  });
});
