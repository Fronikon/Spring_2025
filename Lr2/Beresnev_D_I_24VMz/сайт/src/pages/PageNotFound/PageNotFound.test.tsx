import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('render PageNotFound', () => {
    render(<PageNotFound />);

    const notFound = screen.getByText(/404/i);
    expect(notFound).toBeInTheDocument();
  });
});
