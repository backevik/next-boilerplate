import React, { FC } from 'react';
import { useRouter } from 'next/router';

const Name: FC = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default Name;
