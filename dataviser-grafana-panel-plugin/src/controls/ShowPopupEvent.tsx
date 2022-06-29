import React from 'react';
import { LayerEvent } from '@antv/l7-react';
import {FC} from "react";

const ShowPopupEvent: FC<{
  showPopup: (args: any) => void;
}> = (props) => {
  const { showPopup } = props;
  return (
    <LayerEvent type={"mousemove"} handler={showPopup} />
  )
}

export default ShowPopupEvent;
