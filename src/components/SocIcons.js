import React from 'react';
import ReactDOM from 'react-dom';
// import BtnDB from './menuData.json';

/**NavMenu combines static BtnDB data with state so that colors can be manipulated from state
 * while keeping the component's code clean & readable
 */

class SocIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'holder'
    };

    // this.socialClick = this.socialClick.bind(this);
  }

  componentDidMount() {
    // const { tl, refs } = this;
    // BtnDB.btns.forEach((item, idx) => {
    //   tl.set(refs[item.id], { opacity: 0, scale: 0.5 });
    // });
  }
  render() {
    // <rect className="soc-icon-subcontainer" width="339" height="254" x="1550.5" y="796" fill="black" /> //not necessary(?)
    const socIcons = {};
    // <div className="soc-icon-container">
    return (
        <svg viewBox="0 0 1920 1080">
          <rect id="grey" width="49" height="49" x="1815.5" y="978" fill="#a8a8a8" />

          <rect width="49" height="49" x="1815.5" y="898" id="red" fill="#9b353a" />

          <rect id="orange" width="49" height="49" x="1815.5" y="818" fill="#FFCC91" />

          <rect id="purple" width="50" height="49" x="1572.5" y="977" fill="#9c78a8" />

          <rect width="49" height="49" x="1656.5" y="977" fill="#567ace" />

          <rect width="49" height="49" x="1735.5" y="977" fill="#85bb8f" />
        </svg>
      );
      // </div>
  }
}
export default SocIcons;

/*
  
*/
