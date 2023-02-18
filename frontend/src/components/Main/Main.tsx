import { useState } from 'react';
import { MyMap } from '../MyMap';
import './Main.scss';

export function Main() {

  const arrCookies = document.cookie.split(';');

  let nameUserCookie = arrCookies.find((item) => item.startsWith('userName='));

  if (nameUserCookie) {
    nameUserCookie = nameUserCookie.slice(9);
  }
  console.log('nameUserCookie = ', nameUserCookie);

  let isAuthenticated: boolean;

  if (nameUserCookie) {
    isAuthenticated = true;
    console.log('isAuthenticated = ', isAuthenticated);
  } else {
    isAuthenticated = false;
    console.log('isAuthenticated = ', isAuthenticated);
  }
  // const [isAuthenticated] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!(nameUserCookie)) {
  //     navigate("/login");
  //   }
  // }, [....]);

  return isAuthenticated ? <MyMap /> : <main className='main bg' />;
}
