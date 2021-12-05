import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  body {
    background-color: white;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;

export default GlobalStyle;