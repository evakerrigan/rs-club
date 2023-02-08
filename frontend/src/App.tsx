import './App.scss';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Messages } from './components/pages/messages/Messages';

import { NotFound } from './components/pages/notFound/NotFound';
import { Profile } from './components/pages/profile/Profile';
import { Main } from './components/Main/Main';


function App() {
  return (
    <section className='App'>
      <Header />
      <main className='main'>
       <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </main>
      <Footer />
    </section>
  );
}

export default App;
