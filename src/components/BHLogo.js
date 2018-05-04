import React from 'react';
import ReactDOM from 'react-dom';

class BHLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: ''
    };
  }
  render() {
    return (
      <svg id="bh-logo" viewBox="0 0 440 325">
        <defs>
          <filter id="svg" x="0" y="0">
            <feDropShadow dx="4" dy="2" stdDeviation="4" />
          </filter>
          <filter id="sat-adjust">
            <feColorMatrix type="saturate" values="1" />
          </filter>
        </defs>
        <path id="logo-h" d="M0 0h430v325H0z" />
        <g className="logo-b" filter="url(#svg)">
          <ellipse cx="133.7" cy="243.5" rx="79.7" ry="81.2" />
          <ellipse cx="133.7" cy="81.2" rx="79.7" ry="81.2" />
          <path d="M0 0h133v325H0z" />
        </g>
        <circle id="logo-dot" cx="215" cy="293.5" r="31.5" fill={this.props.dot} />
        <path id="logo-h-blocks" fill="#000" d="M215 0h112v125H215zm0 200h112v125H215z" filter="url(#svg)" />
      </svg>
    );
  }
}

export default BHLogo;
/*
width="222" height="168"
// xmlns="http://www.w3.org/2000/svg"
*/
