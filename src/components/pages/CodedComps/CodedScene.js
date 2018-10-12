import React, { Component } from 'react';
import styled from 'styled-components';

import BoatSVG from './Boat';
/* CodedScene contains lighthouse and twinkling stars*/
const CodedSceneWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .cruise {
    transform: translate(20rem);
    animation: cruising 960s ease-out forwards;
    
  }
  @keyframes cruising {
    0% {
      transform: translateX(20rem);
    }
    100% {
      transform: translateX(-75rem);
    }
  }

  #house-light,
  #halo {
    opacity: 0;
    animation: houseLight 20s ease-in-out infinite;
  }

  #cap-light {
    opacity: 0;
    animation: capToggle 8s linear infinite;
  }
  #twinkler1 {
    opacity: 0;
    animation: 24s 13s twinkle ease-in-out infinite;
  }
  #twinkler2 {
    opacity: 0;
    animation: 15s 40s twinkle ease-in-out infinite;
  }
  #twinkler3 {
    opacity: 0;
    animation: 23s 5s twinkle ease-in-out infinite;
  }
  twinkler4 {
    opacity: 0;
    animation: 10s 12s twinkle ease-in-out infinite;
  }
  twinkler5 {
    opacity: 0;
    animation: 20s 10s twinkle ease-in-out infinite;
  }
  twinkler6 {
    opacity: 0;
    animation: 20s 15s twinkle ease-in-out infinite;
  }

  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CodedScene = props => {
  return (
    <CodedSceneWrapper>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <defs>
          <filter id="shad-blur" x="0" y="0">
            <desc>FIXME BLUR NOT WORKING</desc>
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
          <linearGradient
            id="boatShad-grad"
            x1="1489"
            x2="1907"
            y1="894.6494"
            y2="894.6494"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset=".3313" stopColor="#030303" stopOpacity=".6687" />
            <stop offset=".5785" stopColor="#0d0d0d" stopOpacity=".4215" />
            <stop offset=".7976" stopColor="#1d1d1d" stopOpacity=".2024" />
            <stop offset="1" stopColor="#333" stopOpacity="0" />
          </linearGradient>
          <linearGradient
          id="ketch-sail-grad"
          x1="1442.9785"
          x2="1467.6312"
          y1="891.7266"
          y2="867.0738"
          gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e6e6e6" />
          <stop offset="1" stopColor="#4d4d4d" />
        </linearGradient>
        <linearGradient
        id="main-sail-grad"
        x1="1388.792"
        x2="1429.885"
        y1="874.4795"
        y2="833.3865"
        gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#e6e6e6" />
        <stop offset="1" stopColor="#4d4d4d" />
      </linearGradient>
          <linearGradient
            id="ketch-sail-ref-grad"
            x1="1447.335"
            x2="1471.5216"
            y1="850.2686"
            y2="826.0819"
            gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset=".8" stopColor="#4d4d4d" />
          </linearGradient>
          <linearGradient
            id="main-sail-ref-grad"
            x1="1394.1494"
            x2="1434.9337"
            y1="833.3193"
            y2="792.535"
            gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" stopColor="#4d4d4d" />
          </linearGradient>
          <clipPath id="boat-clipPath">
            <path d="M1505 903l-2 7.1-3.8 2.9-38.2 30.5-51 25.6 24.3-56h-8.3v-8s8.1-1 7-1.3c-10-2.7-8-5.7-8-5.7V891l7 .1-22-60 51 24.5 40 35.5s3.4 1 4 2c1.3 2 0 9.9 0 9.9z" />
          </clipPath>
          <filter id="boat-spec-light" width="110%">
            <feGaussianBlur stdDeviation="5" result="blur4" />
            <feSpecularLighting result="spec4" in="blur4" specularExponent="45" lightingColor="#ccc">
              <fePointLight x="1460" y="880" z="400">
                <animate attributeName="x" values="1400;450;1400" dur="20s" repeatCount="indefinite" />
              </fePointLight>
            </feSpecularLighting>
            <feComposite in="SourceGraphic" in2="spec4" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>
        <g id="night-scene"  transform='translate(-70 10)'>

        <g id="stars">
          <circle cx="94" cy="642" r="2" fill="#CCC" />
          <circle id="twinkler1" cx="817" cy="536" r="2" fill="#FFF" />
          <circle cx="1776.8" cy="182.8" r="2" fill="#CCC" />
          <circle cx="891.6" cy="1.4" r="1.4" fill="#DBDBDB" />
          <ellipse cx="1225.3" cy="188.2" fill="#CCC" rx="1.3" ry=".7" />
          <circle cx="1776" cy="644" r="2" fill="#CCC" />
          <circle cx="689" cy="144" r="2" fill="#CCC" />
          <circle cx="1355" cy="822" r="2" fill="#CCC" />
          <ellipse cx="1181.8" cy="9.9" fill="#CCC" rx="1.3" ry=".7" />
          <circle cx="1684.2" cy="318.8" r="2" fill="#CCC" />
          <circle cx="1383" cy="338" r="2" fill="#CCC" />
          <circle id="twinkler2" cx="1212" cy="190" r="2" fill="#FFF" />
          <circle cx="112" cy="593" r="2" fill="#CCC" />
          <circle cx="578" cy="660" r="2" fill="#CCC" />
          <circle cx="96" cy="454" r="2" fill="#CCC" />
          <circle id="twinkler3" cx="1659.4" cy="482.6" r="1.4" fill="#FFF" />
          <circle cx="325" cy="799" r="2" fill="#CCC" />
          <circle cx="34" cy="193" r="2" fill="#CCC" />
          <circle cx="1121" cy="693" r="2" fill="#CCC" />
          <circle cx="455" cy="15" r="2" fill="#CCC" />
          <circle id="twinkler4" cx="1817" cy="17" r="2" fill="#FFF" />
          <circle id="twinkler5" cx="98" cy="429" r="2" fill="#FFF" />
          <circle cx="427" cy="499" r="2" fill="#CCC" />
          <circle cx="1885.1" cy="97.9" r="2" fill="#CCC" />
          <circle cx="1438.8" cy="71.4" r="1.4" fill="#DBDBDB" />
          <circle cx="1294.9" cy="182.3" r="2" fill="#CCC" />
          <circle cx="1569.3" cy="152.3" r="2" fill="#CCC" />
          <desc>END OF STARS</desc>
        </g>

        <g id="theRock">
          <linearGradient id="SVGID_25_" x1="151" x2="239" y1="873.5" y2="873.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_25_)" d="M239 893h-88v-39" />
          <linearGradient id="SVGID_26_" x1="54.917" x2="79.083" y1="888.5" y2="888.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_26_)" d="M69.7 893H54.9l9.4-9h14.8z" />
          <linearGradient id="SVGID_27_" x1="61.917" x2="81.083" y1="886" y2="886" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_27_)" d="M73.7 893H61.9l7.4-14h11.8z" />
          <linearGradient id="SVGID_28_" x1="67.917" x2="87.083" y1="883.5" y2="883.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_28_)" d="M79.7 893H67.9l7.4-19h11.8z" />
          <linearGradient id="SVGID_29_" x1="73.917" x2="93.083" y1="881" y2="881" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_29_)" d="M85.7 893H73.9l7.4-24h11.8z" />
          <linearGradient id="SVGID_30_" x1="80.917" x2="100.083" y1="878" y2="878" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_30_)" d="M92.7 893H80.9l7.4-30h11.8z" />
          <linearGradient id="SVGID_31_" x1="87.917" x2="107.083" y1="876" y2="876" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_31_)" d="M99.7 893H87.9l7.4-34h11.8z" />
          <linearGradient id="SVGID_32_" x1="95.917" x2="115.083" y1="874" y2="874" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_32_)" d="M107.7 893H95.9l7.4-38h11.8z" />
          <linearGradient id="SVGID_33_" x1="101.917" x2="130.083" y1="874" y2="874" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_33_)" d="M119.2 893h-17.3l10.9-38h17.3z" />
          <linearGradient id="SVGID_34_" x1="111.917" x2="147.083" y1="874.5" y2="874.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_34_)" d="M133.5 893h-21.6l13.6-37h21.6z" />
          <linearGradient id="SVGID_35_" x1="123.917" x2="159.083" y1="874.5" y2="874.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_35_)" d="M145.5 893h-21.6l13.6-37h21.6z" />
          <linearGradient id="SVGID_36_" x1="139.917" x2="175.083" y1="877" y2="877" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e6e6e6" />
            <stop offset="1" />
          </linearGradient>
          <path fill="url(#SVGID_36_)" d="M161.5 893h-21.6l13.6-32h21.6z" />
          <desc>END OF ROCK</desc>
        </g>

        <g id="lighthouse"  >
          <path fill="#1A1A1A" d="M158 860h-11.3l-6.4-76h5.3z" />
          <path fill="#666" d="M146.9 860H128l2.5-76h9.8z" />
          <path fill="#B3B3B3" d="M128 860h-15.4l9.8-76h7.9z" />
          <path fill="#E6E6E6" d="M111.8 859.6l-4.7-.8 13.7-74.8h1.6z" />
          <path fill="#1A1A1A" d="M140.3 784h5.3l4.3-4H141z" />
          <path fill="#333" d="M130.3 784h10l.9-4h-11.3z" />
          <path fill="#666" d="M122.2 784h8.3l.2-4h-11.5z" />
          <path fill="#CCC" d="M120.9 784.2l1.3-.2-2.8-4H116z" />
          <path fill="#666" stroke="#4D4D4D" strokeMiterlimit="10" d="M123.5 795.5h4.5l.2-7h-4.5z" />
          <path fill="#B3B3B3" d="M127 795h-2.2l.4-5h1.8z" />
          <path fill="none" stroke="#666" strokeMiterlimit="10" d="M127 792.5h-2" />
          <path fill="#848484" stroke="#4D4D4D" strokeMiterlimit="10" d="M120.7 821.5h5.1l.3-9h-4.5z" />
          <path fill="#595959" d="M125 816h-2.8l.5-3h2.3zM125 820h-3.4l.5-3h2.9z" />
          <path fill="#9B9B9B" stroke="#4D4D4D" strokeMiterlimit="10" d="M121.9 850.5H117l1.5-10h4.5z" />
          <path fill="#7A7A7A" d="M122.2 844h-3.6l.4-2h3.6z" />
          <path fill="#565656" d="M122.1 848h-3.6l.5-3h3.6z" />
          <ellipse id="house-light-back" cx="133.3" cy="765.9" fill="#000" rx="7.9" ry="5.6" />
          <ellipse id="house-light" cx="133.3" cy="765.9" fill="#FFF" rx="7.9" ry="5.6" />
          <path fill="gray" stroke="#777" strokeMiterlimit="10" d="M130.5 769.5h13v9h-13z" />
          <path fill="#AAA" d="M124.5 778l6.5.2v-9.1l-6.2.2z" />
          <path fill="#EAEAEA" d="M123.4 778.2h1.6V761h-1.1z" />
          <linearGradient
            id="base-railing"
            x1="116.3145"
            x2="153.9346"
            y1="779"
            y2="779"
            gradientTransform="matrix(-.9569 0 0 1 262.3064 0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#e6e6e6" />
          </linearGradient>
          <path fill="none" stroke="#555" strokeMiterlimit="10" d="M150 775.5h-32" />
          <path fill="none" stroke="#444" strokeMiterlimit="10" d="M150 771.5h-31" />
          <path fill="none" stroke="#333" strokeMiterlimit="10" d="M150.5 771v8M147.5 771v8M143.5 771v8" />{' '}
          <stop offset=".3804" stopColor="#020202" />
          <path fill="none" stroke="#666" strokeMiterlimit="10" d="M129.5 771v8M118.5 771v8M116.5 772v7" />
          <path fill="none" stroke="url(#base-railing)" strokeMiterlimit="10" strokeWidth="2" d="M151 779h-36" />
          <path stroke="#000" strokeWidth="1" d="M118.4 771.4l-2.1.9M118.4 775l-2.1.9" />
          <path fill="none" stroke="#666" d="M141.5 762.5h2v7h-2zM131.5 762.5h7v7h-7z" />
          <path fill="none" stroke="#999" d="M127.5 762.5h3v7h-3z" />
          <path fill="none" stroke="#B3B3B3" d="M124.5 762.5h3v7h-3z" />
          <path fill="none" stroke="#666" d="M138.5 762.5h4v7h-4z" />
          <path fill="none" stroke="#888" strokeMiterlimit="10" strokeWidth="2" d="M143.5 761.8l-18.9-.2" />
          <path fill="#333" d="M137.8 760h5.5l-9.2-3.3z" />
          <path fill="#B3B3B3" d="M124.1 760.4l6.6-.1 2.2-3.3h-.7z" />
          <path fill="#666" d="M130.5 760h7.3l-3.9-3h-1z" />
          <path fill="#777" d="M124 760h20v1h-20z" />
          <path fill="#666" d="M132.2 755h1.9v2h-1.9z" />
          <ellipse id="cap-light" cx="133.6" cy="753.8" fill="#fff" rx="1" ry="1" strokeWidth="3" stroke="#c92323" />
          <g id="lighthouse-halo">
            <radialGradient
              id="halo-grad"
              cx="133.001"
              cy="766.501"
              r="39.1436"
              gradientTransform="matrix(.9638 0 0 .3351 4.8142 509.6143)"
              gradientUnits="userSpaceOnUse"
            >
              <desc>FIXME: this needs to be in a g-tag just beneath here </desc>
              <stop offset="0" stopColor="#fff" />
              <stop offset=".4" stopColor="#fff" stopOpacity=".6" />
              <stop offset=".9" stopColor="yellow" stopOpacity=".08" />
              <stop offset="1" stopColor="yellow" stopOpacity="0" />
            </radialGradient>
            <ellipse id="halo" cx="133" cy="766.5" fill="url(#halo-grad)" rx="48" ry="13.5" />
          </g>
        </g>
        </g>
        <g transform='translate(0 -25)'>
        <BoatSVG />
        </g>
      </svg>
    </CodedSceneWrapper>
  );
};

export default CodedScene;
