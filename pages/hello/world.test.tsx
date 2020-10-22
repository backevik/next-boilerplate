import { render } from '@testing-library/react';
import React from 'react';
import Home from '@pages/index';

describe('World', () => {
  it('should render a hello world text', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Get started by editing')).toBeInTheDocument();
  });
});
