import React from 'react';
import ReactDOM from 'react-dom';

import Pond from './LandingTree/Pond';
import MediumTree from './LandingTree/MediumTree';
import TallTree from './LandingTree/TallTree';
import ShortTree from './LandingTree/ShortTree';
import PondBG from './LandingTree/PondBG';
import Preview from './Preview';
import SocIcons from './SocIcons';
import MuteButton from './LandingTree/MuteButton';

const LandingScene =(props) => {
  // console.table(props.theme)  
  const {tall, medium, short} = props.theme.tree;
    // <Preview />
    // Do we need PondBG without the <Banner/> ??
    
    return (
      <div className="home-container">
        <PondBG />
        <Pond theme={props.theme} />
        <MediumTree tree={medium}/>
        <TallTree tree={tall}/>
        <ShortTree tree={short}/>
        <SocIcons />
        <MuteButton />
      </div>
    );
  }

export default LandingScene;
