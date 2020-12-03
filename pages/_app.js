import React from 'react';
import { ThemeProvider } from '../src/shared/common/Theme';
// Add below
import Structure from '../src/components/Layout/Structure';

const App = ({ Component, pageProps }) => {
  return (
    <Structure>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Structure>
  );
};

export default App;
