import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('It renders the site name', () => {
    render(<Footer />);
    const siteTitle = screen.getByText(/Stinson Style/i);
    expect(siteTitle).toBeInTheDocument();
  });

  test('It renders the site slogan', () => {
    render(<Footer />);
    const siteSlogan = screen.getByText(/Making you look awesome since 2005/i);
    expect(siteSlogan).toBeInTheDocument();
  });

  test('It informs user that this site is just a template', () => {
    render(<Footer />);
    const siteInfo = screen.getByText(
      /This is a fake store website developed with the purpose of practicing/i
    );
    expect(siteInfo).toBeInTheDocument();
  });

  test('It renders the site author name', () => {
    render(<Footer />);
    const siteAuthor = screen.getByText(/Adriel Faria/i);
    expect(siteAuthor).toBeInTheDocument();
  });

  test('It renders two links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
