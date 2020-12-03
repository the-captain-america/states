import React from 'react';
import { StoreProvider } from '../src/utils/Store';
import { ThemeProvider } from '../src/common/Theme';
import 'antd/dist/antd.css';
// Add below
import Structure from '../src/components/Layout/Structure';

function App({ Component, pageProps }) {
  return (
    <Structure>
      <StoreProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </Structure>
  );
}

export default App;
