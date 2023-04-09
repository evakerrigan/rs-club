import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { IUser } from '../../types/Types';
import { FiltersRender } from '../Filters/Filters';
import { BASE_URL } from '../../constants';
import './Map.scss';

function CreatePlacemarks(
  navigate: NavigateFunction, // колбек для смены локации, альтернативные методы не работали
  { githubName, location, profilePicture, telegramLink, _id }: IUser,
) {
  return (
    <Placemark
      key={githubName}
      geometry={location}
      options={{
        iconLayout: 'default#image',
        iconImageHref: profilePicture,
        iconImageSize: [50, 50],
        iconImageOffset: [-15, -15],
      }}
      onClick={() => navigate(`/profile/${_id}`)}
/*       properties={{
        hintContent: `<b> ${githubName} </b>`,
        balloonContent: `<div class="balloon-container">
          <h2>${githubName}</h2>
          <img alt="avatar" src=${profilePicture} data-id='${_id}' />
          <div><a href="https://t.me/${telegramLink}" target="_blank">start a conversation</a></div>
          </div>`,
      }} */
    />
  );
}

export function MyMap() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const stack = searchParams.get('stack');
  const pref = searchParams.get('pref');
  const cource = searchParams.get('cources');

  const resetParamsAndLocalStorage = () => {
    localStorage.clear();
    setSearchParams({});
  };
  const onFinish = () => {
    const createPrefParams: string[] = JSON.parse(localStorage.getItem('pref') || '[]');
    const createStackParams: string[] = JSON.parse(localStorage.getItem('stack') || '[]');
    const createCourcesParams: string[] = JSON.parse(localStorage.getItem('cources') || '[]');
    const query = {
      stack: createStackParams,
      pref: createPrefParams,
      cources: createCourcesParams,
    };
    const filter = Object.entries(query)
      .filter((e) => e[1].length > 0)
      .map(([key, value]) => [key, value.join(',')]);

    setSearchParams(Object.fromEntries(filter));
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const USERS_URL = `${BASE_URL}/users?`;
        const query: string[] = [];
        if (stack) query.push(`stack=${stack}`);
        if (pref) query.push(`pref=${pref}`);
        if (cource) query.push(`cources=${pref}`);

        const response = await fetch(USERS_URL + query.join('&'));
        const data = await response.json();
        setUsers(data.items);
      } catch (error) {
        console.log(`Oops, the server data was not loaded! ${error}`);
      }
    };
    getUsers();
  }, [cource, pref, stack]);

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
            {users &&
              users.map((user: IUser) => {
                if (!user.location?.length) return null;
                return CreatePlacemarks(navigate, user);
              })}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
