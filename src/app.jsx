import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';
import GlobalStyle from './styles/global';
import Header from './components/header';
import MainSection from './components/main-section';
import AboutSection from './components/about-section';
import Footer from './components/footer';
import Context from './style';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Context>
      <main>
        <MainSection />
        <AboutSection />
      </main>
    </Context>
    <Footer />
  </ThemeProvider>
);

export default App;
