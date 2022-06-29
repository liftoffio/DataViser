import React from 'react';
import { MapboxScene, Control } from '@antv/l7-react';
import MyPointLayer from './layers/MyPointLayer';

const MyScene = React.memo(function Map(props: { data: any[] }) {
  const { data } = props;
  return (
    <>
      <MapboxScene
        map={{
          center: [104.288144, 31.239692],
          pitch: 45.210526315789465,
          style: 'dark',
          zoom: 2.4,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <MyPointLayer data={data} />
        <Control type="scale" position="bottomright" />
      </MapboxScene>
    </>
  );
});

export default MyScene;
