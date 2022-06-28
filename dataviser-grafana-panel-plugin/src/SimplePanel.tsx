import React, { useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Scene, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();

  const defaultList = [
    {
      "w": 19.1,
      "t": 24.6,
      "j": 108.6167,
      "platform": 'IOS',
    },
    {
      "w": 20,
      "t": 40,
      "j": 110.25,
      "platform": 'IOS',
    },
    {
      "w": 23.7936,
      "t": 19.6,
      "j": 114.7297,
      "platform": 'Android',
    },
    {
      "w": 23.7106,
      "t": 19.4, // 业务数量
      "j": 113.085,
      "platform": 'Android',
    },
  ];
  
  type platformType = 'IOS' | 'Android';
  const setColor = (platform: platformType) => {
    const platformMap = {
      'IOS': 'blue',
      'Android': 'red',
    }
    return platformMap[platform];
  }
  
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 35.210526315789465,
        style: 'dark',
        center: [ 104.288144, 31.239692 ],
        zoom: 4.4
      })
    });
    scene.on('loaded', () => {
      // fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
      //   .then(res => res.json())
      //   .then(data => {
      const pointLayer = new PointLayer({})
        .source(defaultList, {
          parser: {
            type: 'json',
            x: 'j',
            y: 'w'
          }
        })
        .shape('cylinder')
        .size('t', function(level) {
          return [ 4, 4, level * 2 + 20 ];
        })
        .animate(true)
        .active(true)
        .color('platform', setColor)
        .style({
          opacity: 1.0
        });
      scene.addLayer(pointLayer);
      // });
    });
  }, [])

return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div id="map">ahahahaha</div>
      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    textLink: css`
      width: 250px;
      padding: 10px;
    `,
    textLinkBox: css`
      width: 250px;
      height: 150px;
    `,
  };
});
