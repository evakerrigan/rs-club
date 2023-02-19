import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Messages } from './components/Messages/Messages';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
// import { Main } from './components/Main/Main';
import { MyMap } from './components/MyMap/MyMap';

function App() {

  const arrCookies = document.cookie.split(';');

  let nameUserCookie = arrCookies.find((item) => item.startsWith('userName='));
  let tokenCookie = arrCookies.find((item) => item.startsWith('rsAccessToken='));

  if (nameUserCookie) {
    nameUserCookie = nameUserCookie.slice(9);
    console.log('nameUserCookie = ', nameUserCookie);
  };
  if (tokenCookie) {
    tokenCookie = tokenCookie.slice(14);
    console.log('tokenCookie = ', tokenCookie);
  }

  let isAuthenticated: boolean;

  if (tokenCookie) {
    isAuthenticated = true;
    console.log('isAuthenticated = ', isAuthenticated);

    // вот тут должен пойти запрос в бд, поиск по пользователям,
    // у кого такой токен, если токен найден, то вернуть имя пользователя




  } else {
    isAuthenticated = false;
    console.log('isAuthenticated = ', isAuthenticated);
  }

  return (
    <section className='App'>
      <Header />

      {
        isAuthenticated === true ?

          <Routes>

            <Route path='/' element={<MyMap />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<NotFound />} />

          </Routes>

          : <main className='main bg' />
      }


      <Footer />
    </section>
  );
}

export default App;
