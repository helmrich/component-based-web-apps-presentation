import Theme from './Theme';

const base: Omit<Theme, 'colors'> = {
  fonts: {
    primary: 'Inter, sans-serif',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
};

export const light: Theme = {
  ...base,
  colors: {
    primary: 'dodgerblue',
    secondary: 'seagreen',
    background: 'white',
    onPrimary: 'white',
    onSecondary: 'white',
    onBackground: 'black',
  },
};

export const dark: Theme = {
  ...base,
  colors: {
    primary: 'dodgerblue',
    secondary: 'seagreen',
    background: 'black',
    onPrimary: 'black',
    onSecondary: 'black',
    onBackground: 'white',
  },
};
