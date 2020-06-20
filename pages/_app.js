import React from 'react';
import GlobalStyles from 'components/GlobalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
