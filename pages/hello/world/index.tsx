/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from '@components/button';
import React, { FC } from 'react';

const World: FC = () => {
  return (
    <div>
      <p css={{ fontSize: '52px' }}>Hello world</p>

      <Button>Click me!</Button>
    </div>
  );
};

export default World;
