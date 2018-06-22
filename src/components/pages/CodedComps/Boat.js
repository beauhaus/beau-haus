import React, { Component } from 'react';
import styled from 'styled-components';

const BoatSVGWrapper = styled.g`
  #blinker {
    opacity: 0;
    animation: blink 30s 5s linear infinite;
  }

  #boatReflect {
    mix-blend-mode: soft-light;
  }

  #boatShad {
    opacity: 0;
    animation: shadCast 20s 10s ease-in-out infinite;
  }

  .blinker {
    opacity: 0;
    animation: blink 30s 5s linear infinite;
  }

  .sail {
    /*
    transform: translateX(20px);
    animation: sailing 10s ease-out forwards;
    */
  }
  @keyframes sailing {
    0% {
      transform: translateX(1800px);
    }
    100% {
      transform: translateX(1700px);
    }
  }

  @keyframes shadCast {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
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
const BoatSVG = props => {
  return (
    <BoatSVGWrapper id="boat-svg">
    
      <polygon
        id="boatShad"
        fill="url(#boatShad-grad)"
        points="1577.6 891.2 1489 893.3 1500.3 903.7 1907 889 1837 885.6"
      />
      <g filter="url(#boat-spec-light)" clipPath="url(#boat-clipPath)">
        <g id="boatReflect" opacity="0.3">
          <g id="sails_3_">
            <linearGradient
              id="SVGID_41_"
              x1="1447.335"
              x2="1471.5216"
              y1="850.2686"
              y2="826.0819"
              gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)"
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
            <polyline fill="url(#SVGID_41_)" points="1459.5 943.9 1500.4 912.5 1463.5 908.3" />
            <linearGradient
              id="SVGID_42_"
              x1="1394.1494"
              x2="1434.9337"
              y1="833.3193"
              y2="792.535"
              gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)"
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
            <polyline fill="url(#SVGID_42_)" points="1460.2 943.8 1463.4 908.3 1435.9 905.2 1411.3 967.6" />
          </g>
          <g id="hull_3_" fill="none" strokeMiterlimit="10" strokeWidth="3.5808">
            <path stroke="#000" d="M1427.2 912.4c.2-4.6 33.9-6.5 75.2-4.1" />
            <path stroke="#CCC" d="M1427.3 910.4c.2-4.6 33.9-6.5 75.2-4.1" />
            <path stroke="#333" d="M1427.4 907.6c.2-4.6 33.9-6.5 75.2-4.1" />
          </g>
        </g>
        <g id="boat_1_">
          <g id="sails_2_">
            <linearGradient
              id="SVGID_43_"
              x1="1442.9785"
              x2="1467.6312"
              y1="891.7266"
              y2="867.0738"
              gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)"
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
            <polyline fill="url(#SVGID_43_)" points="1459.6 857.1 1501.4 890.9 1463.7 895.4" />
            <linearGradient
              id="SVGID_44_"
              x1="1388.792"
              x2="1429.885"
              y1="874.4795"
              y2="833.3865"
              gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)"
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
            <polyline fill="url(#SVGID_44_)" points="1460.3 857.2 1463.6 895.4 1435.4 898.8 1410.3 831.6" />
          </g>
          <g id="hull_2_" fill="none" strokeMiterlimit="10" strokeWidth="3.7589">
            <path stroke="#000" d="M1426.6 891c.2 5 34.6 7 76.9 4.5" />
            <path stroke="#CCC" d="M1426.7 893.2c.2 5 34.6 7 76.9 4.5" />
            <path stroke="#333" d="M1426.8 896.3c.2 5 34.6 7 76.9 4.5" />
          </g>
        </g>
        <circle className="blinker" cx="1494.5" cy="893.5" r="2.5" fill="#fff" />
        <circle className="blinker"  cx="1494.5" cy="909.5" r="2.5" fill="#fff" />
        </g>
        <ellipse id="port-light" cx="1426" cy="889.5" fill="#FF4623" rx="2" ry="1.5" />
        <ellipse id="port-light-ref" cx="1426" cy="913.5" fill="#FF4623" rx="2" ry="1.5" opacity="0.5"/>
    </BoatSVGWrapper>
  );
};

export default BoatSVG;

/*



<g  width="1920" height="1080">
  <g id="boat_2_">
    <rect width="1920" height="200" y="880" fill="#0FF"/>
    <linearGradient id="boatShad_2_" x1="1489" x2="1907" y1="894.6494" y2="894.6494" gradientUnits="userSpaceOnUse">
      <stop offset="0"/>
      <stop offset=".3313" stopColor="#030303" stopOpacity=".6687"/>
      <stop offset=".5785" stopColor="#0d0d0d" stopOpacity=".4215"/>
      <stop offset=".7976" stopColor="#1d1d1d" stopOpacity=".2024"/>
      <stop offset="1" stopColor="#333" stopOpacity="0"/>
    </linearGradient>
    <polygon id="boatShad_1_" fill="url(#boatShad_2_)" stroke="#FFF" strokeMiterlimit="10" strokeWidth="2" points="1577.6 891.2 1489 893.3 1500.3 903.7 1907 889 1837 885.6"/>
    <g id="boatReflect_1_">
      <g id="sails_3_">
        <linearGradient id="SVGID_41_" x1="1447.335" x2="1471.5216" y1="850.2686" y2="826.0819" gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e6e6e6"/>
          <stop offset=".1322" stopColor="#e0e0e0"/>
          <stop offset=".3017" stopColor="#d0d0d0"/>
          <stop offset=".4916" stopColor="#b6b6b6"/>
          <stop offset=".6963" stopColor="#919191"/>
          <stop offset=".9106" stopColor="#636363"/>
          <stop offset="1" stopColor="#4d4d4d"/>
        </linearGradient>
        <polyline fill="url(#SVGID_41_)" points="1459.5 943.9 1500.4 912.5 1463.5 908.3"/>
        <linearGradient id="SVGID_42_" x1="1394.1494" x2="1434.9337" y1="833.3193" y2="792.535" gradientTransform="matrix(.7761 .0756 .0903 -.7981 263.9783 1477.082)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e6e6e6"/>
          <stop offset=".1322" stopColor="#e0e0e0"/>
          <stop offset=".3017" stopColor="#d0d0d0"/>
          <stop offset=".4916" stopColor="#b6b6b6"/>
          <stop offset=".6963" stopColor="#919191"/>
          <stop offset=".9106" stopColor="#636363"/>
          <stop offset="1" stopColor="#4d4d4d"/>
        </linearGradient>
        <polyline fill="url(#SVGID_42_)" points="1460.2 943.8 1463.4 908.3 1435.9 905.2 1411.3 967.6"/>
      </g>
      <g id="hull_3_" fill="none" strokeMiterlimit="10" strokeWidth="3.5808">
        <path stroke="#000" d="M1427.2 912.4c.2-4.6 33.9-6.5 75.2-4.1"/>
        <path stroke="#CCC" d="M1427.3 910.4c.2-4.6 33.9-6.5 75.2-4.1"/>
        <path stroke="#333" d="M1427.4 907.6c.2-4.6 33.9-6.5 75.2-4.1"/>
      </g>
    </g>
    <g id="boat_1_">
      <g id="sails_2_">
        <linearGradient id="SVGID_43_" x1="1442.9785" x2="1467.6312" y1="891.7266" y2="867.0738" gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e6e6e6"/>
          <stop offset=".1322" stopColor="#e0e0e0"/>
          <stop offset=".3017" stopColor="#d0d0d0"/>
          <stop offset=".4916" stopColor="#b6b6b6"/>
          <stop offset=".6963" stopColor="#919191"/>
          <stop offset=".9106" stopColor="#636363"/>
          <stop offset="1" stopColor="#4d4d4d"/>
        </linearGradient>
        <polyline fill="url(#SVGID_43_)" points="1459.6 857.1 1501.4 890.9 1463.7 895.4"/>
        <linearGradient id="SVGID_44_" x1="1388.792" x2="1429.885" y1="874.4795" y2="833.3865" gradientTransform="matrix(.7761 -.0815 .0903 .8606 263.9783 246.2671)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e6e6e6"/>
          <stop offset=".1322" stopColor="#e0e0e0"/>
          <stop offset=".3017" stopColor="#d0d0d0"/>
          <stop offset=".4916" stopColor="#b6b6b6"/>
          <stop offset=".6963" stopColor="#919191"/>
          <stop offset=".9106" stopColor="#636363"/>
          <stop offset="1" stopColor="#4d4d4d"/>
        </linearGradient>
        <polyline fill="url(#SVGID_44_)" points="1460.3 857.2 1463.6 895.4 1435.4 898.8 1410.3 831.6"/>
      </g>
      <g id="hull_2_" fill="none" strokeMiterlimit="10" strokeWidth="3.7589">
        <path stroke="#000" d="M1426.6 891c.2 5 34.6 7 76.9 4.5"/>
        <path stroke="#CCC" d="M1426.7 893.2c.2 5 34.6 7 76.9 4.5"/>
        <path stroke="#333" d="M1426.8 896.3c.2 5 34.6 7 76.9 4.5"/>
      </g>
    </g>
    <circle id="blinker_7_" cx="1494.5" cy="893.5" r="2.5" fill="#FF4623"/>
    <circle id="blinker_6_" cx="1494.5" cy="909.5" r="2.5" fill="#FF4623"/>
    <path fill="#FBB03B" d="M1505 903l-2 7.1-3.8 2.9-38.2 30.5-51 25.6 24.3-56h-8.3v-8s8.1-1 7-1.3c-10-2.7-8-5.7-8-5.7V891l7 .1-22-60 51 24.5 40 35.5s3.4 1 4 2c1.3 2 0 9.9 0 9.9z"/>
    <ellipse id="blinker_5_" cx="1426" cy="889.5" fill="#FF4623" rx="2" ry="1.5"/>
    <ellipse id="blinker_4_" cx="1426" cy="913.5" fill="#FF4623" rx="2" ry="1.5"/>
  </g>
</g>
*/

/*
******************* previous


    <BoatSVGWrapper id="boat-svg" >
      <polygon
        className="sail"
        id="boatShad"
        fill="url(#boatShad-grad)"
        points="170.5 61.2 82 63.3 93.2 73.7 500 59 429.9 55.6"
      />

      <g id="boat-group">
        <g id="boatReflect" className="sail">
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

        <g id="boat" className="sail" filter="url(#boat-spec-light)">
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
        <ellipse className="sail" id="port-light-ref" cx="19" cy="83.5" fill="#FF4623" rx="2" ry="1.5" />
        <ellipse className="sail" id="port-light" cx="19" cy="59.5" fill="#FF4623" rx="2" ry="1.5" />
        <circle className="sail" id="blinker_7_" cx="87.5" cy="63.5" r="2.5" fill="#fff" />
        <desc>end of boat container</desc>
      </g>


      */
