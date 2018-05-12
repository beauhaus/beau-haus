import React from 'react';
import ReactDOM from 'react-dom';

/**This pond background lives right behind the swells of the pond
 * & exists to occlude the first letters of the oversized banner
 * which rises from the horizon. It's purpose aesthetically is to create
 * a feeling of depth.
 */
const PondBG = () => (
  // preserveAspectRatio="xMidYMid meet"
  // viewBox="0 0 1920 200" 
  <svg 
  id="pond-bg" 
  >
    <linearGradient id="pond-bg-grad" x1="1920" x2=".5" y1="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fff" />
      <stop offset="1" stopColor="#a8a8a8" />
    </linearGradient>
    <path fill="url(#pond-bg-grad)" d="M0 0h1920v200H0z"/>
  </svg>
);


export default PondBG;

/*
viewBox="0 0 1920 200">
  <linearGradient id="a" x1="1920.5" x2=".5" y1="100" y2="100.0002" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fff"/>
    <stop offset="1" stop-color="#a8a8a8"/>
  </linearGradient>
  <path fill="url(#a)" d="M.5 0h1920v200H.5z"/>
</svg>
*/