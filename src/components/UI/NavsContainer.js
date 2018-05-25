import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Power1, TimelineMax } from 'gsap';

import styled from 'styled-components';

import PageData from '../../data/PageData.json';

const NavsWrapper = styled.div`
  position: absolute;
  & > .menu-link {
    z-index: 20;
  }
  & > .link {
    z-index: 20;
    width: 20vw;
    height: 20vh;
  }
  & .lo-sat {
      filter: url(#lo-saturation);
  }
  & .current-link {
    stroke-width: 2px;
    & .nav-txt {
      stroke: #fff;
      stroke-width: 2px;
      filter: url(#txt-shad);
    }
    & .nav-link-dot {
      filter: url(#dot-shad);
    }
  }
 
`;
const { navBtns } = PageData;

/* NavsContainer IS A PORTAL */

class NavsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'holder',
      btnPos: 'translate(277 23)',
      linkHover: false
    };
    this.renderLinks = this.renderLinks.bind(this);
    this.handleMenuHoverOn = this.handleMenuHoverOn.bind(this);
    this.handleMenuHoverOff = this.handleMenuHoverOff.bind(this);
    this.handleLinkHoverOn = this.handleLinkHoverOn.bind(this);
    this.handleLinkHoverOff = this.handleLinkHoverOff.bind(this);

    this.playMenuHoverOn = this.playMenuHoverOn.bind(this);
    this.playMenuHoverOff = this.playMenuHoverOff.bind(this);
    this.hoverMenuOnTL = new TimelineMax({ pause: true });
    this.hoverMenuOffTL = new TimelineMax({ pause: true });
  }
  componentDidMount(arg) {
    this.setState(() => ({
      menuHover: false
    }));
  }

  playMenuHoverOn(command) {
    const { hoverMenuOnTL, refs } = this;
    navBtns.forEach((btn, idx) => {
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
    navBtns.forEach((btn, idx) => {
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
    // const { playMenuHoverOn } = this;
    this.playMenuHoverOn();
  }
  handleMenuHoverOff(arg) {
    // const { playMenuHoverOff } = this;
    this.playMenuHoverOff();
  }
  handleLinkHoverOn(arg) {
    this.setState({ hover: true }); // function?
  }
  handleLinkHoverOff(arg) {
    this.setState({ hover: false }); //function?
  }
  renderLinks(btn, idx) {
    // const { navBtns } = PageData;
    // console.log("btn.name: ", btn.name)
    // const match = (location.pathname === btn.pathname);
    return (
      <Link
        className="link"
        key={btn.id}
        ref={btn.id}
        to={{
          pathname: btn.pathname
        }}
        onClick={() => this.props.select('btn.name', 'btn.fill')}
        theme={btn.theme}
      >
        <g className={this.props.location.pathname === btn.pathname ? 'current-link' : 'lo-sat'}>
          <text ref={`text-${btn.id}`} className="nav-txt" transform={btn.txtPos}>
            {btn.name}
          </text>
          <circle className="nav-link-dot" ref={`dot-${btn.id}`} cx={btn.x} cy={btn.y} r={btn.r} fill={btn.fill} />
        </g>
      </Link>
    );
  }

  render() {
    const { navBtns } = PageData;
    const menu = { id: 'menu-1' };
    // ref={menu.id}
    //  onMouseEnter={ref => this.handleMenuHoverOn(menu.id)}
    //  onMouseLeave={ref => this.handleMenuHoverOff(menu.id)}
    // viewBox="0 0 550 500" preserveAspectRatio="xMidYMid meet"

    return (
      <NavsWrapper className="menu-frame">
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
            <filter id="dot-shad" x="0" y="0">
              <feDropShadow dx="2" dy="2" stdDeviation="2" />
            </filter>
            <filter id="txt-shad" x="0" y="0">
              <feDropShadow dx="2" dy="2" stdDeviation="2" />
            </filter>
            <filter id="lo-saturation">
              <feColorMatrix type="saturate" values=".1" />
            </filter>
          </defs>
          {navBtns.map(this.renderLinks)}
        </svg>
      </NavsWrapper>
    );
  }
}

export default NavsContainer;
/*


@media screen and (max-width: 768px) {    // tablet query
    #menu-desktop {
      position: absolute;
      width: 35vw;
      height: 30vh;
      left: 65vw;
      top: 0;
    }
*/