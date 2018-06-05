import React, { Component } from 'react';
import styled from 'styled-components';

const CycleBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0.8);
    z-index: 100;
    text-align: center;
    &:hover {
      cursor: pointer;
      box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0.8);
    }
    
overflow: hidden;
h1 {
  position: absolute;
    top: 2rem;
    left: 5rem;
    margin: 0;
    font-family: 'Plaster', monospace, sans-serif;
    font-size: 10rem;
    color: #555;
    text-shadow: -2px 2px 4px #ecdfcd;
    opacity: 1;
}

/*
    svg {
      position: absolute;
      left:0;
      right:0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    */
`
const SlideCycleBtn = props => {
console.log("props>CycleBtn: ",props);
//   const testFill = '#99a';
//   const testFill = '#0b9';
//   const testFill = '#a04';
  const testFill = '#fc0';
//   const testFill = '#0cf';
  // const testFill = '#78989b';

  
  return (
    <CycleBtn>
    <svg id="grain-svg" viewBox="0 0 200 200" preserveAspectRatio="none">
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