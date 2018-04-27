import React from 'react';
import ReactDOM from 'react-dom';

import HomeContainer from './HomeContainer';
import Background from './Background';
import NavMenu from './NavMenu';

class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: ''
    };
  }
  render() {
    // do I need xmidymid meet here? delete?
    return (
      <div>
        <Background />
        <HomeContainer />
        <NavMenu />
      </div>
    );
  }
}

export default RoutesContainer;

/*

       

==========



+++++++++++
 <svg id="menu-desktop" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
      <filter id="filter-saturate">
          <feColorMatrix type="saturate" values=".2" />
        </filter>
        <g transform="translate(277 23)">
        
    </g>
      </svg>

      */
