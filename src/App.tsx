import { useRoutes } from 'hookrouter';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match;
};

export default App;
