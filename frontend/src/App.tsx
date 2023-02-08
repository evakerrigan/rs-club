import './App.scss';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Messages } from './components/pages/messages/Messages';
import { Map } from './components/pages/map/Map';
import { NotFound } from './components/pages/notFound/NotFound';
import { Profile } from './components/pages/profile/Profile';


function App() {
  return (
    <section className='App'>
      <Header />
      <main className='main'>
       <Routes>
        <Route path='/' element={<Map/>} />
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
