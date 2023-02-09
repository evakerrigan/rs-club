import { useState } from 'react';
import { MyMap } from '../MyMap';
import './Main.scss';

export function Main() {
  const [isAuthenticated] = useState<boolean>(true);
  return isAuthenticated ? <MyMap /> : <main className='main bg' />;
}
