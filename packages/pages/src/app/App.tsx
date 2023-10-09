import { Fragment } from 'react';
import { useRefFrom } from 'use-ref-from';

const App = () => {
  const value = useRefFrom('Hello, World!');

  return <Fragment>{value.current}</Fragment>;
};

export default App;
