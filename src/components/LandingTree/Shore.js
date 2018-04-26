import React from 'react';
import ReactDOM from 'react-dom';

const Shore = () => (
  <g className="shore">
    <path
      fill="var(--shore-color-3)"
      d="M-.4 947.6c-.3 10.9-.7 21.7-1.1 32.6l1180 99.8c94.5-.4 188.9-.5 283.4-.5h60.3"
    />
    <path fill="var(--shore-color-1" d="M0 1080h1566.8L.5 974.4" />
    <path
      fill="var(--shore-color-2)"
      d="M-.24869084 972.9680581l1098.63042 39.99604008-.5784401 15.88887-1098.63042-39.99604007z"
    />
  </g>
);



export default Shore;

/*



WaterBG


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
  <linearGradient id="a" x1="1919.5" x2="-.5" y1="980" y2="980.0002" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fff"/>
    <stop offset="1" stop-color="#a8a8a8"/>
  </linearGradient>
  <path fill="url(#a)" d="M-.5 880h1920v200H-.5z"/>
</svg>


*/