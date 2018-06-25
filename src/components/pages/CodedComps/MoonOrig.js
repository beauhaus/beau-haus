import React, { Component } from 'react';
import styled from 'styled-components';

// import gaugeDB from '../../../data/gaugeDB.json';
import moonDB from '../../../data/moonDB.json';

const MoonWrapper = styled.svg`  /*wrapper SVG? or Div? */
    position: absolute;
    left: 0;
    top: 0;
   border: 1px solid teal;
   transform-origin: 50% 50%;
  }

  #rt-r1-1 {
    transform-origin: 5% 10%;
  }

  #rt-r1-2 {
    transform-origin: 15% 10%;
  }

  #rt-r1-3 {
    transform-origin: 25% 10%;
  }

  #rt-r1-4 {
    transform-origin: 35% 10%;
  }
  
  #rt-r1-5 {
    transform-origin: 45% 10%;
  }

  #rt-r1-6 {
    transform-origin: 55% 10%;
  }

  #rt-r1-7 {
    transform-origin: 65% 10%;
  }

  #rt-r1-8 {
    transform-origin: 75% 10%;
  }

  #rt-r1-9 {
    transform-origin: 85% 10%;
  }

  #rt-r1-10 {
    transform-origin: 95% 10%;
  }

  #rt-r2-1 {
    transform-origin: 5% 30%;
  }

  #rt-r2-2 {
    transform-origin: 15% 30%;
  }

  #rt-r2-3 {
    transform-origin: 25% 30%;
  }

  #rt-r2-4 {
    transform-origin: 35% 30%;
  }

  #rt-r2-5 {
    transform-origin: 45% 30%;
  }

  #rt-r2-6 {
    transform-origin: 55% 30%;
  }

  #rt-r2-7 {
    transform-origin: 65% 30%;
  }

  #rt-r2-8 {
    transform-origin: 75% 30%;
  }

  #rt-r2-9 {
    transform-origin: 85% 30%;
  }

  #rt-r2-10 {
    transform-origin: 95% 30%;
  }
  
  #rt-r3-1 {
    transform-origin: 5% 50%;
  }

  #rt-r3-2 {
    transform-origin: 15% 50%;
  }

  #rt-r3-3 {
    transform-origin: 25% 50%;
  }

  #rt-r3-4 {
    transform-origin: 35% 50%;
  }

  #rt-r3-5 {
    transform-origin: 45% 50%;
  }

  #rt-r3-6 {
    transform-origin: 55% 50%;
  }

  #rt-r3-7 {
    transform-origin: 65% 50%;
  }

  #rt-r3-8 {
    transform-origin: 75% 50%;
  }

  #rt-r3-9 {
    transform-origin: 85% 50%;
  }

  #rt-r3-10 {
    transform-origin: 95% 50%;
  }
  
  #rt-r4-1 {
    transform-origin: 5% 70%;
  }

  #rt-r4-2 {
    transform-origin: 15% 70%;
  }

  #rt-r4-3 {
    transform-origin: 25% 70%;
  }

  #rt-r4-4 {
    transform-origin: 35% 70%;
  }

  #rt-r4-5 {
    transform-origin: 45% 70%;
  }

  #rt-r4-6 {
    transform-origin: 55% 70%;
  }

  #rt-r4-7 {
    transform-origin: 65% 70%;
  }

  #rt-r4-8 {
    transform-origin: 75% 70%;
  }

  #rt-r4-9 {
    transform-origin: 85% 70%;
  }

  #rt-r4-10 {
    transform-origin: 95% 70%;
  }

  #rt-r5-1 {
    transform-origin: 05% 90%;
  }

  #rt-r5-2 {
    transform-origin: 15% 90%;
  }

  #rt-r5-3 {
    transform-origin: 25% 90%;
  }

  #rt-r5-4 {
    transform-origin: 35% 90%;
  }

  #rt-r5-5 {
    transform-origin: 45% 90%;
  }

  #rt-r5-6 {
    transform-origin: 55% 90%;
  }

  #rt-r5-7 {
    transform-origin: 65% 90%;
  }

  #rt-r5-8 {
    transform-origin: 75% 90%;
  }

  #rt-r5-9 {
    transform-origin: 85% 90%;
  }

  #rt-r5-10 {
    transform-origin: 95% 90%;
  }

  #lt-r1-1 {
    transform-origin: 5% 0%;
  }

  #lt-r1-2 {
    transform-origin: 15% 0%;
  }

  #lt-r1-3 {
    transform-origin: 25% 0%;
  }

  #lt-r1-4 {
    transform-origin: 35% 0%;
  }

  #lt-r1-5 {
    transform-origin: 45% 0%;
  }

  #lt-r1-6 {
    transform-origin: 55% 0%;
  }

  #lt-r1-7 {
    transform-origin: 65% 0%;
  }

  #lt-r1-8 {
    transform-origin: 75% 0%;
  }

  #lt-r1-9 {
    transform-origin: 85% 0%;
  }

  #lt-r1-10 {
    transform-origin: 95% 0%;
  }

  #lt-r2-1 {
    transform-origin: 5% 20%;
  }
  
  #lt-r2-2 {
    transform-origin: 15% 20%;
  }

  #lt-r2-3 {
    transform-origin: 25% 20%;
  }

  #lt-r2-4 {
    transform-origin: 35% 20%;
  }

  #lt-r2-5 {
    transform-origin: 45% 20%;
  }

  #lt-r2-6 {
    transform-origin: 55% 20%;
  }  

  #lt-r2-7 {
    transform-origin: 65% 20%;
  }    
  
  #lt-r2-8 {
    transform-origin: 75% 20%;
  }    
  
  #lt-r2-9 {
    transform-origin: 85% 20%;
  }

  #lt-r2-10 {
    transform-origin: 95% 20%;
  }

  #lt-r3-1 {
    transform-origin: 5% 40%;
  }
  
  #lt-r3-2 {
    transform-origin: 15% 40%;
  }
  
  #lt-r3-3 {
    transform-origin: 25% 40%;
  }

  #lt-r3-4 {
    transform-origin: 35% 40%;
  }

  #lt-r3-5 {
    transform-origin: 45% 40%;
  }

  #lt-r3-6 {
    transform-origin: 55% 40%;
  }
  
  #lt-r3-7 {
    transform-origin: 65% 40%;
  }
  
  #lt-r3-8 {
    transform-origin: 75% 40%;
  }
  
  #lt-r3-9 {
    transform-origin: 85% 40%;
  }
  
  #lt-r3-10 {
    transform-origin: 95% 40%;
  }

  #lt-r4-1 {
    transform-origin: 5% 60%;
  }

  #lt-r4-2 {
    transform-origin: 15% 60%;
  }

  #lt-r4-3 {
    transform-origin: 25% 60%;
  }
  
  #lt-r4-4 {
    transform-origin: 35% 60%;
  }

  #lt-r4-5 {
    transform-origin: 45% 60%;
  }

  #lt-r4-6 {
    transform-origin: 55% 60%;
  }

  #lt-r4-7 {
    transform-origin: 65% 60%;
  }
  
  #lt-r4-8 {
    transform-origin: 75% 60%;
  }

  #lt-r4-9 {
    transform-origin: 85% 60%;
  }

  #lt-r4-10 {
    transform-origin: 95% 60%;
  }
  
  #lt-r5-1 {
    transform-origin: 5% 80%;
  }
  
  #lt-r5-2 {
    transform-origin: 15% 80%;
  }
  
  #lt-r5-3 {
    transform-origin: 25% 80%;
  }
  
  #lt-r5-4 {
    transform-origin: 35% 80%;
  }

  #lt-r5-5 {
    transform-origin: 45% 80%;
  }

  #lt-r5-6 {
    transform-origin: 55% 80%;
  }

  #lt-r5-7 {
    transform-origin: 65% 80%;
  }

  #lt-r5-8 {
    transform-origin: 75% 80%;
  }

  #lt-r5-9 {
    transform-origin: 85% 80%;
  }

  #lt-r5-10 {
    transform-origin: 95% 80%;
  }
  
  #lt-r6-1 {
    transform-origin: 5% 100%;
  }

  #lt-r6-2 {
    transform-origin: 15% 100%;
  }

  #lt-r6-3 {
    transform-origin: 25% 100%;
  }

  #lt-r6-4 {
    transform-origin: 35% 100%;
  }

  #lt-r6-5 {
    transform-origin: 45% 100%;
  }

  #lt-r6-6 {
    transform-origin: 55% 100%;
  }

  #lt-r6-7 {
    transform-origin: 65% 100%;
  }

  #lt-r6-8 {
    transform-origin: 75% 100%;
  }

  #lt-r6-9 {
    transform-origin: 85% 100%;
  }
  
  #lt-r6-10 {
    transform-origin: 95% 100%;
  }

  #geometry {
    clip-path: url(#moon-clip);
    /*
    transform: scale(1);
    */
  }
  polygon[id^="rt"] {
    fill: #61869e;
    transform-origin: 50% 50%;
  
    stroke-width: 1;
    stroke: #000;
  }
  polygon[id^="lt"] {
    fill: #aaa;
    stroke-width: 1;
    stroke: #000;
    transform-origin: 50% 50%;
  }
  #moon-bg {
    fill: #ddd;
  }
  #lt-r3-5 {
    fill: red;
    transform-origin: 45% 50%;
  }
  `;
// filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.8)); /* not taking effect? FIXME? */

const Moon = props => {
  console.log('P>Moon: ', props);
  const progressDeg = (props.current / props.total) * 360;
  return (
    <MoonWrapper viewBox="0 0 200 200">
      <defs>
        <clipPath id="moon-clip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <circle id="moon-bg" cx="200" cy="200" r="100" filter="url(#number-grain)" />
      {moonDB.moon.map((item, idx) => (
        <svg viewBox="75 75 200 200" preserveAspectRatio="none" width="100%">
          <polygon transform={`rotate(${progressDeg})`} key={item.id} id={item.id} points={item.points} />
        </svg>
      ))}
    </MoonWrapper>
  );
};

// <g id="geometry" opacity="0.2" >
// </g>
// <transform="rotate(deg, cx, cy)"

// <filter id="number-grain">
//   <feTurbulence type="turbulence" numOctaves="1" baseFrequency="1" result="turb" />
//   <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
//   <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
//   <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
// </filter>
// <filter id="gauge-shad" x="0" y="0">
//   <feDropShadow dx="-4" dy="4" stdDeviation="2" />
// </filter>
export default Moon;
