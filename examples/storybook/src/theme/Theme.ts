type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
  };
  fonts: {
    primary: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    low: string;
    medium: string;
    high: string;
  };
};

export default Theme;
