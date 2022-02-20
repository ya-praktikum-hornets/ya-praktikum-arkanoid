import React from 'react';
import { ThemeProvider } from 'styled-components'

import { Login } from '@pages';
import GlobalStyle from '@styles/global';
import { baseTheme } from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
