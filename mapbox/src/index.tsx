import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Scene, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

const defaultList = [
  {
    "w": 19.1,
    "t": 24.6,
    "j": 108.6167,
    "platform": 'IOS',
  },
  {
    "w": 20,
    "t": 40,
    "j": 110.25,
    "platform": 'IOS',
  },
  {
    "w": 23.7936,
    "t": 19.6,
    "j": 114.7297,
    "platform": 'Android',
  },
  {
    "w": 23.7106,
    "t": 19.4, // 业务数量
    "j": 113.085,
    "platform": 'Android',
  },
];

type platformType = 'IOS' | 'Android';
const setColor = (platform: platformType) => {
  const platformMap = {
    'IOS': 'blue',
    'Android': 'red',
  }
  return platformMap[platform];
}


const scene = new Scene({
  id: 'map',
  map: new Mapbox({
    pitch: 35.210526315789465,
    style: 'dark',
    center: [ 104.288144, 31.239692 ],
    zoom: 4.4
  })
});

scene.on('loaded', () => {
  // fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
  //   .then(res => res.json())
  //   .then(data => {
  const pointLayer = new PointLayer({})
    .source(defaultList, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w'
      }
    })
    .shape('cylinder')
    .size('t', function(level) {
      return [ 4, 4, level * 2 + 20 ];
    })
    .animate(true)
    .active(true)
    .color('platform', setColor)
    .style({
      opacity: 1.0
    });
  scene.addLayer(pointLayer);
  // });
});

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
