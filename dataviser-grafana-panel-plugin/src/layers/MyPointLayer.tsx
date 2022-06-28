import React from 'react';
import { PointLayer } from "@antv/l7-react";

type platformType = 'ios' | 'android' | 'windows' | 'amazon';
const setColor = (platform: platformType) => {
  const platformMap = {
    'ios': 'blue',
    'android': 'red',
    'windows': 'green',
    'amazon': 'orange',
  }
  return platformMap[platform];
};

const MyPointLayer = ({ data }: {data: Array<any>}) => {
  return (
    <PointLayer
      key={2}
      options={{
        autoFit: true
      }}
      source={{
        data,
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
        field: "platform",
        values: setColor
      }}
      active={{ option: true }}
      style={{
        opacity: 1.0
      }}
      animate={{
        enable: true
      }}
    />
  );
};

export default MyPointLayer;
