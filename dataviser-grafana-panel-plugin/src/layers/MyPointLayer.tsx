import React from 'react';
import { PointLayer } from "@antv/l7-react";

const defaultList = [
  {
    w: 19.1,
    t: 24.6,
    j: 108.6167,
    platform: "IOS"
  },
  {
    w: 20,
    t: 40,
    j: 110.25,
    platform: "IOS"
  },
  {
    w: 23.7936,
    t: 19.6,
    j: 114.7297,
    platform: "Android"
  },
  {
    w: 23.7106,
    t: 19.4, // 业务数量
    j: 113.085,
    platform: "Android"
  }
];

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

const MyPointLayer = ({ data }) => {
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
