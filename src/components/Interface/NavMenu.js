import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeContainer from '../HomeContainer';

class NavMenu extends React.Component {
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
      <BrowserRouter>
        <div>
          <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <filter id="filter-saturate">
              <feColorMatrix type="saturate" values=".2" />
            </filter>
            <Link to="/">
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-light"
                id="btn-home"
                cx="17.5"
                cy="27.5"
                r="27.5"
                fill={this.state.homeColor}
              />
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-mute"
                cx="17.5"
                cy="27.5"
                r="27.5"
                fill={this.state.homeColor}
              />
              <text transform="translate(107.521 65)">home</text>
            </Link>
            <Link to="/create">
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-light"
                id="btn-create"
                cx="50.5"
                cy="127.5"
                r="27.5"
                fill={this.state.createColor}
              />
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-mute"
                cx="50.5"
                cy="127.5"
                r="27.5"
                fill={this.state.createColor}
              />
              <text transform="translate(127.6519 165)">create</text>
            </Link>
            <Link to="/collect">
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-light"
                id="btn-collect"
                cx="84.5"
                cy="227.5"
                r="27.5"
                fill={this.state.collectColor}
              />
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-mute"
                cx="84.5"
                cy="227.5"
                r="27.5"
                fill={this.state.collectColor}
              />
              <text transform="translate(156.7915 266)">collect</text>
            </Link>
            <Link to="/code">
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-light"
                id="btn-code"
                cx="17.5"
                cy="327.5"
                r="27.5"
                fill={this.state.codeColor}
              />
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-mute"
                cx="17.5"
                cy="327.5"
                r="27.5"
                fill={this.state.codeColor}
              />
              <text transform="translate(124.3608 365)">code</text>
            </Link>
            <Link to="/connect">
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-light"
                id="btn-connect"
                cx="50.5"
                cy="427.5"
                r="27.5"
                fill={this.state.connectColor}
              />
              <circle
                transform="translate(277 23)"
                className="btn btn-menu-mute"
                cx="50.5"
                cy="427.5"
                r="27.5"
                fill={this.state.connectColor}
              />
              <text transform="translate(90.3916 465)">connect</text>
            </Link>

            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/create" component={HomeContainer} />
            <Route exact path="/collect" component={HomeContainer} />
            <Route exact path="/code" component={HomeContainer} />
            <Route exact path="/connect" component={HomeContainer} />
          </svg>
        </div>
      </BrowserRouter>
    );
  }
}
export default NavMenu;
