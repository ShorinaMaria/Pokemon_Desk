import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/pokedex" component={PokedexPage} />
    </BrowserRouter>
  );
};

export default App;
