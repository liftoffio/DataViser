import React, { useState } from "react";
import { MapboxScene, Control } from "@antv/l7-react";
import { PopupInfo } from './components';
import MyPointLayer from './layers/MyPointLayer';

export type PopupDataType = { feature: any; lngLat: any } | null;

const MyScene = React.memo(function Map(props: { data: any[] }) {
  const { data } = props;
  const [popupData, setPopupData] = useState<PopupDataType>(null);

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
        <PopupInfo popupData={popupData} />
        <MyPointLayer data={data} setPopupData={setPopupData} />
        <Control type="scale" position="bottomright" />
      </MapboxScene>
    </>
  );
});

export default MyScene;
