import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersRender } from '../Filters/Filters';
import './Map.scss';
import { userInfoFromBD } from '../../types/Types';

function CreatePlacemarks(userList: userInfoFromBD[] = []) {
  return (
    <>
      {userList.map((userInfo) => (
        <Placemark
          key={userInfo.name}
          geometry={userInfo.coords}
          options={{
            iconLayout: 'default#image',
            iconImageHref: userInfo.avatar,
            iconImageSize: [50, 50],
            iconImageOffset: [-15, -15],
          }}
          properties={{
            hintContent: `<b> ${userInfo.name} </b>`,
            // создаём пустой элемент с заданными размерами
            balloonContent: `<div class="balloon-container">
          <h2>${userInfo.name}</h2>
          <img alt="avatar" src=${userInfo.avatar} />
          <div><a href=${userInfo.telegramm} target="_blank">start a conversation</a></div>
          </div>`,
          }}
        />
      ))}
    </>
  );
}

export function MyMap() {
  const [users, setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const stack = searchParams.get('stack');
  const pref = searchParams.get('pref');
  const cource = searchParams.get('cources');

  // const getCoordinates = () =>
  //   users.map((item: IUser) => item.location).filter((item) => item?.length);

  const resetParamsAndLocalStorage = () => {
    localStorage.clear();
    setSearchParams({});
  };
  const onFinish = () => {
    const createPrefParams = JSON.parse(localStorage.getItem('pref') || '[]');
    const createStackParams = JSON.parse(localStorage.getItem('stack') || '[]');
    const createCourcesParams = JSON.parse(localStorage.getItem('cources') || '[]');
    const query = {
      stack: createStackParams,
      pref: createPrefParams,
      cources: createCourcesParams,
    };
    setSearchParams(Object.fromEntries(Object.entries(query).filter((e) => e[1])));
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const BASE_URL = 'http://localhost:8000/api/users?';
        const query: string[] = [];
        if (stack) query.push(`stack=${stack}`);
        if (pref) query.push(`pref=${pref}`);
        if (cource) query.push(`cources=${pref}`);

        const response = await fetch(BASE_URL + query.join('&'));
        const data = await response.json();
        setUsers(data.items);
      } catch (error) {
        console.log(`Oops, the server data was not loaded! ${error}`);
      }
    };
    getUsers();
  }, [cource, pref, stack]);

  const userBase = [
    {
      name: 'User',
      avatar: 'https://game-assets.swgoh.gg/tex.charui_admiralraddus.png',
      coords: [55.847, 37.692],
      telegramm: 'https://t.me/friendswgoh',
    },
    {
      name: 'huyser',
      avatar: 'https://game-assets.swgoh.gg/tex.charui_trooperclone_arc.png',
      coords: [54.847973, 33.692542],
      telegramm: 'https://t.me/friendswgoh',
    },
    {
      name: 'loser',
      avatar: 'https://game-assets.swgoh.gg/tex.charui_chewbacca_ot.png',
      coords: [50.847973, 30.692542],
      telegramm: 'https://t.me/friendswgoh',
    },
  ];

  return (
    <div className='map-container'>
      <FiltersRender onFinish={onFinish} resetParamsAndLocalStorage={resetParamsAndLocalStorage} />
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          className='map'
        >
          <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
              groupByCoordinates: false,
            }}
          >
            {/* {getCoordinates().map((coordinates, index) => (
              <Placemark key={index} geometry={coordinates} />
            ))} */}
            {CreatePlacemarks(userBase)}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
