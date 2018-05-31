import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

import Slideshow from '../UI/Slideshow'
import SlidesData from '../../data/SlideShowData.json';


const CollectionPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  color: #fff;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 70vh 10vh;
  z-index: 1;

  & > div.topic-container {
    grid-column: 3;
    grid-row: 1/4;
    position: relative;
    & > img {
      /* svg */
      position: absolute;
      opacity: 1;
      bottom: 0;
      right: -2vw;
      width: 20vh;
      height: 100vh;
    }
  }
  & > .grid-header {
    grid-column: 1/4;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 4vh);
  }
  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2;
    z-index: 19;
    display: grid;
    grid-template-columns: repeat(2, 25vw);
    grid-template-rows: repeat(7, 10vh);
    opacity: 1; /* fixme: during testing this overrides app.css */
    
    background: rgba(30,20,100,0.2);
  }
  &  .gridDiv {
    border: 1px dashed rgba(121, 20, 88, 0.5);
  }
`;
// & > .ctr-row-top {
//   grid-column: 1/4;
//   grid-row: 1;
// }
// & > .ctr-row-mid {
//   grid-column: 1/4;
//   grid-row: 2;
// }
// & > .ctr-row-bot {
//   grid-column:1/4;
//   grid-row: 3;
// }

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles,
      slides: SlidesData
    };

    // console.log("props>Collection: ", props);
  }
  // componentDidMount() {
  //   this.props.location.state
  //     ? this.setState({ profile: this.props.location.state.profile })
  //     : this.setState({ profile: InitialLoad.profile });
  // }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <div className="grid-header">header</div>
        <div className="topic-container">
          <img src="./img/pagesimg/collectionbanner.svg" alt="collection banner" />
        </div>
        <div className="grid-ctr-tall">
        

        <div className="gridDiv div1">div1</div>
        <div className="gridDiv div2">div2</div>
        <div className="gridDiv div3">div3</div>
        <div className="gridDiv div4">div4</div>
        <div className="gridDiv div5">div5</div>
        <div className="gridDiv div6">div6</div>
        <div className="gridDiv div7">div7</div>
        <div className="gridDiv div8">div8</div>


        <Slideshow slides={this.state.slides}/>











        
        
        </div>
        
        <Shore />
        <WaterBg {...water} />
        <WaterBody />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
        </CollectionPageCompDiv>
      );
    }
  }

export default Collection;
