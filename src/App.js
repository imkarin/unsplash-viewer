import React from 'react';
import { ThemeProvider } from 'styled-components';

import logo from './assets/logo.png'
import featured from './assets/images/mountain.jfif'
import theme from './theme.json'

import GlobalStyles from './components/styles/Global.styled.js';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header logo={logo} featuredPhoto={featured} />
      </ThemeProvider>
    </div>
  );
}

export default App;
