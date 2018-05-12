import React from 'react';
import ReactDOM from 'react-dom';
import WhiteCaps from './WhiteCaps';
import MuteButton from './MuteButton';
import Shore from './Shore';
// import Banner from '../Banner';
/***ShorePond will be vanishing after page transition from Landing */

class Pond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skyPondMatch: '#a8a8a8',
      skyRight: '#fff',
      pondForeground: '#cfcfcf',
      swellTime: new TimelineLite({
        onComplete() {
          this.restart();
        }
      })
    };
  }
  componentDidMount() {
    this.state.swellTime
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
      ).fromTo(
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
      ).fromTo(
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
      ).fromTo(
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
      ).fromTo(
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
      ).fromTo(
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
      ).fromTo(
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
      )
  }

  render() {
    // viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice"

    // viewBox="0 0 1920 200"
    return (
      <svg id="pond">
        <defs >
        <linearGradient id="pond-base-grad" x1="960" x2="960" y1="1080" y2="876" gradientUnits="userSpaceOnUse">
          <stop id="pond-stop1" offset="0" stopColor={this.props.foregroundColor} stopOpacity="1" />
          <stop id="pond-stop2" offset="1" stopColor={this.props.offset} stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="swells-gradient" x1="960.9453" x2="959.0538" y1="208.3691" y2="-8.3697" gradientUnits="userSpaceOnUse">

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
        <path id="pond-base" fill="url(#pond-base-grad)" d="M0 0h1920v200H0z" opacity="1" />
        <path fill="url(#swells-gradient)" d="M0 0h1920v200H0z" opacity=".4"/>
        <WhiteCaps />
        <Shore />
        {/*
        <MuteButton />
  */}
      </svg>
    );
  }
}

export default Pond;

/*
.01 * 1.12359550562 = 0.01123595505
.01 * 1.12359550562 = 0.01123595505
.02 * 1.12359550562 = 0.02247191011
.03 * 1.12359550562 = 0.03370786516
.05 * 1.12359550562 = 0.05617977528
.08 * 1.12359550562 = 0.08988764044
.13 * 1.12359550562 = 0.14606741573
.21 * 1.12359550562 = 0.23595505618
.34 * 1.12359550562 = 0.38202247191
.55 * 1.12359550562 = 0.61797752809
.89 * 1.12359550562 = 1
*/


/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 200">
  <linearGradient id="a" 
  x1="1006.0488" 
  x2="913.9517" 
  y1="361.1543"
   y2="-161.1544" 
   gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#cfcfcf" stop-opacity="0"/>
    <stop offset="1" stop-color="#a8a8a8"/>
  </linearGradient>
  <path fill="url(#a)" d="M0 0h1920v200H0z"/>
</svg>



*/

/*BEFORE CHANGE */

/*

      <svg id="pond" >
      <linearGradient id="pond-base-grad" x1="960" x2="960" y1="1080" y2="876" gradientUnits="userSpaceOnUse">
        <stop id="pond-stop1" offset="0" stopColor={this.props.foregroundColor} stopOpacity="1" />
        <stop id="pond-stop2" offset="1" stopColor={this.props.offset} stopOpacity="0" />
      </linearGradient>
      
      <path id="pond-base" fill="url(#pond-base-grad)" d="M1.5 878h1920v200H1.5z" opacity="1" />

      <linearGradient
        id="swells-grad"
        x1="961.0376"
        x2="956.9628"
        y1="1096.7217"
        y2="863.2787"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="swell-stop4" offset="0" stopColor="var(--darkMist)" />
        <stop id="swell-stop3" offset=".33" stopColor="var(--darkMist)" />
        <stop id="swell-stop2" offset=".66" stopColor="var(--darkMist)" />
        <stop id="swell-stop1" offset="1" stopColor="var(--darkMist)" />
      </linearGradient>

      <path id="swells" fill="url(#swells-grad)" d="M-1 880h1920v200H-1z" opacity=".5" />
      <Shore />
      <WhiteCaps />
      <MuteButton />
    </svg>

    */
