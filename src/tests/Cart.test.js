import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

describe('Cart page', () => {
  const product1 = { quantity: 2, price: 2.5, name: 'Shirt', id: 1 };

  test("It renders a message when there's no items on the cart", () => {
    const cart = [];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const msg = screen.getByText(/You didn't add any items/i);
    expect(msg).toBeInTheDocument();
  });

  test("It doesn't render products when there's no items on the cart", () => {
    const cart = [];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const products = screen.queryAllByText(/\$/);
    expect(products).toHaveLength(0);
  });

  test("It doesn't render a message when there's items on the cart", () => {
    const cart = [product1];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const msg = screen.queryAllByText(/You didn't add any items/i);
    expect(msg).toHaveLength(0);
  });

  test("It renders products when there's items on the cart", () => {
    const cart = [product1];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const products = screen.getAllByText(/shirt/i);
    expect(products).toHaveLength(1);
  });

  test("It renders total price when there's items on the cart", () => {
    const cart = [product1];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const total = screen.getByText(/total/i);
    expect(total).toBeInTheDocument();
  });

  test("It doesn't render total price when there's no items on the cart", () => {
    const cart = [];
    render(
      <MemoryRouter>
        <Cart cart={cart} />
      </MemoryRouter>
    );
    const total = screen.queryAllByText(/total/i);
    expect(total).toHaveLength(0);
  });
});
