import React from 'react';
import ReactDOM from 'react-dom';

class Background extends React.Component {
  state = {
    options: [],
    skyPondMatch: '#a8a8a8',
    skyRight: '#fff',
    pondForeground: '#cfcfcf'
  };

  //this background covers the whole canvas
  // <stop className="offset-match" offset="0" stopColor={this.state.skyPondMatch} />
  // <stop className="bg-right" offset="1" stopColor={this.state.skyRight} />
  render() {
    return (
      <svg className="background" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <linearGradient id="bg-grad">
          <stop offset="0" stopColor="#a8a8a8" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <path fill="url(#bg-grad)" d="M.5 0h1920v1080H.5z" />
      </svg>
    );
  }
}
// <Banner/>

export default Background;
