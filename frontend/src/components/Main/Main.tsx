import {  Route, Routes } from 'react-router-dom';
import { Messages } from '../pages/messages/Messages';
import { Map } from '../pages/map/Map';

// import { NotFound } from '../pages/notFound/NotFound';
import { Profile } from '../pages/profile/Profile';
import './Main.scss';

export function Main() {
  return (
    <main className='main'>
       <Routes>
        <Route path='map' element={<Map/>} />
        <Route path='messages' element={<Messages/>} />
        <Route path='profile' element={<Profile/>} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </main>
  );
}
