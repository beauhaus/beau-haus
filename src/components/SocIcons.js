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

  render() {
    return (
      <svg id="soc-icon-svg" className="soc-icon-svg" viewBox="0 0 475 50">
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="12" dy="12" result="offsetblur" />
          <feFlood flood-color="rgb(20, 0, 0)" result="color"/>
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

        {this.icons.map((item, idx) => {
          return item.paths.map((path, i) => (
            <path
              key={`iconPath-${i}`}
              className={`${path.class}`}
              fill={path.fill}
              filter={path.filter}
              d={path.pathData}
            />
          ));
        })}
      </svg>
    );
  }
}

export default SocIcons;

/*

*/
