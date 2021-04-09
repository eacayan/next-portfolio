import React from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/main.scss';


function App({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default App;
