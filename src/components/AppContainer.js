import React from 'react';
import ReactDOM from 'react-dom';

import Pond from './LandingTree/Pond';
import BackTree from './LandingTree/BackTree';
import MidTree from './LandingTree/MidTree';
import FrontTree from './LandingTree/FrontTree';


class Background extends React.Component {
  state = {
    options: [],
    offsetMatch: "#a8a8a8",
    bgRight: "#fff",
    pondForeground: "#cfcfcf"
  };

  render() {
    // <stop class="offset-match" offset="0" stopColor="var(--offset-match)" />
    return (
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <linearGradient id="bg-grad">
        <stop className="offset-match" offset="0" stopColor={this.state.offsetMatch} />
        <stop className="bg-right" offset="1" stopColor={this.state.bgRight} />
        </linearGradient>
        <path fill="url(#bg-grad)" d="M.5 0h1920v1080H.5z" />
        <Pond foregroundColor={this.state.pondForeground} offset={this.state.offsetMatch}/>
      </svg>
    );
  }
}

class AppContainer extends React.Component {
  state = {
    options: [],
  };

  render() {


    return (
      <div className="svg-container">
        <Background />
        <h1 className="beauhaus-banner">BEAUHAUS</h1>
        <BackTree />
        <MidTree />
        <FrontTree />
      </div>
    );
  }
}

export default AppContainer;
