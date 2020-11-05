import React from 'react';
import cn from 'classnames';
import Header from './components/Header';
import Footer from './components/Footer';

// import s from './App.module.scss';

const App = () => {
  return (
    <div className={cn('color')}>
      This is App component
      <Header />
      <main>this is main content</main>
      <Footer />
    </div>
  );
};

export default App;
