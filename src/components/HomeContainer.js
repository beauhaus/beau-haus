import React from 'react';
import ReactDOM from 'react-dom';


import Pond from './LandingTree/Pond';
import BackTree from './LandingTree/BackTree';
import MidTree from './LandingTree/MidTree';
import FrontTree from './LandingTree/FrontTree';
import PondBG from './LandingTree/PondBG';
import Preview from './Preview';


//  <Preview />
class HomeContainer extends React.Component {
  state = {
    options: [],
    skyPondMatch: '#a8a8a8',
    skyRight: '#fff',
    pondForeground: '#cfcfcf'
  };
  
  render() {
    return (
      <div className="svg-container">
      <PondBG/>
        <Pond foregroundColor={this.state.pondForeground} offset={this.state.skyPondMatch} />
        <BackTree />
        <MidTree />
        <FrontTree />
        </div>
      );
    }
  }
  // <Menu />

export default HomeContainer;