import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: white;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    outline: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
`;
