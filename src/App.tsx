import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/pokedesk" component={PokedexPage} />
    </BrowserRouter>
  );
};

export default App;
