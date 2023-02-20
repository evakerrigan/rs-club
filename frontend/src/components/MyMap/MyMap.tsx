import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
// import { Button } from 'antd';
import { useSearchParams } from 'react-router-dom';
// import { IUser } from '../../types/Types';
import { FiltersRender } from '../Filters/Filters';
import './Map.scss';

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
            <Placemark
              geometry={[55.847973, 37.692542]}
              options={{
                // Options. You must specify this type of layout.
                iconLayout: 'default#image',
                // Custom image for the placemark icon.
                iconImageHref: 'https://game-assets.swgoh.gg/tex.charui_admiralraddus.png',
                // The size of the placemark.
                iconImageSize: [50, 50],
                // The offset of the upper left corner of the icon relative
                // to its "tail" (the anchor point).
                iconImageOffset: [-3, -42],
                // iconShape: {
                //   type: 'Circle',
                //   coordinates: [0, 0],
                //   radius: 20,
                // },
              }}
              properties={{
                hintContent: '<b> Я появляюсь при наведении на метку </b>',
                // создаём пустой элемент с заданными размерами
                balloonContent: `<div class="balloon-container">
                <h2>Balloon</h2>
                <img alt="avatar" src="https://game-assets.swgoh.gg/tex.charui_admiralraddus.png" />
                <a href="https://t.me/...">start a conversation</a>
                </div>`,
              }}
              // onClick={() => {
              //   // ставим в очередь промисов, чтобы сработало после отрисовки балуна
              //   console.log('object :>> ');
              // }}
            />
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
