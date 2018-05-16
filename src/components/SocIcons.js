import React from 'react';
import ReactDOM from 'react-dom';
import SocIconDB from './SocIconDB.json';

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable
 */

class SocIcons extends React.Component {
  constructor(props) {
    super(props);
    this.renderGrad = this.renderGrad.bind(this);
    this.renderPaths = this.renderPaths.bind(this);
    this.icons = SocIconDB.icons;
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
      <a key={`link-${iconItem.id}`}
       href={iconItem.href}
       target="_blank"
      >
      {iconItem.paths.map((path, idx)=>(
        <path
              key={`iconPath-${idx}`}
              className={`${path.class}`}
              fill={path.fill}
              filter={path.filter}
              d={path.pathData}
            />
      ))}
      </a>
    )
  }

  render() {
    return (
      <svg id="soc-icon-svg" className="soc-icon-svg" viewBox="0 -2.5 475 55">
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
        {this.icons.map((item, idx) => {
          return item.gradId && this.renderGrad(idx);
        })}

        {this.icons.map((item, idx) => (
          this.renderPaths(idx)
        ))}
      </svg>
    );
  }
}

export default SocIcons;

/*
item.paths.map((path, i) => (
            <path
              key={`iconPath-${i}`}
              className={`${path.class}`}
              fill={path.fill}
              filter={path.filter}
              d={path.pathData}
            />
          ));



{item.href && console.log(
          <a href={item.href}>

          )}


*/
