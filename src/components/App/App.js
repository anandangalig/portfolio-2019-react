import React from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import './App.scss';

const App = props => {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
