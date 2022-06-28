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

type platformType = "IOS" | "Android";
const setColor = (platform: platformType) => {
  const platformMap = {
    IOS: "blue",
    Android: "red"
  };
  return platformMap[platform];
};

const MyPointLayer = () => {
  return (
    <PointLayer
      key={2}
      options={{
        autoFit: true
      }}
      source={{
        data: defaultList,
        parser: {
          type: "json",
          x: "j",
          y: "w"
        }
      }}
      shape={{
        values: "cylinder"
      }}
      size={{
        field: "t",
        values: (t) => {
          return [4, 4, t * 2 + 20];
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
