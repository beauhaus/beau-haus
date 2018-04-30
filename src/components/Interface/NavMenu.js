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
      page: props.palette
    };
    // this.handleClick = this.handleClick.bind(this);
    this.renderBtns = this.renderBtns.bind(this);
  }

  renderBtns(btn, idx) {
    const { palette } = this.props;
    // const btns = BtnDB.btns;
    return (
      <Link key={btn.id + 1} 
      onClick={() => this.props.click(palette[idx].color)}
      to={`/${btn.name!=="home"? btn.name: ''}`}>
        <text key={btn.id} transform={btn.txtPos}>
          {' '}
          {btn.name}{' '}
        </text>
        <circle
          key={btn.id + 2}
          transform={this.state.btnPos}
          className="btn btn-menu-light"
          id={`btn-${btn.name}`}
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          fill={palette[idx].color}
        />
        <circle
          key={btn.id + 3}
          transform={this.state.btnPos}
          className="btn btn-menu-mute"
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          fill={palette[idx].color}
        />
      </Link>
    );
  }
  render() {
    const { palette } = this.props;
    // console.log(props)
    // <Link onClick={() => this.handleClick(page[idx].name)}>
    // onClick={() => this.props.click}
    // console.log(props)
    return (
      <div className="nav-menu">
        <svg id="menu-desktop" viewBox="76.5 0 479 500" preserveAspectRatio="xMidYMid meet">
          <filter id="filter-saturate">
            <feColorMatrix type="saturate" values=".2" />
          </filter>
          {BtnDB.btns.map(this.renderBtns)}
        </svg>
      </div>
    );
  }
}
export default NavMenu;

/*

*/
