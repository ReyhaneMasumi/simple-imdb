// This is main component that displays components
import React from 'react';

import Header from './components/header';
import Poster from './components/poster';
import Movies from './components/movies';

import './App.css';

function App() {
  return (
    <main className="layout">
      <Header />
      <Poster />
      <Movies />
    </main>
  );
}

export default App;
