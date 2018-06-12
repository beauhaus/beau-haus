import React, { Component } from 'react';
import styled from 'styled-components';

const NumberDisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  h1 {
    position: absolute;
    color: #ac5c5c;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -0vh;
    height: 100%;
    mix-blend-mode: multiply;
    font-family: 'Plaster', monospace, sans-serif;
    font-size: 8vw;
  }
`;

//FIXME: when current at "0"... "0" is rendered to DOM
const NumberDisplay = props => {
  const bgFill = 'hsl(0, 0%, 68.5%)';
  
  return (
    <NumberDisplayWrapper>
      <svg id="grain-svg" viewBox="0 0 50 50" preserveAspectRatio="none">
        <defs>
          <filter id="grain">
            <feTurbulence type="turbulence" numOctaves="1" baseFrequency="3" result="turb" />
            <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
            <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
            <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
          </filter>
        </defs>
        <rect id="view" width="100" height="100" fill={bgFill} x="0" y="0" filter="url(#grain)" />
      </svg>
      {props.current && <h1>{props.current}</h1>}
    </NumberDisplayWrapper>
  );
};

export default NumberDisplay;
