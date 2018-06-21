import React, { Component } from 'react';
import styled from 'styled-components';

const BoatSVGWrapper = styled.svg`
  width: 100%;
  height: 100%;
  #blinker {
    opacity: 0;
    animation: blink 30s 5s linear infinite;
  }
`;
const BoatSVG = props => {
  return (
    <BoatSVGWrapper id="boat-svg" x="1800" y="820" preserveAspectRatio="none">
      <defs>
        <linearGradient
          id="boatShad-grad"
          x1="81.9531"
          x2="499.9531"
          y1="64.6494"
          y2="64.6494"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" />
          <stop offset=".3313" stopColor="#030303" stopOpacity=".6687" />
          <stop offset=".5785" stopColor="#0d0d0d" stopOpacity=".4215" />
          <stop offset=".7976" stopColor="#1d1d1d" stopOpacity=".2024" />
          <stop offset="1" stopColor="#333" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="SVGID_1_"
          x1="-1649.0352"
          x2="-1624.8492"
          y1="9003.9746"
          y2="8979.7891"
          gradientTransform="matrix(.7761 .0756 .0903 -.7981 523.7434 7388.6411)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e6e6e6" />
          <stop offset=".1322" stopColor="#e0e0e0" />
          <stop offset=".3017" stopColor="#d0d0d0" />
          <stop offset=".4916" stopColor="#b6b6b6" />
          <stop offset=".6963" stopColor="#919191" />
          <stop offset=".9106" stopColor="#636363" />
          <stop offset="1" stopColor="#4d4d4d" />
        </linearGradient>
        <linearGradient
          id="SVGID_2_"
          x1="-1702.2227"
          x2="-1661.4376"
          y1="8987.0254"
          y2="8946.2402"
          gradientTransform="matrix(.7761 .0756 .0903 -.7981 523.7434 7388.6411)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e6e6e6" />
          <stop offset=".1322" stopColor="#e0e0e0" />
          <stop offset=".3017" stopColor="#d0d0d0" />
          <stop offset=".4916" stopColor="#b6b6b6" />
          <stop offset=".6963" stopColor="#919191" />
          <stop offset=".9106" stopColor="#636363" />
          <stop offset="1" stopColor="#4d4d4d" />
        </linearGradient>
        <linearGradient
          id="SVGID_3_"
          x1="-479.4702"
          x2="-454.8168"
          y1="-1044.0337"
          y2="-1068.6871"
          gradientTransform="matrix(.7761 -.0815 .0903 .8606 523.7434 925.5043)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e6e6e6" />
          <stop offset=".1322" stopColor="#e0e0e0" />
          <stop offset=".3017" stopColor="#d0d0d0" />
          <stop offset=".4916" stopColor="#b6b6b6" />
          <stop offset=".6963" stopColor="#919191" />
          <stop offset=".9106" stopColor="#636363" />
          <stop offset="1" stopColor="#4d4d4d" />
        </linearGradient>
        <linearGradient
          id="SVGID_4_"
          x1="-533.6582"
          x2="-492.5652"
          y1="-1061.2852"
          y2="-1102.3782"
          gradientTransform="matrix(.7761 -.0815 .0903 .8606 523.7434 925.5043)"
          gradientUnits="userSpaceOnUse"
          >
          <stop offset="0" stopColor="#e6e6e6" />
          <stop offset=".1322" stopColor="#e0e0e0" />
          <stop offset=".3017" stopColor="#d0d0d0" />
          <stop offset=".4916" stopColor="#b6b6b6" />
          <stop offset=".6963" stopColor="#919191" />
          <stop offset=".9106" stopColor="#636363" />
          <stop offset="1" stopColor="#4d4d4d" />
          </linearGradient>
          
          <clipPath id="boat-clipPath">
          <path
          d="M98 73l-2 7.1-3.8 2.9L54 113.5 3 139l24.3-56H19v-8s8.1-1 7-1.3C16 71 18 68 18 68v-7.1l7 .1L3 1l51 24.5L94 61s3.4 1 4 2c1.3 2.1 0 10 0 10z"
          />
          </clipPath>
          </defs>
          
          <polygon
          id="boatShad"
          fill="url(#boatShad-grad)"
          strokeWidth="0"
          points="170.5 61.2 82 63.3 93.2 73.7 500 59 429.9 55.6"
          />
          
          <g id="boat-group" >
          <g id="boatReflect" clipPath="url(#boat-clipPath)" filter="url(#boat-spec-light)">
          <g id="sails_1_">
          <polyline fill="url(#SVGID_1_)" points="52.4 113.9 93.4 82.5 56.5 78.3" />
          <polyline fill="url(#SVGID_2_)" points="53.2 113.8 56.4 78.3 28.8 75.2 4.2 137.6" />
          </g>
          
          <g id="hull_1_" fill="none" strokeMiterlimit="10" strokeWidth="3.5808">
          <path stroke="#000" d="M20.2 82.4c.2-4.6 33.9-6.5 75.2-4.1" />
          <path stroke="#CCC" d="M20.3 80.4c.2-4.6 33.9-6.5 75.2-4.1" />
          <path stroke="#333" d="M20.4 77.6c.2-4.6 33.9-6.5 75.2-4.1" />
          </g>
          <circle id="blinker-ref" cx="87.5" cy="79.5" r="2.5" fill="#fff" />
          <desc>end of boat reflect</desc>
          </g>
          
          
          <g id="boat" filter="url(#boat-spec-light)" clipPath="url(#boat-clipPath)">
          <g id="sails">
          <polyline fill="url(#SVGID_3_)" points="52.5 27.1 94.3 60.9 56.6 65.4" />
          <polyline fill="url(#SVGID_4_)" points="53.3 27.2 56.5 65.4 28.4 68.8 3.2 1.6" />
          </g>
          <g id="hull" fill="none" strokeMiterlimit="10" strokeWidth="3.7589">
          <path stroke="#000" d="M19.5 61c.2 5 34.6 7 76.9 4.5" />
          <path stroke="#CCC" d="M19.6 63.2c.2 5 34.6 7 76.9 4.5" />
          <path stroke="#333" d="M19.8 66.3c.2 5 34.6 7 76.9 4.5" />
          </g>
          <desc>end of boat</desc>
          </g>
          <ellipse id="port-light-ref" cx="19" cy="83.5" fill="#FF4623" rx="2" ry="1.5" />
          <ellipse id="port-light" cx="19" cy="59.5" fill="#FF4623" rx="2" ry="1.5" />
          <circle id="blinker_7_" cx="87.5" cy="63.5" r="2.5" fill="#fff" />
      </g>

      <desc>end of boat container</desc>

      
    </BoatSVGWrapper>
  );
};

export default BoatSVG;

/*

*/
