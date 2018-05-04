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

    this.renderBtns = this.renderBtns.bind(this);
    this.tl = new TimelineMax({
      // yoyoEase: true,
      // smoothChildTiming: true,
      paused: true
    });
  }

  componentDidMount() {
    const { tl, refs } = this;
    BtnDB.btns.forEach((item, idx) => {
      tl.set(refs[item.id], { opacity: 0, scale: 0.5 });
    });
  }

  renderBtns(btn, idx) {
    const { palette } = this.props;
    // const btns = BtnDB.btns;
    
    return (
      <Link
        key={btn.id + 'L'}
        onClick={() => this.props.click(palette[idx].color, btn.name)}
        to={`/${btn.name !== 'home' ? btn.name : ''}`}
      >
        <text key={btn.id + 'T'} transform={btn.txtPos} ref={btn.id}>
        {btn.name}
        {console.log(this.props.palette[idx].pageName === btn.name)}
        </text>
        <circle
          key={'themeBtn' + btn.id}
          transform={this.state.btnPos}
          className="nav-dot"
          id={`btn-${btn.name}`}
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          filter="url(#saturate)"
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
      <div>
        <svg className="menu-link" id="menu-desktop" viewBox="76.5 0 479 500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="saturate">
              <feColorMatrix type="saturate" values=".2" />
            </filter>
          </defs>
          {BtnDB.btns.map(this.renderBtns)}
        </svg>
      </div>
    );
  }
}
export default NavMenu;

/*
  
  <filter id="filter-saturate">
    <feColorMatrix type="saturate" values=".2" />
  </filter>
        <circle
          key={"themeBtnCover"+ btn.id }
          transform={this.state.btnPos}
          className="btn btn-menu-mute"
          cx={btn.x}
          cy={btn.y}
          r={btn.r}
          fill={palette[idx].color}
        />
*/
