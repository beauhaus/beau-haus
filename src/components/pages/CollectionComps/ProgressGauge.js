import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const ProgressGaugeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & #eye-sclera {
      fill: #777;
      mix-blend-mode: color-dodge;
      opacity: 0.5;
    }
    & #eye-bg-top {
      opacity: 1;
      fill: #777;
      mix-blend-mode: difference;
    }
    & #eye-bg-bot {
      opacity: 1;
      fill: #333;
    }
    & > #gauge-needle {
      transform-origin: 50% 50%;
      stroke-width: 4px;
      stroke: #aaa;
      stroke: yellow;
    }
  }
`;

const ProgressGauge = props => {
  const progressDeg = (props.current / props.total) * 360;
  return (
    <ProgressGaugeWrapper>
      <svg viewBox="0 0 250 150">
        <g filter="url(#btn-grain)">
          <path id="eye-bg-top" d="M250 0v150H0" />
          <path id="eye-bg-bot" d="M0 150V0h250" />
          <path
            id="eye-sclera"
            d="M125 33c-38.6 0-73.1 16.3-96 42 22.9 25.7 57.4 42 96 42s73.1-16.3 96-42c-22.9-25.7-57.4-42-96-42z"
          />
        </g>
        <filter id="gauge-shad" x="0" y="0">
          <feDropShadow dx="-4" dy="4" stdDeviation="2" />
        </filter>

        <g fill="none" strokeWidth="6" strokeDasharray="0 20 20 0" filter="url(#gauge-shad)">
          {gaugeDB.dial.map((line, idx) => (
            <line key={line.id} stroke={`hsl(342, 42%, ${50 - idx}%`} x1="125" y1="75" x2={line.x2} y2={line.y2} />
          ))}
        </g>
        <line id="gauge-needle" transform={`rotate(${progressDeg})`} x1="125" x2="125" y1="75" y2="32" />
      </svg>
    </ProgressGaugeWrapper>
  );
};

export default ProgressGauge;

/*
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="150">
  <g>
  <path fill="gray" d="M250 0v150H0"/>
  <path fill="#B3B3B3" d="M0 150V0h250"/>
  <path fill="#FFF" d="M125 33c-38.6 0-73.1 16.3-96 42 22.9 25.7 57.4 42 96 42s73.1-16.3 96-42c-22.9-25.7-57.4-42-96-42z"/>
  </g> 
</svg>

************PREVIOUS EYE********* 

<svg id="progress-gauge" viewBox="0 0 100 100">
    <filter id="gauge-shad" x="0" y="0">
        <feDropShadow dx="-4" dy="4" stdDeviation="2" />
    </filter>
    <g fill="none" strokeWidth="6" strokeDasharray="0 20 20 0" filter="url(#gauge-shad)">
        {gaugeDB.dial.map((line, idx) => (
        <line key={line.id} stroke={`hsl(342, 42%, ${50 - idx}%`} x1="50" y1="50" x2={line.x2} y2={line.y2} />
        ))}
    </g>
    <line id="gauge-needle" transform={`rotate(${progressDeg})`} x1="50" y1="50" x2="50" y2="2" />
</svg>

      */
