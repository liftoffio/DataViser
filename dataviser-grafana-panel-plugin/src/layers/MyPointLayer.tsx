import React, { FC, Dispatch, SetStateAction} from 'react';
import { PointLayer } from "@antv/l7-react";
import { ShowPopupEvent } from '../controls';

type platformType = 'ios' | 'android' | 'windows' | 'amazon';
const setColor = (data: { platform: platformType}) => {
  const platformMap = {
    'ios': 'blue',
    'android': 'red',
    'windows': 'green',
    'amazon': 'orange',
  }
  return platformMap[data.platform];
};

const MyPointLayer: FC<{
  data: any[];
  setPopupData: Dispatch<SetStateAction<any>>;
}> = ({ data, setPopupData }) => {
  const layerData = data.map(item => ({ ...item, self: item }));
  // console.log(layerData);
  const showPopup = (args: { feature: any; lngLat: any}) => {
    setPopupData({
      feature: args.feature,
      lngLat: args.lngLat,
    });
  }

  return (
    <PointLayer
      key={2}
      options={{
        autoFit: true
      }}
      source={{
        data: layerData,
        parser: {
          type: "json",
          x: 'longitude',
          y: 'latitude',
        }
      }}
      shape={{
        values: "cylinder"
      }}
      size={{
        field: "value",
        values: (value) => {
          return [4, 4, value * 2 + 20];
        }
      }}
      color={{
        field: "self",
        values: setColor,
      }}
      active={{ option: true }}
      style={{
        opacity: 1.0
      }}
      animate={{
        enable: true
      }}
    >
      <ShowPopupEvent showPopup={showPopup} />
    </PointLayer>
  );
};

export default MyPointLayer;
