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

  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/4;
    z-index: 15;
    position: relative;

    & > button {
      position: absolute;
      top: 0;
      left: 3.5vw;
      cursor: pointer;
      background: #fff;
      width: 5.1vw;
      height: 6vh;
      box-shadow: 2px 2px 5px 0px black;
      z-index: 25;

    }

    & section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 22;
      display: grid;
      grid-template-columns: repeat(34, 1fr);
      grid-template-rows: repeat(21, 1fr) 20vh;
      & .meta-data-A {
        grid-column: 1;
        grid-row: 1;
        background: fuchsia;
      }
      & > .meta-data-B {
        grid-column: 2/3;
        grid-row: 1;
        background: black;
      }
      & > .meta-data-two {
        grid-column: 1/3;
        grid-row: 2/4;
        background: maroon;
      }
      & .meta-data-five {
        grid-column: 1/6;
        grid-row: 4/9;
        background: rgba(245, 165, 35, 0.9);
      }
      & .meta-data-stats {
        grid-column: 6/14;
        grid-row: 1/9;
        background: skyblue;
      }
      & .meta-data-copy {
        grid-column: 1/14;
        grid-row: 9/22;
        background: rgba(255, 255, 255, 0.5);
      }
      & > .slideshow-container {
        grid-column: 14/35;
        grid-row: 1/-1;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 20vh;
      }
    }
  }
`;

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.pageStyles,
      slides: SlidesData
    };
    this.clickHandler = this.clickHandler.bind(this);
    console.log('props>Collection: ', props);
  }
  componentDidMount() {
    this.setState(() => {showBegin: false});
  }
  clickHandler() {
    console.log('clicked');
    if (!this.state.showBegin) this.setState({ showBegin: true });
    if (this.state.showBegin) {
      console.log("next!")
    }
  }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
      <div className="topic-container">
        <img src="./img/pagesimg/collectionbanner.svg" alt="collection banner" />
      </div>
      <ShortTree db={tree.short} />
        <div className="grid-ctr-tall">
          <button onClick={() => this.clickHandler()} id="cycle-btn">
            button
          </button>
          {this.state.showBegin && (
            <section>
              <div className="meta-data-A">A</div>
              <div className="meta-data-B">B</div>
              <div className="meta-data-two">2</div>
              <div className="meta-data-five">5</div>
              <div className="meta-data-stats">8</div>
              <div className="meta-data-copy">copy</div>
              <div className="slideshow-container">
                <Slideshow slides={this.state.slides} />
              </div>
            </section>
          )}
        </div>
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
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

discard ******************

& > .meta-data-three {
      grid-column: 3/6;
      grid-row: 1/4;
    }

    display: grid;
    opacity: 1; 

*********************


& > .grid-header {
  grid-column: 1/4;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 4vh);
}


*/
