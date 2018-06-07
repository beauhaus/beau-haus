import React, { Component } from 'react';
import styled from 'styled-components';

const CycleBtn = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  border-width: 0px;
  box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0);
  z-index: 100;
  text-align: center;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0);
  }
  svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  h1 {
    mix-blend-mode: multiply;
    margin-top: 0;
    font-family: 'Plaster', monospace, sans-serif;
    font-size: 7.5vw;
    height: 100%;
    width: 100%;
    color: orangered;
    &:hover {
      cursor: pointer;
      text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.8);
    }
  }

  /*
    
    */
`;
const SlideCycleBtn = props => {
  // console.log("props>CycleBtn: ",props);
  // const testFill = '#99a';
  // const testFill = '#78989b';
  // const testFill = '#78989b';
  // const testFill = '#d8882d';
  const testFill = 'hsl(0, 0%, 61.5%)';
  // const testFill = "#daa4a4";
  // const testFill = '#78989b';
  // background-color: hsl(0, 0%, 38.5%);
  // color: hsl(0, 0%, 61.5%);

  return (
    <CycleBtn>
      <svg id="grain-svg" viewBox="0 0 50 50" preserveAspectRatio="none">
        <defs>
          <filter id="grain">
            <feTurbulence type="turbulence" numOctaves="1" baseFrequency="3" result="turb" />
            <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
            <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
            <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
          </filter>
        </defs>
        <rect id="view" width="100" height="100" fill={testFill} x="0" y="0" filter="url(#grain)" />
      </svg>
      <h1>{props.count}</h1>
    </CycleBtn>
  );
};

export default SlideCycleBtn;

/*
<svg id="CycleBtnSVG" viewBox="0 0 200 200" preserveAspectRatio="none">
      <defs>
        <filter id="grain">
          <feTurbulence type="turbulence" numOctaves="1" baseFrequency="3" result="turb" />
          <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
          <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
          <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
        </filter>
      </defs>
      <rect id="view" width="100%" height="100%" fill={testFill} x="0" y="0" filter="url(#grain)" />
    </svg>

*/
