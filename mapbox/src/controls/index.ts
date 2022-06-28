import { Scale, Zoom } from "@antv/l7";

const zoomControl = new Zoom({
  position: "rightcenter"
});

const scaleControl = new Scale({
  position: "bottomright"
});

export { zoomControl, scaleControl };
