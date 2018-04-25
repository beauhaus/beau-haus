import React from 'react';
import ReactDOM from 'react-dom';

import Pond from './LandingTree/Pond';
import BackTree from './LandingTree/BackTree';
import MidTree from './LandingTree/MidTree';
import FrontTree from './LandingTree/FrontTree';
import BHLogo from './Interface/BHLogo'
class Background extends React.Component {
  state = {
    options: [],
    skyPondMatch: '#a8a8a8',
    skyRight: '#fff',
    pondForeground: '#cfcfcf'
  };

  render() {
    return (
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <linearGradient id="bg-grad">
          <stop className="offset-match" offset="0" stopColor={this.state.skyPondMatch} />
          <stop className="bg-right" offset="1" stopColor={this.state.skyRight} />
        </linearGradient>
        
        <path fill="url(#bg-grad)" d="M.5 0h1920v1080H.5z" />
        <Pond foregroundColor={this.state.pondForeground} offset={this.state.skyPondMatch} />
        </svg>
    );
  }
}


/** Do away with viewBox Create new SVG exactly the size of this component
 * and do a transform translate to the image.
 */
class Preview extends React.Component {//change name ## THIS IS FOR PHOTO OVERLAY ##
  state = {
    thumbnail: []
  };
  render() {
    return (
      <svg id="brdr1" xmlns="http://www.w3.org/2000/svg" viewBox="300 0 1920 1080">
        <defs>
          <linearGradient opacity=".2" id="grad" x1="0%" y1="10%" x2="10%" y2="100%">
            <stop stopColor="transparent" offset="0" />
            <stop stopColor="white" stopOpacity="1" offset=".9" />
          </linearGradient>
          <mask id="mask1">
            <polygon fill="url(#grad)" points="1623 993 841 993 850.5 880 1613.5 880" />
          </mask>
          <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
            <image  height="1" width="1"  preserveAspectRatio="none" href="https://dl.dropbox.com/s/f6vtd4o0vxx1378/ostrich.jpg?dl=0"/>
        </pattern>
        </defs>

        <g id="display">
          <rect id="view" width="784" height="441" x="839.5" y="439" fill="url(#pattern1)"/>
          <polygon
            id="reflection"
            mask="url(#mask1)"
            fill="url(#pattern1)"
            points="1623 993 841 993 850.5 880 1613.5 880"
          />
        </g>
      </svg>
    );
  }
}

/*
//mask and polygon
points="1614.5 993 850.5 993 840.5 880 1623.5 880"

<g id="display">
      <polygon id="reflection" fill="#73FFFF" points="1614.5 993 850.5 993 840.5 880 1623.5 880"/>
      <rect id="view" width="784" height="441" x="839.5" y="439" fill="#FF7BAC"/>
    </g>
<defs>
    <linearGradient id="grad" x1="0%" y1="10%" x2="10%" y2="100%">
      <stop stop-color="white" offset="0"/>
      <stop stop-color="transparent" stop-opacity="1" offset=".9"/>
    </linearGradient>
      <mask id="mask1">
        <rect width="400" height="400" fill="url(#grad)"/>
    </mask>
    </defs>
  <image  width="300" height="300" y="0" x="0" mask="url(#mask1)" xlink:href="https://dl.dropbox.com/s/f6vtd4o0vxx1378/ostrich.jpg?dl=0"/>
  */

//  <Preview />
class AppContainer extends React.Component {
  state = {
    options: []
  };
  
  render() {
    return (
      <div className="svg-container">
      <h1 className="beauhaus-banner">BEAU<span className="dot">.</span>HAUS</h1>
        <Background />
        <BackTree />
        <MidTree />
        <FrontTree />
        <BHLogo/>
      </div>
    );
  }
}

export default AppContainer;
