import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const CodedSceneWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #f08;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  #blinker {
    opacity: 0;
    animation: blink 30s 5s linear infinite;
  }
  #house-light, #halo {
    opacity: 0;
    animation: houseLight 20s  ease-in-out infinite;
  }
  
  #cap-light {
    opacity: 0;
    animation: capToggle 8s linear infinite;
  }
  
  @keyframes capToggle {
    0% {
      opacity: 0;
    }
    32% {
      opacity: 0;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 1;
    }
    
     100% {
      opacity: 0;
    }
  }
  
  @keyframes houseLight {
    0% {
      opacity: 0;
    }
    
    35% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes blink {
    1.0% {
      opacity: 1;
    }
    1.5% {
      opacity: 0;
    }
    2.0% {
      opacity: 1;
    }
    2.5% {
      opacity: 1;
    }
    3.0% {
      opacity: 1;
    }
    3.5% {
      opacity: 0;
    }
    4.0% {
      opacity: 1;
    }
    4.5% {
      opacity: 1;
    }
    5.0% {
      opacity: 1;
    }
    5.5% {
      opacity: 0;
    }
    6.0% {
      opacity: 1;
    }
    6.5% {
      opacity: 0;
    }
    7.0% {
      opacity: 0;
    }
    7.5% {
      opacity: 0;
    }
    8.0% {
      opacity: 1;
    }
    8.5% {
      opacity: 0;
    }
    9.0% {
      opacity: 1;
    }
    9.5% {
      opacity: 1;
    }
    10.0% {
      opacity: 1;
    }
    10.5% {
      opacity: 0;
    }
    11.0% {
      opacity: 1;
    }
    11.5% {
      opacity: 0;
    }
    12.0% {
      opacity: 1;
    }
    12.5% {
      opacity: 0;
    }
    13.0% {
      opacity: 0;
    }
    13.5% {
      opacity: 0;
    }
    14.0% {
      opacity: 1;
    }
    14.5% {
      opacity: 0;
    }
    15.0% {
      opacity: 0;
    }
    15.5% {
      opacity: 0;
    }
    16.0% {
      opacity: 1;
    }
    16.5% {
      opacity: 0;
    }
    17.0% {
      opacity: 1;
    }
    17.5% {
      opacity: 1;
    }
    18.0% {
      opacity: 1;
    }
    18.5% {
      opacity: 0;
    }
    19.0% {
      opacity: 0;
    }
    19.5% {
      opacity: 0;
    }
    20.0% {
      opacity: 1;
    }
    20.5% {
      opacity: 0;
    }
    21.0% {
      opacity: 1;
    }
    21.5% {
      opacity: 0;
    }
    22.0% {
      opacity: 1;
    }
    22.5% {
      opacity: 0;
    }
    23.0% {
      opacity: 0;
    }
    23.5% {
      opacity: 0;
    }
    24.0% {
      opacity: 1;
    }
    24.5% {
      opacity: 0;
    }
    25.0% {
      opacity: 0;
    }
    25.5% {
      opacity: 0;
    }
    26.0% {
      opacity: 0;
    }
    26.5% {
      opacity: 0;
    }
    27.0% {
      opacity: 0;
    }
    27.5% {
      opacity: 0;
    }
    28.0% {
      opacity: 1;
    }
    28.5% {
      opacity: 0;
    }
    29.0% {
      opacity: 1;
    }
    29.5% {
      opacity: 0;
    }
    30.0% {
      opacity: 1;
    }
    30.5% {
      opacity: 0;
    }
    31.0% {
      opacity: 1;
    }
    31.5% {
      opacity: 0;
    }
    32.0% {
      opacity: 0;
    }
    32.5% {
      opacity: 0;
    }
    33.0% {
      opacity: 1;
    }
    33.5% {
      opacity: 0;
    }
    34.0% {
      opacity: 1;
    }
    34.5% {
      opacity: 0;
    }
    35.0% {
      opacity: 0;
    }
    35.5% {
      opacity: 0;
    }
    36.0% {
      opacity: 1;
    }
    36.5% {
      opacity: 0;
    }
    37.0% {
      opacity: 1;
    }
    37.5% {
      opacity: 1;
    }
    38.0% {
      opacity: 1;
    }
    38.5% {
      opacity: 0;
    }
    39.0% {
      opacity: 1;
    }
    39.5% {
      opacity: 0;
    }
    40.0% {
      opacity: 0;
    }
    40.5% {
      opacity: 0;
    }
    41.0% {
      opacity: 1;
    }
    41.5% {
      opacity: 0;
    }
    42.0% {
      opacity: 0;
    }
    42.5% {
      opacity: 0;
    }
    43.0% {
      opacity: 0;
    }
    43.5% {
      opacity: 0;
    }
    44.0% {
      opacity: 0;
    }
    44.5% {
      opacity: 0;
    }
    45.0% {
      opacity: 1;
    }
    45.5% {
      opacity: 1;
    }
    46.0% {
      opacity: 1;
    }
    46.5% {
      opacity: 0;
    }
    47.0% {
      opacity: 1;
    }
    47.5% {
      opacity: 1;
    }
    48.0% {
      opacity: 1;
    }
    48.5% {
      opacity: 0;
    }
    49.0% {
      opacity: 0;
    }
    49.5% {
      opacity: 0;
    }
    50.0% {
      opacity: 1;
    }
    50.5% {
      opacity: 0;
    }
    51.0% {
      opacity: 0;
    }
    51.5% {
      opacity: 0;
    }
    52.0% {
      opacity: 0;
    }
    52.5% {
      opacity: 0;
    }
    53.0% {
      opacity: 0;
    }
    53.5% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const CodedScene = props => {
  return (
    <CodedSceneWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <filter id="boat-spec-light">
          <desc>blur-effect</desc>
          <feGaussianBlur stdDeviation="5" result="blur4" />
          <desc>Lighting effect</desc>
          <feSpecularLighting result="spec4" in="blur4" specularExponent="45" lighting-color="#ddd">
            <desc>Light source effect</desc>
            <fePointLight x="1460" y="880" z="400">
              <desc>Lighting Animation</desc>
              <animate attributeName="x" values="1375;650;1375" dur="20s" repeatCount="indefinite" />
            </fePointLight>
          </feSpecularLighting>
          <desc>Composition of inputs</desc>
          <feComposite in="SourceGraphic" in2="spec4" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
        <defs>
          <clipPath id="my-clip">
            <path
              id="Layer_34"
              fill="#FBB03B"
              d="M1571 884l-22 1.1s-38 2.3-48-.4-10-5.7-10-5.7v-7.1l7 .1-22-60 51 24.5 40 35.5s3.4 1 4 2c1.3 2.1 0 10 0 10z"
            />
          </clipPath>
        </defs>
        <g id="night-scene" />
        <g id="stars">
          <circle cx="94" cy="642" r="2" fill="#CCC" />
          <circle cx="817" cy="536" r="2" fill="#FFF" />
          <circle cx="1776.8" cy="182.8" r="2" fill="#CCC" />
          <circle cx="891.6" cy="1.4" r="1.4" fill="#DBDBDB" />
          <ellipse cx="1225.3" cy="188.2" fill="#CCC" rx="1.3" ry=".7" />
          <circle cx="1776" cy="644" r="2" fill="#CCC" />
          <circle cx="689" cy="144" r="2" fill="#CCC" />
          <circle cx="1355" cy="822" r="2" fill="#CCC" />
          <ellipse cx="1181.8" cy="9.9" fill="#CCC" rx="1.3" ry=".7" />
          <circle cx="1684.2" cy="318.8" r="2" fill="#CCC" />
          <circle cx="1383" cy="338" r="2" fill="#CCC" />
          <circle cx="1212" cy="190" r="2" fill="#FFF" />
          <circle cx="112" cy="593" r="2" fill="#CCC" />
          <circle cx="578" cy="660" r="2" fill="#CCC" />
          <circle cx="96" cy="454" r="2" fill="#CCC" />
          <circle cx="1659.4" cy="482.6" r="1.4" fill="#FFF" />
          <circle cx="325" cy="799" r="2" fill="#CCC" />
          <circle cx="34" cy="193" r="2" fill="#CCC" />
          <circle cx="1121" cy="693" r="2" fill="#CCC" />
          <circle cx="455" cy="15" r="2" fill="#CCC" />
          <circle cx="1817" cy="17" r="2" fill="#FFF" />
          <circle cx="98" cy="429" r="2" fill="#FFF" />
          <circle cx="427" cy="499" r="2" fill="#CCC" />
          <circle cx="1885.1" cy="97.9" r="2" fill="#CCC" />
          <circle cx="1438.8" cy="71.4" r="1.4" fill="#DBDBDB" />
          <circle cx="1294.9" cy="182.3" r="2" fill="#CCC" />
          <circle cx="1569.3" cy="152.3" r="2" fill="#CCC" />
        </g>
        <g id="lighthouse">
          <g id="mainWalls">
            <path fill="#1A1A1A" d="M158 860h-11.3l-6.4-76h5.3z" />
            <path fill="#666" d="M146.9 860H128l2.5-76h9.8z" />
            <path fill="#B3B3B3" d="M128 860h-15.4l9.8-76h7.9z" />
            <path fill="#E6E6E6" d="M111.8 859.6l-4.7-.8 13.7-74.8h1.6z" />
          </g>
          <g id="awning">
            <path fill="#1A1A1A" d="M140.3 784h5.3l4.3-4H141z" />
            <path fill="#333" d="M130.3 784h10l.9-4h-11.3z" />
            <path fill="#666" d="M122.2 784h8.3l.2-4h-11.5z" />
            <path fill="#CCC" d="M120.9 784.2l1.3-.2-2.8-4H116z" />
          </g>
          <g id="topWindow">
            <path fill="#666" stroke="#4D4D4D" stroke-miterlimit="10" d="M123.5 795.5h4.5l.2-7h-4.5z" />
            <path fill="#B3B3B3" d="M127 795h-2.2l.4-5h1.8z" />
            <path fill="none" stroke="#666" stroke-miterlimit="10" d="M127 792.5h-2" />
          </g>
          <g id="midWindow">
            <path fill="#848484" stroke="#4D4D4D" stroke-miterlimit="10" d="M120.7 821.5h5.1l.3-9h-4.5z" />
            <path fill="#595959" d="M125 816h-2.8l.5-3h2.3zM125 820h-3.4l.5-3h2.9z" />
          </g>
          <g id="botWindow">
            <path fill="#9B9B9B" stroke="#4D4D4D" stroke-miterlimit="10" d="M121.9 850.5H117l1.5-10h4.5z" />
            <path fill="#7A7A7A" d="M122.2 844h-3.6l.4-2h3.6z" />
            <path fill="#565656" d="M122.1 848h-3.6l.5-3h3.6z" />
          </g>
          <ellipse id="house-light-back" cx="133.3" cy="765.9" fill="#000" rx="7.9" ry="5.6" />
          <ellipse id="house-light" cx="133.3" cy="765.9" fill="#FFF" rx="7.9" ry="5.6" />
          <g id="topWalls">
            <path fill="gray" stroke="#777" stroke-miterlimit="10" d="M130.5 769.5h13v9h-13z" />
            <path fill="#AAA" d="M124.5 778l6.5.2v-9.1l-6.2.2z" />
            <path fill="#EAEAEA" d="M123.4 778.2h1.6V761h-1.1z" />
          </g>
          <g id="railings">
            <linearGradient
              id="SVGID_20_"
              x1="116.3145"
              x2="153.9346"
              y1="779"
              y2="779"
              gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset="1" stop-color="#e6e6e6" />
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_20_)" stroke-miterlimit="10" stroke-width="2" d="M151 779h-36" />
            <linearGradient
              id="SVGID_21_"
              x1="117.3604"
              x2="150.7998"
              y1="775.5"
              y2="775.5"
              gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset=".3804" stop-color="#020202" />
              <stop offset=".5175" stop-color="#090909" />
              <stop offset=".6152" stop-color="#141414" />
              <stop offset=".6943" stop-color="#252525" />
              <stop offset=".7619" stop-color="#3b3b3b" />
              <stop offset=".8219" stop-color="#575757" />
              <stop offset=".8762" stop-color="#777" />
              <stop offset=".926" stop-color="#9d9d9d" />
              <stop offset=".9703" stop-color="#c6c6c6" />
              <stop offset="1" stop-color="#e6e6e6" />
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_21_)" stroke-miterlimit="10" d="M150 775.5h-32" />
            <linearGradient
              id="SVGID_22_"
              x1="117.3604"
              x2="149.7549"
              y1="771.5"
              y2="771.5"
              gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset=".3804" stop-color="#020202" />
              <stop offset=".5175" stop-color="#090909" />
              <stop offset=".6152" stop-color="#141414" />
              <stop offset=".6943" stop-color="#252525" />
              <stop offset=".7619" stop-color="#3b3b3b" />
              <stop offset=".8219" stop-color="#575757" />
              <stop offset=".8762" stop-color="#777" />
              <stop offset=".926" stop-color="#9d9d9d" />
              <stop offset=".9703" stop-color="#c6c6c6" />
              <stop offset="1" stop-color="#e6e6e6" />
            </linearGradient>
            <path fill="none" stroke="url(#SVGID_22_)" stroke-miterlimit="10" d="M150 771.5h-31" />
            <path fill="none" stroke="#333" stroke-miterlimit="10" d="M150.5 771v8M147.5 771v8M143.5 771v8" />
            <path fill="none" stroke="#666" stroke-miterlimit="10" d="M129.5 771v8M118.5 771v8M116.5 772v7" />
            <path
              fill="none"
              stroke="#777"
              stroke-miterlimit="10"
              stroke-width=".2177"
              d="M118.4 771.4l-2.1.9M118.4 775l-2.1.9"
            />
          </g>
          <g id="topPanes" fill="none" stroke-miterlimit="10">
            <path stroke="#666" d="M141.5 762.5h2v7h-2zM131.5 762.5h7v7h-7z" />
            <path stroke="#999" d="M127.5 762.5h3v7h-3z" />
            <path stroke="#B3B3B3" d="M124.5 762.5h3v7h-3z" />
            <path stroke="#666" d="M138.5 762.5h4v7h-4z" />
          </g>
          <g id="roof">
            <linearGradient
              id="SVGID_23_"
              x1="124.1289"
              x2="143.9502"
              y1="761.7344"
              y2="761.7344"
              gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4d4d4d" />
              <stop offset=".1234" stop-color="#545454" />
              <stop offset=".309" stop-color="#696969" />
              <stop offset=".5338" stop-color="#8b8b8b" />
              <stop offset=".7869" stop-color="#b9b9b9" />
              <stop offset="1" stop-color="#e6e6e6" />
            </linearGradient>
            <path
              fill="none"
              stroke="url(#SVGID_23_)"
              stroke-miterlimit="10"
              stroke-width="1.0886"
              d="M143.5 761.8l-18.9-.2"
            />
            <path fill="#333" d="M137.8 760h5.5l-9.2-3.3z" />
            <path fill="#B3B3B3" d="M124.1 760.4l6.6-.1 2.2-3.3h-.7z" />
            <path fill="#666" d="M130.5 760h7.3l-3.9-3h-1z" />
            <linearGradient
              id="SVGID_24_"
              x1="123.6299"
              x2="144.5293"
              y1="760.5"
              y2="760.5"
              gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4d4d4d" />
              <stop offset=".1234" stop-color="#545454" />
              <stop offset=".309" stop-color="#696969" />
              <stop offset=".5338" stop-color="#8b8b8b" />
              <stop offset=".7869" stop-color="#b9b9b9" />
              <stop offset="1" stop-color="#e6e6e6" />
            </linearGradient>
            <path fill="url(#SVGID_24_)" d="M124 760h20v1h-20z" />
          </g>
          <g class="cap">
            <path fill="#666" d="M132.2 755h1.9v2h-1.9z" />
            <ellipse id="cap-light" cx="133.6" cy="753.8" fill="red" rx="2.8" ry="1" />
          </g>
        </g>
        <g id="theRock">
          <linearGradient id="SVGID_25_" x1="151" x2="239" y1="873.5" y2="873.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_25_)" d="M239 893h-88v-39" />
          <linearGradient id="SVGID_26_" x1="54.917" x2="79.083" y1="888.5" y2="888.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_26_)" d="M69.7 893H54.9l9.4-9h14.8z" />
          <linearGradient id="SVGID_27_" x1="61.917" x2="81.083" y1="886" y2="886" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_27_)" d="M73.7 893H61.9l7.4-14h11.8z" />
          <linearGradient id="SVGID_28_" x1="67.917" x2="87.083" y1="883.5" y2="883.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_28_)" d="M79.7 893H67.9l7.4-19h11.8z" />
          <linearGradient id="SVGID_29_" x1="73.917" x2="93.083" y1="881" y2="881" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_29_)" d="M85.7 893H73.9l7.4-24h11.8z" />
          <linearGradient id="SVGID_30_" x1="80.917" x2="100.083" y1="878" y2="878" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_30_)" d="M92.7 893H80.9l7.4-30h11.8z" />
          <linearGradient id="SVGID_31_" x1="87.917" x2="107.083" y1="876" y2="876" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_31_)" d="M99.7 893H87.9l7.4-34h11.8z" />
          <linearGradient id="SVGID_32_" x1="95.917" x2="115.083" y1="874" y2="874" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_32_)" d="M107.7 893H95.9l7.4-38h11.8z" />
          <linearGradient id="SVGID_33_" x1="101.917" x2="130.083" y1="874" y2="874" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_33_)" d="M119.2 893h-17.3l10.9-38h17.3z" />
          <linearGradient id="SVGID_34_" x1="111.917" x2="147.083" y1="874.5" y2="874.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_34_)" d="M133.5 893h-21.6l13.6-37h21.6z" />
          <linearGradient id="SVGID_35_" x1="123.917" x2="159.083" y1="874.5" y2="874.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_35_)" d="M145.5 893h-21.6l13.6-37h21.6z" />
          <linearGradient id="SVGID_36_" x1="139.917" x2="175.083" y1="877" y2="877" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_36_)" d="M161.5 893h-21.6l13.6-32h21.6z" />
        </g>
        <g id="boat" filter="url(#boat-spec-light)" clip-path="url(#my-clip)">
          <g id="sails">
            <linearGradient
              id="ketch-grad"
              x1="1528.6943"
              x2="1553.347"
              y1="877.3311"
              y2="852.6783"
              gradientTransform="matrix(.7761 -.08146 .09033 .8606 264.6738 246.5898)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#333" />
              <stop offset="1" stop-color="#777" />
            </linearGradient>
            <path id="ketch-sail" fill="url(#ketch-grad)" d="M1525.6 838.1l41.8 33.8-37.7 4.5" />
            <linearGradient
              id="main-grad"
              x1="1474.5088"
              x2="1515.6031"
              y1="860.083"
              y2="818.9886"
              gradientTransform="matrix(.7761 -.08146 .09033 .8606 264.6738 246.5898)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#333" />
              <stop offset="1" stop-color="#777" />
            </linearGradient>
            <path id="main-sail" fill="url(#main-grad)" d="M1526.3 838.2l3.3 38.2-28.2 3.4-25.1-67.2" />
          </g>
          <g id="hull" fill="none" stroke-miterlimit="10" stroke-width="3.7589">
            <path stroke="#000" d="M1492.6 872c.2 5 34.6 7 76.9 4.5" />
            <path stroke="#CCC" d="M1492.7 874.2c.2 5 34.6 7 76.9 4.5" />
            <path stroke="#333" d="M1492.8 877.3c.2 5 34.6 7 76.9 4.5" />
          </g>
        </g>
        <circle id="blinker" cx="1560.5" cy="874.5" r="2.5" fill="#fff" stroke="#FFF" stroke-miterlimit="10" />
        <radialGradient
          id="halo-grad"
          cx="133.001"
          cy="766.501"
          r="39.1436"
          gradientTransform="matrix(.9638 0 0 .3351 4.8142 509.6143)"
          gradientUnits="userSpaceOnUse"
        >
          <desc>FIXME: this needs to be in a g-tag just beneath here </desc>
          <stop offset="0" stop-color="#fff" />
          <stop offset=".4" stop-color="#fff" stop-opacity=".6" />
          <stop offset=".9" stop-color="yellow" stop-opacity=".08" />
          <stop offset="1" stop-color="yellow" stop-opacity="0" />
        </radialGradient>
        <ellipse id="halo" cx="133" cy="766.5" fill="url(#halo-grad)" rx="48" ry="13.5" />
      </svg>
    </CodedSceneWrapper>
  );
};

export default CodedScene;
