import React from 'react';
import {Power1, TimelineLite} from "gsap";
import styled from 'styled-components';


// import ReactDOM from 'react-dom';
import WhiteCaps from './WhiteCaps';
// import Shore from './Shore';
// import Banner from '../Banner';

// SVG
const WaterBodyWrapper = styled.svg`
position: absolute;
width: 100vw;
height: 20vh;
bottom: 0;
left: 0;
`
// No need for state -- However must have lifecycle hooks, therefore class component..

class WaterBody extends React.Component {
  componentDidMount() {
    const swellTL = new TimelineLite();
    swellTL
      .fromTo(
        '#swell-stop1',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '0'
      )
      .fromTo(
        '#swell-stop2',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=1.5'
      )
      .fromTo(
        '#swell-stop3',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      )
      .fromTo(
        '#swell-stop4',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      )
      .fromTo(
        '#swell-stop5',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=7.5'
      )
      .fromTo(
        '#swell-stop6',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=0'
      )
      .fromTo(
        '#swell-stop7',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      )
      .fromTo(
        '#swell-stop8',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=2.5'
      )
      .fromTo(
        '#swell-stop9',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=0.5'
      )
      .fromTo(
        '#swell-stop10',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=0.5'
      )
      .fromTo(
        '#swell-stop11',
        9,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=0.5'
      );
  }

  render() {

    return (
      <WaterBodyWrapper id="pond">
        <defs>

          <linearGradient
            id="swells-gradient"
            x1="960.9453"
            x2="959.0538"
            y1="208.3691"
            y2="-8.3697"
            gradientUnits="userSpaceOnUse"
          >
            <stop id="swell-stop11" offset="0" stopColor="var(--darkMist)" />
            <stop id="swell-stop10" offset="0.165" stopColor="var(--darkMist)" />
            <stop id="swell-stop9" offset="0.296" stopColor="var(--darkMist)" />
            <stop id="swell-stop8" offset="0.436" stopColor="var(--darkMist)" />
            <stop id="swell-stop7" offset="0.556" stopColor="var(--darkMist)" />
            <stop id="swell-stop6" offset="0.664" stopColor="var(--darkMist)" />
            <stop id="swell-stop5" offset="0.746" stopColor="var(--darkMist)" />
            <stop id="swell-stop4" offset="0.824" stopColor="var(--darkMist)" />
            <stop id="swell-stop3" offset="0.888" stopColor="var(--darkmist)" />
            <stop id="swell-stop2" offset="0.947" stopColor="var(--darkmist)" />
            <stop id="swell-stop1" offset="1" stopColor="var(--darkMist)" />
          </linearGradient>
        </defs>
        <WhiteCaps/>
        <path fill="url(#swells-gradient)" d="M0 0h1920v200H0z" opacity=".3" />
        
        </WaterBodyWrapper>
    );
}
}
// <path id="pond-base" fill="url(#pond-base-grad)" d="M0 0h1920v200H0z" opacity="1" />
// <WhiteCaps />
// <Shore />

export default WaterBody;
