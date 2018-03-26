import React from 'react';
import ReactDOM from 'react-dom';

const whiteCapsData = [
  { id: '1', coords: '891.7 886 911.3 881.6 930.8 886' },
  { id: '2', coords: '704.7 919 724.3 914.6 743.8 919' },
  { id: '3', coords: '308.7 886 328.3 881.6 347.8 886' },
  { id: '4', coords: '1331.7 886 1351.3 881.6 1370.8 886' },
  { id: '5', coords: '1573.7 897 1593.3 892.6 1612.8 897' },
  { id: '6', coords: '1557.8 890 1538.3 885.6 1518.7 890' },
  { id: '7', coords: '1744.8 923 1725.3 918.6 1705.7 923' },
  { id: '8', coords: '1920.8 890 1901.3 885.6 1881.7 890' },
  { id: '9', coords: '864.8 934 845.3 929.6 825.7 934' },
  { id: '10', coords: '622.8 945 603.3 940.6 583.7 945' }
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
    console.log('len: ', len);
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
  }); //forEach
  }

  renderPoly(item, idx) {
    return <polygon fill="white" ref={item.id} key={item.id} points={item.coords} />;
  }

  render() {
    return (
      <svg className="test-div" viewBox="0 0 1920 1080">
        {whiteCapsData.map(this.renderPoly)}
      </svg>
    );
  }
}

export default WhiteCaps;
