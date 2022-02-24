import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';
import GlobalStyle from './styles/global';
import Header from './components/header';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className='App'>
      <GlobalStyle />
      <Header />
    </div>
  </ThemeProvider>
);

export default App;
