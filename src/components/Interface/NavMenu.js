import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeContainer from '../HomeContainer';
import Create from '../pages/Create';
import Collect from '../pages/Collect';


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
      pos: 'translate(277 23)'    };

    const btns = [
      {
        id: 10,
        name: 'home',
        x: '17.5',
        y: '27.5',
        r: '27.5',
        txtPos: 'translate(107.521 65)',
        color: '#ebbd89',
      },
      {
        id: 20,
        name: 'create',
        x: '50.5',
        y: '127.5',
        r: '27.5',
        txtPos: 'translate(127.6519 165)',
        color: '#9b353a',
      },
      {
        id: 30,
        name: 'collect',
        x: '84.5',
        y: '227.5',
        r: '27.5',
        txtPos: 'translate(156.7915 266)',
        color: '#85bb8f',
      },
      {
        id: 40,
        name: 'code',
        x: '17.5',
        y: '327.5',
        r: '27.5',
        txtPos: 'translate(124.3608 365)',
        color: '#567ace',
      },
      {
        id: 50,
        name: 'connect',
        x: '50.5',
        y: '427.5',
        r: '27.5',
        txtPos: 'translate(90.3916 465)',
        color: '#65aca2',
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
              <Link key={btn.id+1} to={`/${btn.name}`}>
                <circle
                  key={btn.id+2}
                  transform={btnConfig.pos}
                  className="btn btn-menu-light"
                  id={`btn-${btn.name}`}
                  cx={btn.x}
                  cy={btn.y}
                  r={btn.r}
                  fill={btn.color}
                />
                <circle
                  key={btn.id+3}
                  transform={btnConfig.pos}
                  className="btn btn-menu-mute"
                  id={`btn btn-${btn.name}`}
                  cx={btn.x}
                  cy={btn.y}
                  r={btn.r}
                  fill={btn.color}
                />
                <text key={btn.id+4} transform={btn.txtPos}>
                  {btn.name}
                </text>
              </Link>
            ))}

            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/collect" component={Collect} />
            <Route exact path="/code" component={HomeContainer} />
            <Route exact path="/connect" component={HomeContainer} />
          </svg>
        </div>
      </BrowserRouter>
    );
  }
}
export default NavMenu;