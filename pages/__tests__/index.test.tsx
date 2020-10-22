import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '@pages/index';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);

    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
