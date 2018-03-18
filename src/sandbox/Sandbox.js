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

/*


*/

class MyApp extends React.Component {
  constructor() {
    super();
    this.renderPoly = this.renderPoly.bind(this);
    this.tl = new TimelineMax({
      repeat: -1,
      // yoyo: true,
      // yoyoEase: true,
      smoothChildTiming: true,
      repeatDelay: 2
    });
  }

  componentDidMount() {
    const { tl, refs } = this;

    var randomNum = (min, max) => Math.random() * (max - min) + min;

    whiteCapsData.forEach((item, idx) => {
      tl.set(refs[item.id], { opacity: 0, scale: 0.5 });

      tl
        .from(
          refs[item.id],
          randomNum(2, 10),
          {
            opacity: 0,
            delay: randomNum(0, 10)
          },
          0
        )
        .to(
          refs[item.id],
          randomNum(5, 10),
          {
            opacity: randomNum(0.5, 1),
            scale: 1,
            y: randomNum(5, 15),
            ease: Power1.easeInOut
          },
          `-=${randomNum(2, 10)}`
        )
        .to(
          refs[item.id],
          4,
          {
            opacity: 0,
            x: 10,
            y: randomNum(5, 15),
            // delay: randomNum(0, 10),
            ease: Power1.easeInOut
          },
          `-=${randomNum(5, 10)}`
        );
    }); //forEach
  }

  renderPoly(item, idx) {
    return <polygon fill="white" ref={item.id} key={item.id} points={item.coords} />;
  }

  render() {
    return (
      <div>
        <svg className="test-div" viewBox="0 0 1920 1080">
          {whiteCapsData.map(this.renderPoly)}
        </svg>
      </div>
    );
  }
}




class Sandbox extends React.Component {
  state = {
    options: []
  };

  render() {
    return (
      <div className="svg-container test-div">
        <MyApp />
      </div>
    );
  }
}

export default Sandbox;

/*


*/
