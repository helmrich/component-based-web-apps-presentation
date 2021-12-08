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
  shadows: {
    low: '1px 3px 5px rgba(0, 0, 0, 0.1)',
    medium: '2px 4px 6px rgba(0, 0, 0, 0.2)',
    high: '3px 5px 7px rgba(0, 0, 0, 0.3)',
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
