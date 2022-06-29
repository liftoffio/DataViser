import React, {FC} from 'react';
import { Popup } from '@antv/l7-react';
import {PopupDataType} from "../MyScene";

const PopupInfo: FC<{
  popupData: PopupDataType
}> = (props) => {
  const { popupData } = props;

  return (
    <>
      {popupData &&
        <Popup lnglat={popupData.lngLat}>
          <ul style={{
            margin: 0,
            color: '#000',
            padding: "0 10px"
          }}>
            <li>Country: {popupData.feature.country}</li>
            <li>City: {popupData.feature.city}</li>
            <li>Platform: {popupData.feature.platform}</li>
            <li>Device make: {popupData.feature.device_make}</li>
            <li>Date: {popupData.feature.timestamp}</li>
            <li>Value: {popupData.feature.value}</li>
          </ul>
        </Popup>
      }
    </>
  )
}

export default PopupInfo;
