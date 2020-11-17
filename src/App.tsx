import { useRoutes } from 'hookrouter';
import React from 'react';
import Header from './components/Header';
import NotFoundPage from './pages/NotFound';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
