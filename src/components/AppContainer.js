import React from 'react';
import ReactDOM from 'react-dom';

import Background from './Background';
import Pond from './LandingTree/Pond';
import BackTree from './LandingTree/BackTree';
import MidTree from './LandingTree/MidTree';
import FrontTree from './LandingTree/FrontTree';
import PondBG from './LandingTree/PondBG';
import Preview from './Preview';

import BHLogo from './Interface/BHLogo';
import Menu from './Interface/Menu';
import Banner from './Banner';

//  <Preview />
class AppContainer extends React.Component {
  state = {
    options: [],
    skyPondMatch: '#a8a8a8',
    skyRight: '#fff',
    pondForeground: '#cfcfcf'
  };
  
  render() {
    return (
      <div className="svg-container">
      <Background />
      <Banner/>
      <PondBG/>
        <Pond foregroundColor={this.state.pondForeground} offset={this.state.skyPondMatch} />
        <BackTree />
        <MidTree />
        <FrontTree />
        <BHLogo />
        <Menu />
      </div>
    );
  }
}

export default AppContainer;