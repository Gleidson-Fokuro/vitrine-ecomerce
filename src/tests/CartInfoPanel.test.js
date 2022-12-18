import { render, screen } from '@testing-library/react';
import CartInfoPanel from '../components/CartInfoPanel';

describe('CartInfoPanel component', () => {
  const product1 = { price: 1.0, quantity: 4 };
  const product2 = { price: 1.5, quantity: 1 };

  test("It doesn't render continue button when cart is empty", () => {
    const cart = [];
    render(<CartInfoPanel cart={cart} />);
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(0);
  });

  test('It renders continue button when cart has one item', () => {
    const cart = [product1];
    render(<CartInfoPanel cart={cart} />);
    const button = screen.getByTitle(/continue/i);
    expect(button).toBeInTheDocument();
  });

  test('It renders continue button when cart has more than one item', () => {
    const cart = [product1, product2];
    render(<CartInfoPanel cart={cart} />);
    const button = screen.getByTitle(/continue/i);
    expect(button).toBeInTheDocument();
  });

  test('The total is $ 0.00 when cart is empty', () => {
    const cart = [];
    render(<CartInfoPanel cart={cart} />);
    const total = screen.getByText(/\$/);

    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent('R$ 0.00');
  });

  test('The total matches the price of item on the cart', () => {
    const cart = [product2];
    render(<CartInfoPanel cart={cart} />);
    const total = screen.getByText(/\$/);

    expect(total).toHaveTextContent(`$ ${product2.price}`);
  });

  test('The total matches the quantity times price of item on the cart', () => {
    const cart = [product1];
    render(<CartInfoPanel cart={cart} />);
    const total = screen.getByText(/\$/);

    const totalExpected = product1.price * product1.quantity;
    expect(total).toHaveTextContent(`$ ${totalExpected.toFixed(2)}`);
  });

  test('The total matches the sum of prices of the itens on the cart', () => {
    const cart = [product1, product2];
    render(<CartInfoPanel cart={cart} />);
    const total = screen.getByText(/\$/);

    const totalExpected =
      product1.price * product1.quantity + product2.price * product2.quantity;
    expect(total).toHaveTextContent(`$ ${totalExpected.toFixed(2)}`);
  });
});
