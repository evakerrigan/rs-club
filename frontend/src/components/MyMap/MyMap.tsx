import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { FiltersRender } from '../Filters/Filters';
import './Map.scss';

export function MyMap() {
  /* mock coordinates for map */
  const points = [
    [55.733685, 37.588264],
    [59.9386, 30.3141],
    [57.1522, 65.5272],
    [53.9, 27.57],
    [56, 37.8],
    [60, 30.3141],
    [57.0522, 65.0272],
    [54, 27.7],
  ];

  return (
    <div className='map-container'>
             <FiltersRender/>
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
            {points.map((coordinates, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Placemark key={index} geometry={coordinates} />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
