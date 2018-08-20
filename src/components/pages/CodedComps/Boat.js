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

  @keyframes shadCast {
    0% {
      opacity: 0;
    }
    42% {
      opacity: 0;
    }
    52% {
      opacity: .7;
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
    <BoatSVGWrapper id="boat-svg" className="cruise" >
      <polygon
        id="boatShad"
        fill="url(#boatShad-grad)"
        points="1577.6 891.2 1489 893.3 1500.3 903.7 1907 889 1837 885.6"
      />
      <g id="boatReflect" filter="url(#boat-spec-light)" clipPath="url(#boat-clipPath)">
        <polyline fill="url(#ketch-sail-ref-grad)" points="1459.5 943.9 1500.4 912.5 1463.5 908.3" />
        <polyline fill="url(#main-sail-ref-grad)" points="1460.2 943.8 1463.4 908.3 1435.9 905.2 1411.3 967.6" />
      </g>
      <g filter="url(#boat-spec-light)" clipPath="url(#boat-clipPath)">

          <g id="main-boat">
            <polyline fill="url(#ketch-sail-grad)" points="1459.6 857.1 1501.4 890.9 1463.7 895.4" />
            <polyline fill="url(#main-sail-grad)" points="1460.3 857.2 1463.6 895.4 1435.4 898.8 1410.3 831.6" />
          </g>
      </g>
      <g id="hull-ref" strokeWidth="3.5808" fill="none">
        <path stroke="#000" d="M1427.2 912.4c.2-4.6 33.9-6.5 75.2-4.1" />
        <path stroke="#CCC" d="M1427.3 910.4c.2-4.6 33.9-6.5 75.2-4.1" />
        <path stroke="#333" d="M1427.4 907.6c.2-4.6 33.9-6.5 75.2-4.1" />
      </g>
      <g id="hull" strokeWidth="3.7589" fill="none">
        <path stroke="#000" d="M1426.6 891c.2 5 34.6 7 76.9 4.5" />
        <path stroke="#CCC" d="M1426.7 893.2c.2 5 34.6 7 76.9 4.5" />
        <path stroke="#333" d="M1426.8 896.3c.2 5 34.6 7 76.9 4.5" />
      </g>
      <circle className="blinker" cx="1494.5" cy="893.5" r="2.5" fill="#fff" />
      <circle className="blinker" cx="1494.5" cy="909.5" r="2.5" fill="#bbb" />

      <ellipse id="port-light" cx="1426" cy="889.5" fill="#FF4623" rx="2" ry="1.5" />
      <ellipse id="port-light-ref" cx="1426" cy="913.5" fill="#FF4623" rx="2" ry="1.5" opacity="0.5" />
    </BoatSVGWrapper>
  );
};

export default BoatSVG;
