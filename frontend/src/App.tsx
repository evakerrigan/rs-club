import './App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Messages } from './components/Messages/Messages';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile';
import { MyMap } from './components/MyMap/MyMap';
import { BASE_URL } from './constants';
import { IUser } from './types/Types';
import { getCookie } from './utils/getCookie';
import { Settings } from './components/Settings';

function App() {
  const [user, setUser] = useState<IUser>();

  const userId = getCookie('userId');
  const userName = getCookie('userName');
  useEffect(() => {
    async function getUser() {
      if (userId) {
        try {
          const response = await fetch(`${BASE_URL}/users/${userId}`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('User get request failed!');
        }
      }
    }
    getUser();
  }, [userId]);

  return (
    <section className='App'>
      <Header
        isAuthenticated={Boolean(user)}
        userAvatar={user?.profilePicture || ''}
        userName={userName || ''}
      />

      {user ? (
        <Routes>
          <Route path='/' element={<MyMap />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/settings' element={<Settings id={userId} />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      ) : (
        <main className='main bg' />
      )}

      <Footer />
    </section>
  );
}

export default App;
