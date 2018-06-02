import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

import Slideshow from '../UI/Slideshow';
import SlidesData from '../../data/SlideShowData.json';

/* grid is fibonacci @WIDTH 51vw  X 31.5vh (1.5 * 34) X (1.5 X 21)
so. 16vw 68vw 16vw*/
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
  /* customized size of grid 60x60  using fr to do fibonacci calculations */
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 35vh 45vh 20vh;
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
    grid-row: 2/4;
    z-index: 19;
    display: grid;
    grid-template-columns: repeat(34, 1fr);
    grid-template-rows: repeat(21, 1fr) 20vh;
    opacity: 1; /* fixme: during testing this overrides app.css */
    & > .meta-data-grid {
      grid-column: 1/14;
      grid-row: 1/22;
      background: rgba(5, 5, 5, 0.3);
    }
    & > .meta-data-copy {
      grid-column: 1/14;
      grid-row: 9/22;
      background: rgba(255, 255, 255, 0.5);
    }
    & > .meta-data-stats {
      grid-column: 6/14;
      grid-row: 1/9;
      background: skyblue;
    }
    & > .meta-data-five {
      grid-column: 1/6;
      grid-row: 4/9;
      background: rgba(245, 165, 35, 0.9);
    }
    & > .meta-data-three {
      grid-column: 3/6;
      grid-row: 1/4;
      padding: 2%;

      & > button {
        background: #fff;
        width: 5vw;
        height: 6vh;
        box-shadow: 2px 2px 5px 0px black;
      }
    }

    & > .meta-data-two {
      grid-column: 1/3;
      grid-row: 2/4;
      background: maroon;
    }

    & > .meta-data-B {
      grid-column: 2/3;
      grid-row: 1;
      background: lightgreen;
    }

    & > .meta-data-A {
      grid-column: 1;
      grid-row: 1;
      background: fuchsia;
    }
    & > .display-21-plus {
      grid-column: 14/35;
      grid-row: 1/-1;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 20vh;
    }
  }
`;

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
          <div className="meta-data-grid">
            <div className="gridDiv div8">grid</div>
          </div>
          <div className="meta-data-copy">
            <div>copy</div>
          </div>

          <div className="meta-data-stats"> 8</div>
          <div className="meta-data-five"> 5</div>
          <div id="cycle-btn" className="meta-data-three">
            <button id="cycle-btn">{'button'}</button>
          </div>
          <div className="meta-data-two"> 2</div>

          <div className="meta-data-B"> B</div>
          <div className="meta-data-A"> A</div>

          <div className="display-21-plus">
            <Slideshow slides={this.state.slides} />
          </div>
        </div>
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CollectionPageCompDiv>
    );
  }
}

// <WaterBg {...water} />
// <WaterBody />

export default Collection;

/*

*/
