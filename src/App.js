import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import logo from './assets/logo.png'
import featured from './assets/images/mountain.jfif'
import theme from './theme.json'

import GlobalStyles from './components/styles/Global.styled.js';
import Header from './components/Header';

const CLIENT_ID = '0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23';
const BASE_URL = 'https://api.unsplash.com/photos/'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  async function searchPhotos() {
    const res = await fetch(`${BASE_URL}?client_id=${CLIENT_ID}`)
      .then(res => res.json())
    return res
  }

  async function handleSearch() {
    searchPhotos()
      .then(photos => console.log(photos))
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header logo={logo} featuredPhoto={featured} />
        <button onClick={handleSearch}>aaa</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
