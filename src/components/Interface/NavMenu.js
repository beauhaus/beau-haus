import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BtnDB from './menuData.json';

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable
 */
class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPos: 'translate(277 23)',
      page: props.page
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { page } = this.props;
    // console.log(props)
    // <Link onClick={() => this.handleClick(page[idx].name)}>
    // onClick={() => this.props.click}
    // console.log(props)
    return (
      <div className="nav-menu">
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
                onClick={() => this.props.click(page[idx].color)}
                key={btn.id + 3}
                transform={this.state.btnPos}
                className="btn btn-menu-mute"
                cx={btn.x}
                cy={btn.y}
                r={btn.r}
                fill={page[idx].color}
              />
              <text onClick={() => this.props.click(page[idx].name)} key={btn.id + 4} transform={btn.txtPos}>
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
