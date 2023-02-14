import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Messages } from './components/Messages/Messages';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { Main } from './components/Main/Main';

function App() {
  return (
    <section className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
