import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './Header';

describe('Header component', () => {
  const Header = () => (
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );

  it('Header render', () => {
    render(<Header />);

    const linkToHome = screen.getByRole('linkToHome');
    const linkToAbout = screen.getByRole('linkToAbout');

    expect(linkToHome).toBeInTheDocument();
    expect(linkToAbout).toBeInTheDocument();
  });
});
