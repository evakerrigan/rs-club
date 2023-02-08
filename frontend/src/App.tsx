import './App.scss';
import React from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <section className='App'>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
