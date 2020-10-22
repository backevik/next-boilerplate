import { render } from '@testing-library/react';
import React from 'react';
import World from '..';

describe('World', () => {
  it('should render a hello world text', () => {
    const { getByText } = render(<World />);

    expect(getByText('Hello world')).toBeInTheDocument();
  });
});
