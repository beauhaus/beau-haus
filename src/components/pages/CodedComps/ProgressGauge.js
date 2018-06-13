import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const ProgressGaugeSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  filter: drop-shadow(-1px 1px 1px black);
  mix-blend-mode: multiply;
  & > #gauge-needle {
    transform-origin: 52% 50%;
    stroke-width: 2px;
    stroke: #e4caa3;
  }
`;

const ProgressGauge = props => {
  const progressDeg = (props.current / props.total) * 360;
  return (
    <ProgressGaugeSVG viewBox="0 0 100 100">
      <filter id="gauge-shad" x="0" y="0">
        <feDropShadow dx="-4" dy="4" stdDeviation="2" />
      </filter>

      <g fill="none" strokeWidth="6" filter="url(#grain)">
        {gaugeDB.dial.map((line, idx) => (
          <line key={line.id} stroke={`hsl(200, 10%, ${50 - (idx)}%`} x1="50" y1="50" x2={line.x2} y2={line.y2} />
        ))}
      </g>
      <line id="gauge-needle" transform={`rotate(${progressDeg})`} x1="52" x2="46" y1="50" y2="2" />
    </ProgressGaugeSVG>
  );
};

export default ProgressGauge;
