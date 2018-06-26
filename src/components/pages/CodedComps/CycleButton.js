import React, { Component } from 'react';
import styled from 'styled-components';

const CycleButtonSVG = styled.svg`
  filter: drop-shadow(-2px 2px 1px black);
  position: absolute;
  top: 14vh;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  transform: translate(-50px, 0) rotate(-8deg);
  &:hover {
    cursor: pointer;
    filter: saturate(150%)  drop-shadow(-4px 4px 2px rgba(0,0,0,0.8));
  }
`;
const CycleButton = props => {
  const btnFill = 'hsl(0, 0%, 38.5%)';
  // <CycleButtonSVG id="play-arrow" viewBox="-140 50 420 360" preserveAspectRatio="none">
  return (
    <CycleButtonSVG id="play-arrow" viewBox="0 0 400 400" preserveAspectRatio="none">
    <defs>
      <filter id="btn-grain">
        <feTurbulence type="turbulence" numOctaves="3" baseFrequency=".2" result="turb" />
        <feComposite in="turb" operator="arithmetic" k1="1" k2="1" k3=".3" result="result1" />
        <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
        <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
      </filter>

      <clipPath id="play-arrow-clip">
        <polygon  points="1.5 3.6 197.8 200 1.5 396.4"/>
      </clipPath>
      </defs>

      <g id="btn-face" stroke="#000" strokeMiterlimit="10">
      <polygon fill="#BB3D3D" strokeWidth="3" points="1.5 3.6 197.8 200 1.5 396.4" clipPath="url(#play-arrow-clip)"/>
      <line x1="38.1" x2="71.9" y1="154.9" y2="121.1" fill="none" strokeWidth="6"/>
      <line x1="194.3" x2="136.5" y1="202.3" y2="144.5" fill="none" strokeWidth="10.2879"/>
      <line x1="118.8" x2="140.4" y1="163.2" y2="141.6" fill="none" strokeWidth="3"/>
      <line x1="152.8" x2="166.6" y1="186.2" y2="172.4" fill="none" strokeWidth="3"/>
    </g>
        </CycleButtonSVG>
  );
};

export default CycleButton;
