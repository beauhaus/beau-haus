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
  grid-template-rows: 35vh 45vh 20vh; /*CHANGE?*/
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
    /* background: rgba(120, 50, 112, 1);*/
  }
  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/4;
    z-index: 19;
    display: grid;
    grid-template-columns: repeat(34, 1fr);
    grid-template-rows: repeat(21, 1fr) 20vh;
    opacity: 1; /* fixme: during testing this overrides app.css */

    & > .meta-data-thirteen {
      grid-column: 1/14;
      grid-row: 1/22;
      background: rgba(243, 23, 213, 0.2);
    }
    & > .display-21-plus {
      grid-column: 14/35;
      grid-row: 1/-1;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 20vh; 
/*      & > .slideshow-cmp {
        grid-column: 1;
        grid-row: 2;
        border: 2px solid yellow;
      } */
    }

    & > .reflection-container {
      grid-row: 22;
      grid-column: 1/-1;
      background: green;
      display: grid;
      grid-template-columns: repeat(34, 1fr);
      & > .reflection-box {
        grid-column: 14/35;
        background: yellow;
        opacity: 0.2;
      }
    }
  }
  & .gridDiv {
    border: 1px dashed rgba(121, 20, 88, 0.4);
    opacity: 1;
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
          <div className="meta-data-thirteen">
            <div className="gridDiv div1">div1</div>
            <div className="gridDiv div2">div2</div>
            <div className="gridDiv div3">div3</div>
            <div className="gridDiv div4">div4</div>
            <div className="gridDiv div5">div5</div>
            <div className="gridDiv div6">div6</div>
            <div className="gridDiv div7">div7</div>
            <div className="gridDiv div8">div8</div>
            <div className="gridDiv div1">div9</div>
            <div className="gridDiv div2">div10</div>
            <div className="gridDiv div2">div11</div>
            <div className="gridDiv div2">div12</div>
            <div className="gridDiv div3">div13</div>
            <div className="gridDiv div4">div14</div>
            <div className="gridDiv div5">div15</div>
            <div className="gridDiv div6">div16</div>
            <div className="gridDiv div7">div17</div>
            <div className="gridDiv div8">div18</div>
            <div className="gridDiv div6">div19</div>
            <div className="gridDiv div7">div20</div>
            <div className="gridDiv div8">div21</div>
          </div>
          <div className="display-21-plus">
            <Slideshow slides={this.state.slides} />
          </div>
          {/*
          <div className="reflection-container">
            <div className="reflection-box">
            </div>
          </div>
        */}
        </div>

        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CollectionPageCompDiv>
    );
  }
}
// <Shore />
// <WaterBg {...water} />
// <WaterBody />

export default Collection;

/*
 <div className="gridDiv div1">div1b</div>
            <div className="gridDiv div2">div2b</div>
            <div className="gridDiv div3">div3b</div>
            <div className="gridDiv div4">div4b</div>
            <div className="gridDiv div5">div5b</div>
            <div className="gridDiv div6">div6b</div>
            <div className="gridDiv div7">div7b</div>
            <div className="gridDiv div8">div8b</div>
            <div className="gridDiv div1">div9b</div>
            <div className="gridDiv div2">div10b</div>
            <div className="gridDiv div2">div11b</div>
            <div className="gridDiv div2">div12b</div>
            <div className="gridDiv div3">div13b</div>
            <div className="gridDiv div4">div14b</div>
            <div className="gridDiv div5">div15b</div>
            <div className="gridDiv div6">div16b</div>
            <div className="gridDiv div7">div17b</div>
            <div className="gridDiv div8">div18b</div>
            <div className="gridDiv div6">div19b</div>
            <div className="gridDiv div7">div20b</div>
            */
