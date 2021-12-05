import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;

export default GlobalStyle;
