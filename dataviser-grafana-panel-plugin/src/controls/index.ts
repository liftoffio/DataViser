import { Scale, Zoom } from "@antv/l7";
import ShowPopupEvent from "./ShowPopupEvent";

const zoomControl = new Zoom({
  position: "rightcenter"
});

const scaleControl = new Scale({
  position: "bottomright"
});

export { zoomControl, scaleControl, ShowPopupEvent };
