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
    const btnConfig = {
      pos: 'translate(277 23)',

      class: 'btn'
    };

    const btns = [
      {
        muteId: 1,
        name: 'home',
        liteId: 2,
        x: '17.5',
        y: '27.5',
        r: '27.5',
        txtPos: 'translate(107.521 65)',
        color: '#ebbd89',
        txtId: 3,
        lnkId: 4
      },
      {
        muteId: 5,
        name: 'create',
        liteId: 6,
        x: '50.5',
        y: '127.5',
        r: '27.5',
        txtPos: 'translate(127.6519 165)',
        color: '#9b353a',
        txtId: 7,
        lnkId: 8
      },
      {
        muteId: 9,
        name: 'collect',
        liteId: 10,
        x: '84.5',
        y: '227.5',
        r: '27.5',
        txtPos: 'translate(156.7915 266)',
        color: '#85bb8f',
        txtId: 11,
        lnkId: 12
      },
      {
        muteId: 13,
        name: 'code',
        liteId: 14,
        x: '17.5',
        y: '327.5',
        r: '27.5',
        txtPos: 'translate(124.3608 365)',
        color: '#567ace',
        txtId: 15,
        lnkId: 16
      },
      {
        muteId: 17,
        name: 'connect',
        liteId: 18,
        x: '50.5',
        y: '427.5',
        r: '27.5',
        txtPos: 'translate(90.3916 465)',
        color: '#65aca2',
        txtId: 19,
        lnkId: 20
      }
    ];
    // do I need xmidymid meet here? delete?
    return (
      <BrowserRouter>
        <div>
          <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            <filter id="filter-saturate">
              <feColorMatrix type="saturate" values=".2" />
            </filter>
            {btns.map(btn => (
              <Link key={btn.lnkId} to={`/${btn.name}`}>
                <circle
                  key={btn.muteId}
                  transform={btnConfig.pos}
                  className="btn btn-menu-light"
                  id={`btn-${btn.name}`}
                  cx={btn.x}
                  cy={btn.y}
                  r={btn.r}
                  fill={btn.color}
                />
                <circle
                  key={btn.liteId}
                  transform={btnConfig.pos}
                  className="btn btn-menu-mute"
                  id={`btn-${btn.name}`}
                  cx={btn.x}
                  cy={btn.y}
                  r={btn.r}
                  fill={btn.color}
                />
                <text key={btn.txtId} transform={btn.txtPos}>
                  {btn.name}
                </text>
              </Link>
            ))}

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

/*
LINKS
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
            */
