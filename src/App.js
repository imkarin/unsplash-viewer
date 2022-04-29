import React from 'react';
import Header from './components/Header';

import logo from './assets/logo.png'
import featured from './assets/images/mountain.jfif'

function App() {
  return (
    <div className="App">
      <Header logo={logo} featuredPhoto={featured} />
    </div>
  );
}

export default App;
