import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: '#FF9C2B',
      homeColor: '#FFCC91',
      createColor: '#A66F71',
      collectColor: '#7A918F',
      codeColor: '#A07F99',
      connectColor: '#898AA3'
    };
  }
  render() {
    // do I need xmidymid meet here? delete?
    return (
      <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(277 23)">
          <circle id="home-btn" cx="17.5" cy="27.5" r="27.5" fill={this.state.homeColor} />
          <circle id="create-btn" cx="50.5" cy="127.5" r="27.5" fill={this.state.createColor} />
          <circle id="collect-btn" cx="17.5" cy="327.5" r="27.5" fill={this.state.collectColor} />
          <circle id="code-btn" cx="50.5" cy="427.5" r="27.5" fill={this.state.codeColor} />
          <circle id="connect-btn" cx="84.5" cy="227.5" r="27.5" fill={this.state.connectColor} />
        </g>
        <path d="M67.8 26.6h158.7v45.9H67.8z" />
        <text transform="translate(107.521 60.751)">home</text>
        <path d="M100.8 126.6h158.7v45.9H100.8z" />
        <text transform="translate(127.6519 160.751)">create</text>
        <path d="M134.8 227.6h158.7v45.9H134.8z" />
        <text transform="translate(156.7915 261.751)">collect</text>
        <path d="M68.8 326.6h158.7v45.9H68.8z" />
        <text transform="translate(124.3608 360.751)">code</text>
        <path d="M73.4 426.6h186.1v45.9H73.4z" />
        <text transform="translate(90.3916 460.75)">connect</text>
      </svg>
    );
  }
}

export default Menu;
/*
width="222" height="168"
// xmlns="http://www.w3.org/2000/svg"
*/
