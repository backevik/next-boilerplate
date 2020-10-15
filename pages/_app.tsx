import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import '../styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
