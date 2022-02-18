import React from 'react';
import { ThemeProvider } from 'styled-components'

import { Home } from './pages';
import GlobalStyle from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
