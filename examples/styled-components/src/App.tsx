import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './components/GlobalStyle';
import Button from './components/Button';
import Container from './components/Container';
import ExtendedButton from './components/ExtendedButton';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {/* ========== BASICS - BASIC STYLING ========== */}
        <Button>Button</Button>
        {/* ========== BASICS - Extending Styles ========== */}
        {/* <Button as="a" href="#">
          Blue
        </Button>
        <ExtendedButton>Green</ExtendedButton> */}
        {/* ========== BASICS - ATTRIBUTES & THEMING ========== */}
        {/* <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
