import React, { Component } from 'react';
import styled from 'styled-components';

const NumberDisplaySVG = styled.svg`
    position: absolute;
    top: 0;
    right: 0;
    stroke-width: 0;
    filter: drop-shadow(-2px 2px 1px black);
    width: 100%;
    height: 100%;
    padding: 2%;
    filter: saturate(90%) brightness(.9) drop-shadow(-2px 2px 1px rgba(0,0,0,0.5));
    & > text {
      fill: #555;
      mix-blend-mode: multiply;
      font-family: 'Plaster', monospace, sans-serif;
      font-size: 2.5vw;
    }
`;

const NumberDisplay = props => {
  const bgFill = '#545454';
  return (
    <NumberDisplaySVG id="grain-svg" viewBox="0 0 50 50" preserveAspectRatio="none">
        <defs>
          <filter id="grain">
            <feTurbulence type="turbulence" numOctaves="1" baseFrequency="3" result="turb" />
            <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
            <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
            <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
          </filter>
          <clipPath id="myClip">
            <rect x="0" y="0" width="100" height="100" cx="30" cy="25" r="25" />
          </clipPath>
        </defs>
        <rect id="view" width="100" height="100" fill={bgFill} x="0" y="0" filter="url(#grain)" />
        {props.current ? (
          <text x="0" y="45">
            {props.current}
          </text>
        ) : (
          ''
        )}
      </NumberDisplaySVG>
  );
};

export default NumberDisplay;