import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import App from './components/App';

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default AppContainer;
