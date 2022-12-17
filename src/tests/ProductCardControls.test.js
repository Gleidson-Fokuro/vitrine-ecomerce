import { fireEvent, render, screen } from '@testing-library/react';
import ProductCardControls from '../components/ProductCardControls';

describe('ProductCardControls component', () => {
  test('It renders two buttons', () => {
    render(<ProductCardControls />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('It renders a counter', () => {
    let count = 0;
    render(<ProductCardControls counter={count} />);
    const counterDisplay = screen.getByText('0');
    expect(counterDisplay).toBeInTheDocument();
  });

  test('The add button works', () => {
    let count = 0;
    let add = () => count++;

    render(<ProductCardControls addBtn={add} />);

    const addButton = screen.getAllByRole('button')[1];
    fireEvent.click(addButton);

    expect(count).toBe(1);
  });

  test('The remove button works', () => {
    let count = 1;
    let remove = () => count--;

    render(<ProductCardControls removeBtn={remove} />);

    const removeButton = screen.getAllByRole('button')[0];
    fireEvent.click(removeButton);

    expect(count).toBe(0);
  });

  test('The count content can change', () => {
    let count = 1;
    let remove = () => count--;

    render(<ProductCardControls counter={0} removeBtn={remove} />);

    const removeButton = screen.getAllByRole('button')[0];
    fireEvent.click(removeButton);

    const counterElement = screen.getByText('0');
    expect(counterElement).toBeInTheDocument();
  });
});
