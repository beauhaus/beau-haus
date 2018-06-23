import React, { Component } from 'react';
import styled from 'styled-components';

// import gaugeDB from '../../../data/gaugeDB.json';
import moonDB from '../../../data/moonDB.json';


const MoonWrapper = styled.div`  /*wrapper SVG? or Div? */
  position: relative;
  width: 100%;
  height: 100%;
  filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.8));
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
  }
  #rt-r3-1 {
    transform-origin: 5% 50%;
    fill: #aaa;
  }

  #rt-r3-2 {
    transform-origin: 15% 50%;
    fill: #aaa;
  }

  #rt-r3-3 {
    transform-origin: 25% 50%;
    fill: #aaa;
  }

  #rt-r3-4 {
    transform-origin: 35% 50%;
    fill: #aaa;
  }

  #rt-r4-1 {
    transform-origin: 5% 70%;
    fill: #aaa;
  }

  #rt-r4-2 {
    transform-origin: 15% 70%;
    fill: #aaa;
  }

  #rt-r4-3 {
    transform-origin: 25% 70%;
    fill: #aaa;
  }

  #rt-r4-4 {
    fill: #aaa;
    transform-origin: 35% 70%;
  }

  #rt-r4-6 {
    transform-origin: 55% 70%;
    fill: #aaa;
  }

  #rt-r4-5 {
    transform-origin: 45% 70%;
    fill: #aaa;
  }

  #rt-r4-7 {
    transform-origin: 65% 70%;
    fill: #aaa;
  }

  #rt-r4-8 {
    transform-origin: 75% 70%;
    fill: #aaa;
  }

  #rt-r4-9 {
    transform-origin: 85% 70%;
    fill: #aaa;
  }

  #rt-r4-10 {
    transform-origin: 95% 70%;
    fill: #aaa;
  }

  #rt-r1-1 {
    transform-origin: 5% 10%;
    fill: #aaa;
  }

  #rt-r1-2 {
    transform-origin: 15% 10%;
    fill: #aaa;
  }

  #rt-r1-3 {
    transform-origin: 25% 10%;
    fill: #aaa;
  }

  #rt-r1-4 {
    transform-origin: 35% 10%;
    fill: #aaa;
  }

  #rt-r2-1 {
    transform-origin: 5% 30%;
    fill: #aaa;
  }

  #rt-r2-2 {
    transform-origin: 15% 30%;
    fill: #aaa;
  }

  #rt-r2-3 {
    transform-origin: 25% 30%;
    fill: #aaa;
  }

  #rt-r2-4 {
    transform-origin: 35% 30%;
    fill: #aaa;
  }

  #rt-r3-5 {
    transform-origin: 45% 50%;
    fill: #aaa;
  }

  #rt-r3-6 {
    transform-origin: 55% 50%;
    fill: #aaa;
  }

  #rt-r3-7 {
    transform-origin: 65% 50%;
    fill: #aaa;
  }

  #rt-r3-8 {
    transform-origin: 75% 50%;
    fill: #aaa;
  }

  #rt-r3-9 {
    transform-origin: 85% 50%;
    fill: #aaa;
  }

  #rt-r1-6 {
    transform-origin: 55% 10%;
    fill: #aaa;
  }

  #rt-r1-7 {
    transform-origin: 65% 10%;
    fill: #aaa;
  }

  #rt-r1-8 {
    transform-origin: 75% 10%;
    fill: #aaa;
  }

  #rt-r2-5 {
    transform-origin: 45% 30%;
    fill: #aaa;
  }

  #rt-r2-6 {
    transform-origin: 55% 30%;
    fill: #aaa;
  }

  #rt-r2-7 {
    transform-origin: 65% 30%;
    fill: #aaa;
  }

  #rt-r2-8 {
    transform-origin: 75% 30%;
    fill: #aaa;
  }


  #rt-r3-10 {
    transform-origin: 95% 50%;
    fill: #aaa;
  }

  #rt-r1-5 {
    transform-origin: 45% 10%;
    fill: #aaa;
  }


  #rt-r1-9 {
    transform-origin: 85% 10%;
    fill: #aaa;
  }

  #rt-r1-10 {
    transform-origin: 95% 10%;
    fill: #aaa;
  }

  #rt-r2-9 {
    transform-origin: 85% 30%;
    fill: #aaa;
  }

  #rt-r2-10 {
    transform-origin: 95% 30%;
    fill: #aaa;
  }

  
  #rt-r5-1 {
    transform-origin: 05% 90%;
    fill: #aaa;
  }

  #rt-r5-2 {
    transform-origin: 15% 90%;
    fill: #aaa;
  }

  #rt-r5-3 {
    transform-origin: 25% 90%;
    fill: #aaa;
  }

  #rt-r5-4 {
    transform-origin: 35% 90%;
    fill: #aaa;
  }

  #rt-r5-5 {
    transform-origin: 45% 90%;
    fill: #aaa;
  }

  #rt-r5-6 {
    transform-origin: 55% 90%;
    fill: #aaa;
  }

  #rt-r5-7 {
    transform-origin: 65% 90%;
    fill: #aaa;
  }

  #rt-r5-8 {
    transform-origin: 75% 90%;
    fill: #aaa;
  }

  #rt-r5-9 {
    transform-origin: 85% 90%;
    fill: #aaa;
  }

  #rt-r5-10 {
    transform-origin: 95% 90%;
    fill: #aaa;
  }

  #lt-r1-1 {
    transform-origin: 5% 0%;
    fill: #ccc;
  }

  #lt-r1-2 {
    transform-origin: 15% 0%;
    fill: #ccc;
  }

  #lt-r1-3 {
    transform-origin: 25% 0%;
    fill: #ccc;
  }

  #lt-r1-4 {
    transform-origin: 35% 0%;
    fill: #ccc;
  }

  #lt-r1-5 {
    transform-origin: 45% 0%;
    fill: #ccc;
  }

  #lt-r1-6 {
    transform-origin: 55% 0%;
    fill: #ccc;
  }

  #lt-r1-7 {
    transform-origin: 65% 0%;
    fill: #ccc;
  }

  #lt-r1-8 {
    transform-origin: 75% 0%;
    fill: #ccc;
  }

  #lt-r1-9 {
    transform-origin: 85% 0%;
    fill: #ccc;
  }

  #lt-r1-10 {
    transform-origin: 95% 0%;
    fill: #ccc;
  }

  #lt-r2-8 {
    transform-origin: 75% 20%;
    fill: #ccc;
  }

  #lt-r2-7 {
    transform-origin: 65% 20%;
    fill: #ccc;
  }

  #lt-r2-6 {
    transform-origin: 55% 20%;
    fill: #ccc;
  }

  #lt-r2-5 {
    transform-origin: 45% 20%;
    fill: #ccc;
  }


  #lt-r4-8 {
    transform-origin: 75% 60%;
    fill: #ccc;
  }

  #lt-r4-7 {
    transform-origin: 65% 60%;
    fill: #ccc;
  }

  #lt-r4-6 {
    transform-origin: 55% 60%;
    fill: #ccc;
  }

  #lt-r4-5 {
    transform-origin: 45% 60%;
    fill: #ccc;
  }

  #lt-r3-8 {
    transform-origin: 75% 40%;
    fill: #ccc;
  }

  #lt-r3-7 {
    transform-origin: 65% 40%;
    fill: #ccc;
  }






  #lt-r2-10 {
    transform-origin: 95% 20%;
    fill: #ccc;
  }

  #lt-r2-9 {
    transform-origin: 85% 20%;
    fill: #ccc;
  }

  #lt-r4-10 {
    transform-origin: 95% 60%;
    fill: #ccc;
  }

  #lt-r4-9 {
    transform-origin: 85% 60%;
    fill: #ccc;
  }

  #lt-r3-10 {
    transform-origin: 95% 40%;
    fill: #ccc;
  }

  #lt-r3-9 {
    transform-origin: 85% 40%;
    fill: #ccc;
  }

  #lt-r3-6 {
    transform-origin: 55% 40%;
    fill: #ccc;
  }

  #lt-r3-5 {
    transform-origin: 45% 40%;
    fill: #ccc;
  }

  #lt-r2-4 {
    transform-origin: 35% 20%;
    fill: #ccc;
  }

  #lt-r2-3 {
    transform-origin: 25% 20%;
    fill: #ccc;
  }

  #lt-r2-2 {
    transform-origin: 15% 20%;
    fill: #ccc;
  }

  #lt-r2-1 {
    transform-origin: 5% 20%;
    fill: #ccc;
  }

  #lt-r4-4 {
    transform-origin: 35% 60%;
    fill: #ccc;
  }

  #lt-r4-3 {
    transform-origin: 25% 60%;
    fill: #ccc;
  }

  #lt-r4-2 {
    transform-origin: 15% 60%;
    fill: #ccc;
  }

  #lt-r4-1 {
    transform-origin: 5% 60%;
    fill: #ccc;
  }

  #lt-r3-4 {
    transform-origin: 35% 40%;
    fill: #ccc;
  }

  #lt-r3-3 {
    transform-origin: 25% 40%;
    fill: #ccc;
  }

  #lt-r3-2 {
    transform-origin: 15% 40%;
    fill: #ccc;
  }


  #lt-r3-1 {
    transform-origin: 5% 40%;
    fill: #ccc;
  }

  #lt-r5-8 {
    transform-origin: 75% 80%;
    fill: #ccc;
  }

  #lt-r5-7 {
    transform-origin: 65% 80%;
    fill: #ccc;
  }

  #lt-r5-10 {
    transform-origin: 95% 80%;
    fill: #ccc;
  }

  #lt-r5-9 {
    transform-origin: 85% 80%;
    fill: #ccc;
  }

  #lt-r5-6 {
    transform-origin: 55% 80%;
    fill: #ccc;
  }

  #lt-r5-5 {
    transform-origin: 45% 80%;
    fill: #ccc;
  }

  #lt-r5-4 {
    transform-origin: 35% 80%;
    fill: #ccc;
  }

  #lt-r5-3 {
    transform-origin: 25% 80%;
    fill: #ccc;
  }

  #lt-r5-2 {
    transform-origin: 15% 80%;
    fill: #ccc;
  }

  #lt-r5-1 {
    transform-origin: 5% 80%;
    fill: #ccc;
  }

  #lt-r6-8 {
    transform-origin: 75% 100%;
    fill: #ccc;
  }

  #lt-r6-7 {
    transform-origin: 65% 100%;
    fill: #ccc;
  }

  #lt-r6-10 {
    transform-origin: 95% 100%;
    fill: #ccc;
  }

  #lt-r6-9 {
    transform-origin: 85% 100%;
    fill: #ccc;
  }

  #lt-r6-6 {
    transform-origin: 55% 100%;
    fill: #ccc;
  }

  #lt-r6-5 {
    transform-origin: 45% 100%;
    fill: #ccc;
  }

  #lt-r6-4 {
    transform-origin: 35% 100%;
    fill: #ccc;
  }

  #lt-r6-3 {
    transform-origin: 25% 100%;
    fill: #ccc;
  }

  #lt-r6-2 {
    transform-origin: 15% 100%;
    fill: #ccc;
  }

  #lt-r6-1 {
    transform-origin: 5% 100%;
    fill: #ccc;
  }
  #geometry {
    clip-path: url(#moon-clip);
  }

  `;
  // filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.8)); /* not taking effect? FIXME? */

const Moon = props => {

  const progressDeg = (props.current / props.total) * 360;
  return (
    <MoonWrapper>
      <svg viewBox="0 0 400 400">
      <defs>
        <filter id="number-grain">
          <feTurbulence type="turbulence" numOctaves="1" baseFrequency="1" result="turb" />
          <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
          <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
          <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
        </filter>
        <filter id="gauge-shad" x="0" y="0">
          <feDropShadow dx="-4" dy="4" stdDeviation="2" />
        </filter>
        <clipPath id="moon-clip">
          <circle cx="200" cy="200" r="200"  />
        </clipPath>
      </defs>
        <g id="geometry">
          {moonDB.moon.map((item, idx) => (
            <polygon transform={`rotate(${progressDeg})`} key={item.id} id={item.id} points={item.points} />
          ))}
        </g>
      </svg>
    </MoonWrapper>
  );
};

// <svg id="gauge-needle" viewBox="0 0 100 100">
//         <line transform={`rotate(${progressDeg})`} x1="52" x2="46" y1="50" y2="2" />
//       </svg>

export default Moon;
