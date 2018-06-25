import React, { Component } from 'react';
import styled from 'styled-components';

import moonDB from '../../../data/moonDB.json';

const MoonWrapper = styled.svg`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    fill: #000;
  }

  #moon-bg {
    fill: #ddd;
  }
 
  #progress-needle {
    opacity: 0;
    stroke-width: 2;
    stroke: #000;
  }

  polygon[id^="rt"] {
    fill: #61869e;  
    stroke-width: 1;
    stroke: #000;
  }

  polygon[id^="lt"] {
    fill: #aaa;
    stroke-width: 1;
    stroke: #000;
  }
#progress-group {
  opacity: 0.2;
}
  `;
// transform-origin: 100 100;

// filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.8)); /* not taking effect? FIXME? */

const Moon = props => {
  console.log('P>Moon: ', props);
  const progressDeg = (props.current / props.total) * 360;
  return (
    <MoonWrapper className="moon-wrapper-svg" viewBox="0 0 300 300">
      <defs>
        <filter id="number-grain">
          <feTurbulence type="turbulence" numOctaves="1" baseFrequency="1" result="turb" />
          <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
          <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
          <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
        </filter>
        <clipPath id="moon-clip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <circle id="moon-bg" cx="100" cy="100" r="100" filter="url(#number-grain)" />

      <g id="progress-group" filter="url(#number-grain)" clipPath="url(#moon-clip)">
        <polygon id="rt-r1-1" points="0 80 0 0 40 40" transform={`rotate(${progressDeg}, 0, 40)`} />
        <polygon id="rt-r1-2" points="40 80 40 0 80 40" transform={`rotate(${progressDeg}, 40, 40)`} />
        <polygon id="rt-r1-3" points="80 80 80 0 120 40" transform={`rotate(${progressDeg}, 80, 40)`} />
        <polygon id="rt-r1-4" points="120 80 120 0 160 40" transform={`rotate(${progressDeg}, 120, 40)`} />
        <polygon id="rt-r1-5" points="160 80 160 0 200 40" transform={`rotate(${progressDeg}, 160, 40)`} />
        <polygon id="rt-r1-6" points="200 80 200 0 240 40" transform={`rotate(${progressDeg}, 200, 40)`} />

        <polygon id="rt-r2-1" points="0 160 0 80 40 120" transform={`rotate(${progressDeg}, 0, 120)`} />
        <polygon id="rt-r2-2" points="40 160 40 80 80 120" transform={`rotate(${progressDeg}, 40, 120)`} />
        <polygon id="rt-r2-3" points="80 160 80 80 120 120" transform={`rotate(${progressDeg}, 80, 120)`} />
        <polygon id="rt-r2-4" points="120 160 120 80 160 120" transform={`rotate(${progressDeg}, 120, 120)`} />
        <polygon id="rt-r2-5" points="160 160 160 80 200 120" transform={`rotate(${progressDeg}, 160, 120)`} />
        <polygon id="rt-r2-6" points="200 160 200 80 240 120" transform={`rotate(${progressDeg}, 200, 120)`} />

        <polygon id="rt-r3-1" points="0 240 0 160 40 200" transform={`rotate(${progressDeg}, 0, 200)`} />
        <polygon id="rt-r3-2" points="40 240 40 160 80 200" transform={`rotate(${progressDeg}, 40, 200)`} />
        <polygon id="rt-r3-3" points="80 240 80 160 120 200" transform={`rotate(${progressDeg}, 80, 200)`} />
        <polygon id="rt-r3-4" points="120 240 120 160 160 200" transform={`rotate(${progressDeg}, 120, 200)`} />
        <polygon id="rt-r3-5" points="160 240 160 160 200 200" transform={`rotate(${progressDeg}, 160, 200)`} />
        <polygon id="rt-r3-6" points="200 240 200 160 240 200" transform={`rotate(${progressDeg}, 200, 200)`} />
      </g>
      <line
        id="progress-needle"
        x1="100"
        x2="100"
        y1="100"
        fill="none"
        transform={`rotate(${progressDeg}, 100, 100)`}
      />
    </MoonWrapper>
  );
};

// {moonDB.moon.map((item, idx) => (
//     <polygon
//       transform={`rotate(${progressDeg}, ${item.transX}, ${item.transY})`}
//       key={item.id}
//       id={item.id}
//       points={item.points}
//     />
// ))}

/*
<defs>
  <filter id="number-grain">
    <feTurbulence type="turbulence" numOctaves="1" baseFrequency="1" result="turb" />
    <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
    <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
    <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
  </filter>
</defs>

*/

// <g id="progress-group">
//   <circle cx="100" cy="100" r="100" fill="#FF931E" />
//   <line id="progress-needle" x1="100" x2="100" y1="100" fill="none" transform={`rotate(${progressDeg}, 100, 100)`} />
// </g>

// <g id="geometry" opacity="0.2" >
// </g>
// <transform="rotate(deg, cx, cy)"

// <filter id="gauge-shad" x="0" y="0">
//   <feDropShadow dx="-4" dy="4" stdDeviation="2" />
// </filter>

export default Moon;
