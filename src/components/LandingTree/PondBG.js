import React from 'react';
import ReactDOM from 'react-dom';

/**This pond background lives right behind the swells of the pond
 * & exists to occlude the first letters of the oversized banner
 * which rises from the horizon. It's purpose aesthetically is to create 
 * a feeling of depth.
 */
const PondBG = () => (
  <svg id="pond-bg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
  <linearGradient id="pond-bg-grad" x1="1919.5" x2="-.5" y1="980" y2="980.0002" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#fff"/>
    <stop offset="1" stopColor="#a8a8a8"/>
  </linearGradient>
  <path fill="url(#pond-bg-grad)" d="M-.5 880h1920v200H-.5z"/>
</svg>
);



export default PondBG;

/*



WaterBG





*/