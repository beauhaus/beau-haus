import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BtnDB from './menuData.json';

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable */

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPos: 'translate(277 23)'
    };
    this.renderBtns = this.renderBtns.bind(this);
  }

  componentDidMount(props) {
    this.setState(props => {
      place: 'holder';
    });
    // console.log('menu didMount state: ', this.state);
  }
  renderBtns(btn) {
    return (
      <Link
        key={btn.id}
        onClick={() => this.props.select(btn.name, btn.fill)}
        to={`/${btn.name !== 'home' ? btn.name : ''}`}
      >
        <g className={btn.name === this.props.page ? '' : 'lo-sat'}>
          <text className="menu-txt" transform={btn.txtPos}>{btn.name}</text>
          <circle transform={this.state.btnPos} cx={btn.x} cy={btn.y} r={btn.r} fill={btn.fill} />
        </g>
      </Link>
    );
  }
  render() {
    const { btns } = BtnDB;

    return (
      <div className="menu-frame">
        <svg className="menu-link" id="menu-desktop" viewBox="76.5 0 479 500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="lo-sat">
              <feColorMatrix type="saturate" values=".1" />
            </filter>
          </defs>
          {btns.map(this.renderBtns)}
        </svg>
      </div>
    );
  }
}
export default NavMenu;

/*
page returns false
this.props.page ? 
*/
