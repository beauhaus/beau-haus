import React, { Component } from 'react';
import styled from 'styled-components';

const CycleButtonSVG = styled.svg`
  filter: drop-shadow(-5px 5px 2px black);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0, 0) rotate(-10deg);
  &:hover {
    cursor: pointer;
    filter: saturate(200%) brightness(1) drop-shadow(-5px 4px 3px black);
  }
`;
const CycleButton = props => {
  const btnFill = 'hsl(0, 0%, 38.5%)';
  return (
    <CycleButtonSVG id="play-arrow" viewBox="-140 50 420 360" preserveAspectRatio="none">
      <filter id="btn-grain">
        <feTurbulence type="turbulence" numOctaves="3" baseFrequency=".2" result="turb" />
        <feComposite in="turb" operator="arithmetic" k1="1" k2="1" k3=".3" result="result1" />
        <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
        <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
      </filter>

      <path
        id="play-arrow"
        fill="#e4caa3"
        strokeWidth="0"
        d="M274.8 195.8L135 353.9 116.2 56"
        filter="url(#btn-grain)"
      />
    </CycleButtonSVG>
  );
};

export default CycleButton;
