import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  IUser } from '../../types/Types';
import { FiltersRender } from '../Filters/Filters';
import './Map.scss';

export function MyMap() {
  const [users, setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const stack = searchParams.get('stack');
  const pref = searchParams.get('pref');
  const cource = searchParams.get('cources');

  const getCoordinates = () =>
    users.map((item: IUser) => item.location).filter((item) => item?.length);
  const resetParamsAndLocalStorage = () => {
    localStorage.clear()
    setSearchParams({})
  }
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

  return (
    <div className='map-container'>
      <FiltersRender onFinish={onFinish} resetParamsAndLocalStorage={resetParamsAndLocalStorage} />
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
          className='map'
        >
          <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
              groupByCoordinates: false,
            }}
          >
            {getCoordinates().map((coordinates, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Placemark key={index} geometry={coordinates} />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
