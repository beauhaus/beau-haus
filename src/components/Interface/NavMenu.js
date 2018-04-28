import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BtnDB from './menuData.json';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: ''
    };
  }
  render() {
    const btnConfig = {
      pos: 'translate(277 23)'
    };

    return (
      <div>
        <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
        <filter id="filter-saturate">
        <feColorMatrix type="saturate" values=".2" />
        </filter>
        {BtnDB.btns.map(btn => (
          <Link key={btn.id + 1} to={`/${btn.name}`}>
          <circle
          key={btn.id + 2}
          transform={btnConfig.pos}
          className="btn btn-menu-light"
          id={`btn-${btn.name}`}
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          fill={btn.color}
          />
          <circle
          key={btn.id + 3}
          transform={btnConfig.pos}
          className="btn btn-menu-mute"
          id={`btn btn-${btn.name}`}
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          fill={btn.color}
          />
          <text key={btn.id + 4} transform={btn.txtPos}>
          {btn.name}
          </text>
          </Link>
        ))}
        </svg>

        
        </div>
      );
    }
  }
  // </BrowserRouter>
export default NavMenu;