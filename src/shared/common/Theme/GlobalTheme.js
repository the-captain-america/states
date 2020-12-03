import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        font-family: 'Montserrat', sans-serif;
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        box-shadow: none;
        border-radius: 16px;
        
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 16px;
        box-shadow: none;
        background: #e0e0e0;
    }
`;

export default GlobalStyle;
