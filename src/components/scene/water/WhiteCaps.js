import React from 'react';

import {Power1, TimelineMax} from "gsap";

const whiteCapsData = [
  { id: '1', coords: '1319.2 131 1297.2 128.7 1275.2 131' },
  { id: '2', coords: '1156.3 47 1141.8 44.7 1127.3 47' },
  { id: '3', coords: '435.3 27 418.3 25 401.3 27' },
  { id: '4', coords: '852.3 80 830.3 77.7 808.3 80' },
  { id: '5', coords: '1909.3 13 1898.3 11.9 1887.3 13' },
  { id: '6', coords: '1568.3 7 1557.3 5.9 1546.3 7' },
  { id: '7', coords: '1348.3 18 1337.3 16.9 1326.3 18' },
  { id: '8', coords: '1018.3 7 1007.3 5.9 996.3 7' },
  { id: '9', coords: '677.3 8 666.3 6.9 655.3 8' },
  { id: '10', coords: '556.3 6 545.3 4.9 534.3 6' },
  { id: '11', coords: '226.3 6 215.3 4.9 204.3 6' },
  { id: '12', coords: '74 36 60.3 34.6 46.6 36' },
  { id: '13', coords: '1480.5 75 1458.5 72.7 1436.5 75' },
  { id: '14', coords: '1843.5 86 1821.5 83.7 1799.5 86' },
  { id: '15', coords: '1788.3 25 1771.9 22.8 1755.4 25' },
  { id: '16', coords: '491.2 114 469.3 111.7 447.3 114' }
];


class WhiteCaps extends React.Component {
  constructor() {
    super();
    this.renderPoly = this.renderPoly.bind(this);
    this.tl = new TimelineMax({
      repeat: -1,
      repeatDelay: 1
    });
  }
  componentDidMount() {
    const { tl, refs } = this;

    var randomNum = (min, max) => Math.random() * (max - min) + min;
    var len = whiteCapsData.length;
    // console.log('len: ', len);
    whiteCapsData.forEach((item, idx) => {
      tl
      .from(refs[item.id], 1, {
        opacity: 0,
        delay: randomNum(0,5),
       }, `-=${randomNum((len*.2),len)}`)
      .to(refs[item.id], 2, {
        opacity: 1,
        ease: Power1.easeInOut
        },`-=${randomNum(0,2)}`)
      .to(refs[item.id], 2, {
        x:randomNum(-40,40),
        y:randomNum(0,10),
        opacity: 0,
        ease: Power1.easeInOut
      }
    )
  }); 
  }

  renderPoly(item, idx) {
    return <polygon fill="white" ref={item.id} key={item.id} points={item.coords} />;
  }

  // viewBox="0 0 1920 200"
  render() {
    return (
      <svg id="white-caps" >
        {whiteCapsData.map(this.renderPoly)}
      </svg>
    );
  }
}

export default WhiteCaps;

/*
 
These style rules seem unnecessary
// SVG
  position: absolute;
  width: 100vw;
  bottom: 0;


*/