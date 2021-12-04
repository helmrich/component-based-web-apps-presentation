import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './components/GlobalStyle';
import Button from './components/Button';
import Container from './components/Container';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
