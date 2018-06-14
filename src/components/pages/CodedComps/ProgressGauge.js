import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const ProgressGaugeWrapper = styled.svg`
  position: relative;
  width: 110%;
  height: 110%;
  filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.8));
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    transform: translate(3px, -4px) rotate(25deg);
  }
  svg#gauge-needle {
    stroke-width: 2px;
    stroke: #e4caa3;
    & line {
      transform-origin: 52% 50%;
    }
    filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.8)); /* not taking effect? FIXME? */
  }
`;

const ProgressGauge = props => {
  const progressDeg = (props.current / props.total) * 360;
  return (
    <ProgressGaugeWrapper>
      <svg viewBox="0 0 100 100">
        <filter id="number-grain">
          <feTurbulence type="turbulence" numOctaves="1" baseFrequency="1" result="turb" />
          <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
          <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
          <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
        </filter>
        <filter id="gauge-shad" x="0" y="0">
          <feDropShadow dx="-4" dy="4" stdDeviation="2" />
        </filter>

        <g fill="none" strokeWidth="6">
          {gaugeDB.dial.map((line, idx) => (
            <line key={line.id} stroke="#999" x1="50" y1="50" x2={line.x2} y2={line.y2} />
          ))}
        </g>
      </svg>

      <svg id="gauge-needle" viewBox="0 0 100 100">
        <line transform={`rotate(${progressDeg})`} x1="52" x2="46" y1="50" y2="2" />
      </svg>
    </ProgressGaugeWrapper>
  );
};

export default ProgressGauge;
// <line key={line.id} stroke={`hsl(36, ${55 - (idx)}%, ${77 - (idx)}%`} x1="50" y1="50" x2={line.x2} y2={line.y2} />
