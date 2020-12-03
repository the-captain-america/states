import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalTheme from './GlobalTheme';

const ThemeProvider = props => {
  const { children } = props;

  return (
    <>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <GlobalTheme />
    </>
  );
};

export default ThemeProvider;
