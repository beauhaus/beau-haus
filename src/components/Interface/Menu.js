import React from 'react';
import ReactDOM from 'react-dom';

/**On hover a desaturated circle over each btn keyframes to opacity 0 in css */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: '',
      homeColor: '#ebbd89',
      createColor: '#9b353a',
      collectColor: '#85bb8f',
      codeColor: '#567ace',
      connectColor: '#65aca2'
    };
  }
  render() {
    // do I need xmidymid meet here? delete?
    return (
      <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
      <filter id="filter-saturate">
          <feColorMatrix type="saturate" values=".2" />
        </filter>
        <g transform="translate(277 23)">
        <circle className="btn-menu-light" id="btn-home" cx="17.5" cy="27.5" r="27.5" fill={this.state.homeColor} />
        <circle className="btn-menu-light" id="btn-create" cx="50.5" cy="127.5" r="27.5" fill={this.state.createColor} />
        <circle className="btn-menu-light" id="btn-collect" cx="84.5" cy="227.5" r="27.5" fill={this.state.collectColor} />
        <circle className="btn-menu-light" id="btn-code" cx="17.5" cy="327.5" r="27.5" fill={this.state.codeColor} />
        <circle className="btn-menu-light" id="btn-connect" cx="50.5" cy="427.5" r="27.5" fill={this.state.connectColor} />
        <circle className="btn-menu-mute" cx="17.5" cy="27.5" r="27.5" fill={this.state.homeColor} />
        <circle className="btn-menu-mute" cx="50.5" cy="127.5" r="27.5" fill={this.state.createColor} />
        <circle className="btn-menu-mute" cx="84.5" cy="227.5" r="27.5" fill={this.state.collectColor} />
        <circle className="btn-menu-mute" cx="17.5" cy="327.5" r="27.5" fill={this.state.codeColor} />
        <circle className="btn-menu-mute" cx="50.5" cy="427.5" r="27.5" fill={this.state.connectColor} />
    </g>
        <text transform="translate(107.521 65)">home</text>
        <text transform="translate(127.6519 165)">create</text>
        <text transform="translate(156.7915 266)">collect</text>
        <text transform="translate(124.3608 365)">code</text>
        <text transform="translate(90.3916 465)">connect</text>
      </svg>
    );
  }
}

export default Menu;
/*
        */
