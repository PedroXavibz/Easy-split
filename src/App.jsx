import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';
import GlobalStyle from './styles/global';
import Header from './components/header';
import MainSection from './components/main-section';
import Context from './style';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>
      <Context>
        <MainSection />
      </Context>
    </main>
  </ThemeProvider>
);

export default App;
