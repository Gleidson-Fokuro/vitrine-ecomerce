import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartNoProductsMsg from '../components/CartNoProductsMsg';

describe('CartNoProductMsg component', () => {
  test("It renders a message saying there's no products", () => {
    render(
      <MemoryRouter>
        <CartNoProductsMsg />
      </MemoryRouter>
    );

    const msg = screen.getByText(/You didn't add any items/i);
    expect(msg).toBeInTheDocument();
  });

  test('It renders a link to the products page', () => {
    render(
      <MemoryRouter>
        <CartNoProductsMsg />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/products');
  });
});
