import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero component', () => {
  test('It renders a heading', () => {
    render(<Hero title='Hero title' text='' image='' />);
    const h2 = screen.getByText('Hero title');
    expect(h2).toBeInTheDocument();
  });

  test('It renders a p tag', () => {
    render(<Hero title='' text='Hero text' image='' />);
    const p = screen.getByText('Hero text');
    expect(p).toBeInTheDocument();
  });
});
