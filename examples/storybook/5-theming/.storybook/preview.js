import GlobalStyle from '../src/components/GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../src/theme';

// Konfigurieren eines Toolbar-Menüs mittels `globalTypes` mit
// einer `toolbar`-Annotation, womit wir ein theme global setzen und
// so das übergebene Theme im ThemeProvider-Decorator ändern können
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Styled Component theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

// Erweitern unseres globalen Decorators durch den Styled Components-
// ThemeProvider, dem wir abhängig vom in der Toolbar gesetzten global
// das passende Theme übergeben
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
    exclude: ['ref', 'theme', 'as', 'forwardedAs'],
  },
  backgrounds: { disable: true },
};
