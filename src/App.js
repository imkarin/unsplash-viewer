import React from 'react';

import logo from './assets/logo.png'
import featured from './assets/images/mountain.jfif'

import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header logo={logo} featuredPhoto={featured} />
      <SearchBar />
    </div>
  );
}

export default App;
