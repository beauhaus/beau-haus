import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BHLogoWrapper = styled.svg`
  position: absolute;
  top: 5vh;
  left: 4vw;
  z-index: 2;
  width: 80px;
  height: 65px;
  
  & > #logo-h {
    fill: #4e4d4d;
  }
  & > .logo-b {
    fill: #b7b7b7;
  }
  & > #logo-h-blocks {
    fill: #838383;
  }
  `;
  /*
@media screen and (max-width : 768px) {    // tablet query
    #bh-logo { //SVG
    position: absolute;
    width: 14vw;
    height: 12vh;
    top: 2vh;
    left: 50%;
    margin-left: -7vw;
    // border: 2px solid fuchsia;
    }
 }
 */

const BHLogo = props => {
  return (
    <Link
      className="link"
      to={{
        pathname: '/'
      }}
      >
      <BHLogoWrapper className="bh-svg-wrapper" id="bh-logo" viewBox="0 0 440 325">
      <defs>
          <filter id="logo-shad" x="0" y="0">
            <feDropShadow dx="4" dy="4" stdDeviation="4" />
          </filter>
        </defs>

        <path fill="#4E4D4D" d="M0 0v325h215c-17.4 0-31.5-14.1-31.5-31.5S197.6 262 215 262v63h215V0H0z" />
        <g className="logo-b" filter="url(#logo-shad)">
          <ellipse cx="133.7" cy="81.2" rx="79.7" ry="81.2" />
          <path d="M0 0h133v325H0z" />
        </g>
        <path
          fill="#B7B7B7"
          d="M183.5 293.5c0-16.1 12.1-29.4 27.8-31.3 1.4-6 2.2-12.3 2.2-18.7 0-44.9-35.7-81.2-79.7-81.2S54 198.6 54 243.5s35.7 81.2 79.7 81.2c19.9 0 38-7.4 52-19.7-1.4-3.5-2.2-7.4-2.2-11.5z"
        />
        <path id="logo-h-blocks" fill="#000" d="M215 0h112v125H215zm0 200h112v125H215z" filter="url(#logo-shad)" />
      </BHLogoWrapper>
    </Link>
  );
};

export default BHLogo;

/*
*/
