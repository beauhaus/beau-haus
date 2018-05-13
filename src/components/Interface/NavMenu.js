import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import BtnDB from './menuData.json';

ReactDOM.findDOMNode(this);

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable */

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'holder',
      btnPos: 'translate(277 23)',
      linkHover: false
    };
    this.renderBtns = this.renderBtns.bind(this);

    this.handleMenuHoverOn = this.handleMenuHoverOn.bind(this);
    this.handleMenuHoverOff = this.handleMenuHoverOff.bind(this);
    this.handleLinkHoverOn = this.handleLinkHoverOn.bind(this);
    this.handleLinkHoverOff = this.handleLinkHoverOff.bind(this);
  
    this.playMenuHoverOn = this.playMenuHoverOn.bind(this);
    this.playMenuHoverOff = this.playMenuHoverOff.bind(this);
    this.hoverMenuOnTL = new TimelineMax({pause: true});
    this.hoverMenuOffTL = new TimelineMax({pause: true});
  }

  componentDidMount(arg) {
    this.setState(() => ({
      menuHover: false
    }));
    // this.playMenuHover.pause();
  }
  playMenuHoverOn(command) {
    const { hoverMenuOnTL, refs } = this;
    BtnDB.btns.forEach((btn, idx) => {
      hoverMenuOnTL.to(
        refs[`dot-${btn.id}`],
        0.15,
        {
          x: btn.hoverPos,
          ease: Power1.easeInOut
        },
        '-=0'
      );
      hoverMenuOnTL.to(
        refs[`text-${btn.id}`],
        0.5,
        {
          opacity: 1
        },
        '-=.5'
      );
    });
  }
  playMenuHoverOff(command) {
    const { hoverMenuOffTL, refs } = this;
    BtnDB.btns.forEach((btn, idx) => {
      hoverMenuOffTL.to(
        refs[`dot-${btn.id}`],
        0.3,
        {
          x: 0,
          ease: Power1.easeInOut
        },
        '-=0.2'
      );
      hoverMenuOffTL.to(
        refs[`text-${btn.id}`],
        0.5,
        {
          opacity: 0
        },
        '-=.5'
      );
    });
  }
  handleMenuHoverOn(arg) {
    const { playMenuHoverOn } = this;
    this.playMenuHoverOn();
  }
  handleMenuHoverOff(arg) {
    const { playMenuHoverOff } = this;
    this.playMenuHoverOff();
  }
  handleLinkHoverOn(arg) {
    this.setState({ hover: true }); // function?
    // const { tl, refs } = this;
    //   tl
    //   .to(refs[arg], 1, {
    //       opacity: 1,
    //       delay: 0,
    //      }, "-=0")

    // console.log("LINK HOVER refs[arg]", refs[arg])
  }
  handleLinkHoverOff(arg) {
    this.setState({ hover: false }); //function?

    // const { tl, refs } = this;
    // tl
    // .to(refs[arg], 1, {
    //     opacity: 1,
    //     delay: 2,
    //    }, "-=0")

    // console.log("handleLinkHoverOff", refs[arg])
  }

  renderBtns(btn, idx) {
    return (
      <Link
        key={btn.id}
        onClick={() => this.props.select(btn.name, btn.fill)}
        to={`/${btn.name !== 'home' ? btn.name : ''}`}
        ref={btn.id}
        theme={btn.theme}
      >
        <g className={btn.name === this.props.page ? '' : 'lo-sat'}>
          <text ref={`text-${btn.id}`} className="menu-txt" transform={btn.txtPos}>
            {btn.name}
          </text>
          <circle ref={`dot-${btn.id}`} cx={btn.x} cy={btn.y} r={btn.r} fill={btn.fill} />
        </g>
      </Link>
    );
  }

  render() {
    const { btns } = BtnDB;
    const menu = { id: 'menu-1' };
    return (
      <div className="menu-frame">
        <svg
          className="menu-link"
          id="menu-desktop"
          viewBox="0 0 550 500"
          preserveAspectRatio="xMidYMid meet"
          ref={menu.id}
          onMouseEnter={ref => this.handleMenuHoverOn(menu.id)}
          onMouseLeave={ref => this.handleMenuHoverOff(menu.id)}
        >
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
