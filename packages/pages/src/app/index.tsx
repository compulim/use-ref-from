import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');

// rootElement && createRoot(rootElement).render(<App />);
rootElement && render(<App />, rootElement);
