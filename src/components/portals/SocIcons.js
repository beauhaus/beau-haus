import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

import SocIconData from '../../data/SocIconData.json';

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable
//  */
const SocIconWrapper = styled.svg`
position: absolute;
left: 10vw;
bottom: 2vw;
width: 20vw;
z-index: 10;
& .icon-cover {/* currently not used*/
  stroke-width: 0.2px;
  stroke: black;
  cursor: pointer;
  mix-blend-mode: hue;
  }

  & .cover-group:hover {
      animation: fadeOut .5s forwards;
    }

    & .icon-text {
        display: none;
    }
  & .gmail-bg,
  .insta-bg,
  .git-bg,
  .linkedIn-bg,
  .codepen-bg,
  .twitter-bg {
    stroke-width: 1px;
    stroke: #000;
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
`;
class SocIcons extends React.Component {
  constructor(props) {
    super(props);
    this.renderGrad = this.renderGrad.bind(this);
    this.renderPaths = this.renderPaths.bind(this);
    this.icons = SocIconData.icons;
  }
  renderGrad = i => {
    var gradientedIcon = this.icons[i];
    return (
      <linearGradient
        key={`${gradientedIcon.id}+121`}
        id={gradientedIcon.gradId}
        x1={gradientedIcon.x1}
        x2={gradientedIcon.x2}
        y1={gradientedIcon.y1}
        y2={gradientedIcon.y2}
        gradientUnits="userSpaceOnUse"
      >
        {gradientedIcon.stops.map((stop, idx) => {
          return <stop key={`stop-${idx}`} offset={stop.offset} stopColor={stop.color} />;
        })}
      </linearGradient>
    );
  };
  renderPaths = index => {
    var iconItem = this.icons[index];
    return (
      <a key={`link-${iconItem.id}`} href={iconItem.href} target="_blank">
        {iconItem.paths.map((path, idx) => (
          <path
            key={`iconPath-${idx}`}
            className={path.class}
            fill={path.fill}
            filter={path.filter}
            d={path.pathData}
          />
        ))}
      </a>
    );
  };

  render() {
    return (
      <SocIconWrapper  className="soc-icon-svg" viewBox="0 -2.5 475 55">
        <filter id="inset-shadow" x="-100%" y="-100%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="12" dy="12" result="offsetblur" />
          <feFlood floodColor="#1c0000" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
        <g id="soc-icon-svg">
        {this.icons.map((item, idx) => {
          return item.gradId && this.renderGrad(idx);
        })}

        {this.icons.map((item, idx) => this.renderPaths(idx))}
        </g>
      </SocIconWrapper>
    );
  }
}

export default SocIcons;

/*

*/
