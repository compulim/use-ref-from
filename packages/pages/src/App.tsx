import { useRefFrom } from 'use-ref-from';
import React, { Fragment } from 'react';

const App = () => {
  const value = useRefFrom('Hello, World!');

  return <Fragment>{value.current}</Fragment>;
};

export default App;
