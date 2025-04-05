import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  it('render About', () => {
    render(<About />);

    const about = screen.getByText(/About us/i);
    expect(about).toBeInTheDocument();
  });
});
