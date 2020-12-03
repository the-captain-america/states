import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    &:before {
      box-sizing: inherit;
    }
    &:after {
      box-sizing: inherit;
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
    background-color: #E5E5E5;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
        background: #f2f2f2;
        border: none;
        box-shadow: none;
    }
  ::-webkit-scrollbar-thumb {
        background: #dfdfe7;
        border: none;
        box-shadow: none;
    }
  * {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

export default GlobalTheme;
