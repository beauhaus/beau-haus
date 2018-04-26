import React from 'react';
import ReactDOM from 'react-dom';

class BHLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: "#FF9C2B"
    };
  }
  render() {
      // do I need xmidymid meet here? delete?
    return (
      <svg id="bh-logo" viewBox="0 0 860 650" preserveAspectRatio="xMidYMid meet">
        <path id="logo-h" d="M0 0h430v325H0z" />
        <g className="logo-b">
          <ellipse cx="133.7" cy="243.5" rx="79.7" ry="81.2" />
          <ellipse cx="133.7" cy="81.2" rx="79.7" ry="81.2" />
          <path d="M0 0h133v325H0z" />
        </g>
        <circle cx="215" cy="293.5" r="31.5" fill={this.state.dotColor} />
        <path id="logo-h-blocks" fill="#000" d="M215 0h112v125H215zm0 200h112v125H215z" />
      </svg>
    );
  }
}

export default BHLogo;
/*
width="222" height="168"
// xmlns="http://www.w3.org/2000/svg"
*/