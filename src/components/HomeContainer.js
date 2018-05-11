import React from 'react';
import ReactDOM from 'react-dom';

import Pond from './LandingTree/Pond';
import MediumTree from './LandingTree/MediumTree';
import TallTree from './LandingTree/TallTree';
import ShortTree from './LandingTree/ShortTree';
import PondBG from './LandingTree/PondBG';
import Preview from './Preview';
import SocIcons from './SocIcons';

class HomeContainer extends React.Component {
  state = {
    options: [],
    skyPondMatch: '#a8a8a8',
    skyRight: '#fff',
    pondForeground: '#cfcfcf'
  };
  
  render() {
    // <Preview />
    // Do we need PondBG without the <Banner/> ??
    return (
      <div className="home-container">
      <PondBG />
      <Pond foregroundColor={this.state.pondForeground} offset={this.state.skyPondMatch} />
      {/* 
        <MediumTree />
        <TallTree />
        <ShortTree />
        <SocIcons />
        
            */}
      </div>
    );
  }
}
// <Menu />

export default HomeContainer;
