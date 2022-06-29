import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, Checkbox } from '@grafana/ui';
import './index.css';
import MyScene from './MyScene';

interface Props extends PanelProps<SimpleOptions> {}

const DefaultPlatforms = ['ios', 'android', 'windows', 'amazon'];

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const [displayData, setDisplayData] = useState([]);
  const [originData, setOriginData] = useState([]);
  const [checkedPlatforms, setCheckedPlatforms] = useState(DefaultPlatforms);
  const styles = getStyles();

  const platformsOnChange = (v) => {
    let filteredPlatforms;
    if (checkedPlatforms.includes(v)) {
      filteredPlatforms = checkedPlatforms.filter((item) => item !== v.toLowerCase());
    } else {
      filteredPlatforms = checkedPlatforms;
      filteredPlatforms.push(v);
    }
    setCheckedPlatforms(filteredPlatforms);
    const filteredData = originData.filter((item) => {
      return filteredPlatforms.includes(item.platform?.toLowerCase());
    });
    setDisplayData(filteredData);
  };

  useEffect(() => {
    setDisplayData(data.series[0].fields[1].values.toArray());
    setOriginData(data.series[0].fields[1].values.toArray());
  }, [data]);

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
      <>
        <div
          className="slider"
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            width: '100%',
            height: '30px',
            backgroundColor: 'rgba(255, 255, 255, .1)',
          }}
        >
          <span>
            <strong>Filter By Platforms:&nbsp;</strong>
            <Checkbox
              label="ios"
              value="ios"
              checked={checkedPlatforms.includes('ios')}
              onClick={() => platformsOnChange('ios')}
            />
            &nbsp;
            <Checkbox
              label="android"
              value="android"
              checked={checkedPlatforms.includes('android')}
              onClick={() => platformsOnChange('android')}
            />
            &nbsp;
            <Checkbox
              label="windows"
              value="windows"
              checked={checkedPlatforms.includes('windows')}
              onClick={() => platformsOnChange('windows')}
            />
            &nbsp;
            <Checkbox
              label="amazon"
              value="amazon"
              checked={checkedPlatforms.includes('amazon')}
              onClick={() => platformsOnChange('amazon')}
            />
          </span>
        </div>
      </>
      <MyScene data={displayData} />
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
