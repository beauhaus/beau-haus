import React from 'react';
import ReactDOM from 'react-dom';

import HomeContainer from './HomeContainer';
import Background from './Background';
import NavMenu from './Interface/NavMenu';

class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: ''
    };
  }
  render() {
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