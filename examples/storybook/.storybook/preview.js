import { ThemeProvider } from 'styled-components';
import { light, dark } from '../src/theme';
import GlobalStyle from '../src/components/GlobalStyle/GlobalStyle';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Styled Component theme',
    defaultValue: 'light',
    // toolbar: {
    //   icon: 'mirror',
    //   items: ['light', 'dark'],
    //   showName: true,
    // },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={context.globals.theme === 'dark' ? dark : light}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
    exclude: ['ref', 'theme', 'as', 'forwardedAs'],
  },
  // backgrounds: { disable: true },
};
