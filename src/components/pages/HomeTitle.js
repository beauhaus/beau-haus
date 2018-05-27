import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// transform: rotate(-20deg);
// transform: translate(0, 200px, -20deg);
// transform: translateY(50px) rotate(-20deg);
const HomeTitleWrapper = styled.svg`
position: absolute;
top:0;
left: 0;
width: 100vw;
transform: translateY(50px) rotate(-20deg);
transform-origin: 50% 50%;
text {
    opacity: 1;
}

& > g {
   
    & .home-mast {
      transform: translateX(5px);
      fill: #97815f;
      width: 20px;
    }
    & .home-flag {
      fill: url(#flag-grad);
    }
  
    & .home-banner {
      font-family: 'Montserrat', sans-serif;
      font-weight: 100;
      font-size: 120px;
      fill: #000;
      letter-spacing: 12;
    }
  
    &  .home-title {
      fill: #f9ffe2;
      font-family: 'Limelight', sans-serif;
      font-weight: 400;
      font-size: 55px;
      letter-spacing: 4px;
      color: white;
      line-height: 12px;
    }
  
    & .roles {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      fill: #4d4d4d;
      font-size: 46;
      letter-spacing: 3px;
    }
    & .graphic {
      mix-blend-mode: screen;
      opacity: 1;
    }
  }
`;
const HomeTitle = props => {
  return (
    <HomeTitleWrapper viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
      <linearGradient
        id="flag-grad"
        x1="319.0308"
        x2="1511.0332"
        y1="-326.666"
        y2="-326.666"
        gradientTransform="matrix(1.0496 -.3997 .3559 .9345 469.4922 1187.8342)"
      >
        <stop offset="0" stopColor="#7d2424" />
        <stop offset="1" stopColor="#c95353" />
      </linearGradient>
      <g>
        <path className="home-flag " d="M685 448h1376v66H685z" />

        <rect className="home-mast graphic" height="1878" x="960" y="-363" />
        <text className="home-title" transform="translate(698 500)">
          creative developer
        </text>

        <text className="home-banner" transform="translate(990 423.7485)">
          beau.haus
        </text>
        <path fill="none" d="M1005.82901 690.71389l323.337-123.1414 13.77333 36.16515-323.337 123.1414z" />

        <text className="roles" transform="translate(1001 561)">
          <tspan x="0" y="0">
            code
          </tspan>
          <tspan x="0" y="52">
            design
          </tspan>
          <tspan x="0" y="104">
            education
          </tspan>
        </text>
      </g>
    </HomeTitleWrapper>
  );
};

export default HomeTitle;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
  <linearGradient id="a" x1="319.0308" x2="1511.0332" y1="-326.666" y2="-326.666" gradientTransform="matrix(1.0496 -.3997 .3559 .9345 469.4922 1187.8342)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#7d2424"/>
    <stop offset="1" stopColor="#c95353"/>
  </linearGradient>
  <path fill="url(#a)" d="M1952.8 314.1L701.6 790.5l-27-71 1251.1-476.4z"/>
  <path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="15.2265" d="M708.2-8.9L1127 1090.8"/>
  <path fill="none" d="M688.7639 725.86332l256.053-97.5166 17.795 46.725-256.053 97.5166z"/>
  <text fill="#F9FFE2" font-family="'JCHEadA'" font-size="72" letter-spacing="5" transform="rotate(-20.852 2454.24311264 -1534.01257691)">
    CREATIVE
  </text>
  <path fill="none" d="M963.52064 621.184l441.084-167.9848 17.795 46.725-441.084 167.9848z"/>
  <text fill="#F9FFE2" font-family="'JCHEadA'" font-size="72" letter-spacing="5" transform="rotate(-20.852 2307.31083366 -2333.04619386)">
    DEVELOPMENT
  </text>
  <path fill="none" d="M912.45635 460.83061l766.4769-291.90918 47.90414 125.7837-766.4769 291.90918z"/>
  <text font-family="'Montserrat-Thin'" font-size="120" letter-spacing="12" transform="rotate(-20.852 2059.6619496 -2313.8944712)">
    beau.haus
  </text>
  <path fill="none" d="M1005.82901 690.71389l323.337-123.1414 13.77333 36.16515-323.337 123.1414z"/>
  <text fill="#4D4D4D" font-family="'Montserrat-Thin'" font-size="46" letter-spacing="3" transform="rotate(-20.852 2478.53659607 -2406.2774739)">
    code
  </text>
  <path fill="none" d="M1025.138 741.28842l323.337-123.1414 13.77333 36.16515-323.337 123.1414z"/>
  <text fill="#4D4D4D" font-family="'Montserrat-Thin'" font-size="46" letter-spacing="3" transform="rotate(-20.852 2625.61141639 -2433.32523806)">
    design
  </text>
  <path fill="none" d="M1044.31575 791.81749l323.337-123.1414 13.77333 36.16515-323.337 123.1414z"/>
  <text fill="#4D4D4D" font-family="'Montserrat-Thin'" font-size="46" letter-spacing="3" transform="rotate(-20.852 2772.67990095 -2460.36911067)">
    education
  </text>
</svg>

*/
