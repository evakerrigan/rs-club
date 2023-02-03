import './App.scss';
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>RS Club</div>
      <Footer />
    </div>
  );
}

export default App;
