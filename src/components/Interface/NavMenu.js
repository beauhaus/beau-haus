import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BtnDB from './menuData.json';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPos: 'translate(277 23)',
      page: [
        {
          name: 'home',
          color: "#ebbd89"
        },
        {
          name: 'create',
          color: "#9b353a"
        },
        {
          name: 'collect',
          color: "#85bb8f"
        },
        {
          name: 'code',
          color: "#567ace"
        },
        {
          name: 'connect',
          color: "#65aca2"
        },
      ]
    };
  }
  render() {
    const {page} = this.state;
    return (
      <div>
        <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
          <filter id="filter-saturate">
            <feColorMatrix type="saturate" values=".2" />
          </filter>

          {BtnDB.btns.map((btn, idx) => (
            <Link key={btn.id + 1} to={btn.lnk}>
              <circle
                key={btn.id + 2}
                transform={this.state.btnPos}
                className="btn btn-menu-light"
                id={`btn-${btn.name}`}
                cx={btn.x}
                cy={btn.y}
                r={btn.r}
                fill={page[idx].color}
              />
              <circle
                key={btn.id + 3}
                transform={this.state.btnPos}
                className="btn btn-menu-mute"
                cx={btn.x}
                cy={btn.y}
                r={btn.r}
                fill={page[idx].color}
              />
              <text key={btn.id + 4} transform={btn.txtPos}>
              {page[idx].name}
              </text>
            </Link>
          ))}
        </svg>
      </div>
    );
  }
}
export default NavMenu;

/*

*/
