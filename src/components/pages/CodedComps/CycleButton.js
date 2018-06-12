import React, { Component } from 'react';
import styled from 'styled-components';

const CycleButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 38.5%);
  overflow: hidden;
  position: relative;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 1;
  }
  &  #play-arrow {
    mix-blend-mode: difference;
    &:hover {
      mix-blend-mode: screen; 
    }
  }
`;
const CycleButton = props => {
  const btnFill = 'hsl(0, 0%, 38.5%)';
  return (
    <CycleButtonWrapper>
      <svg id="grain-svg" viewBox="0 0 50 50" preserveAspectRatio="none">
        <defs>
          <filter id="btn-grain">
            <feTurbulence type="turbulence" numOctaves="3" baseFrequency="1" result="turb" />
            <feComposite in="turb" operator="arithmetic" k1="1" k2="1" k3=".3" result="result1" />
            <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
            <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
          </filter>
        </defs>
        <rect id="view" width="100" height="100" fill={btnFill} x="0" y="0" filter="url(#btn-grain)" />
      </svg>
      <svg id="play-arrow" viewBox="-40 45 400 400" preserveAspectRatio="none">
        <path fill="#FFA321" strokeWidth="0"  d="M274.8 195.8L135 353.9 116.2 56" />
      </svg>
    </CycleButtonWrapper>
  );
};

export default CycleButton;
