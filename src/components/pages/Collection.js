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
      background: tan;
      width: 5.1vw;
      height: 6vh;
      box-shadow: 2px 2px 5px 0px black;
      z-index: 25;
      font-family: "Limelight", monospace, sans-serif;
      font-size: 2em;
      color: #444;
      text-shadow: 1px 1px #ecdfcd;
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
      & > .slideshow-container {
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 20vh;
      }
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
      & > .meta-data-icon {
        grid-column: 1/3;
        grid-row: 2/4;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & .meta-data-tech {
        grid-column: 1/6;
        grid-row: 4/9;
        padding: 5%;
        font-size: 1.2em;
      }
      & .meta-data-title {
        grid-column: 6/14;
        grid-row: 1/9;
        padding: 20%;
      }
      & .meta-data-copy {
        grid-column: 1/14;
        grid-row: 9/22;
      }
    }
  }
  & .fading-in {
    opacity: 0;
    animation: fadeIn 2s ease-in-out forwards;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


`;

class Collection extends Component {
  constructor(props) {
    super(props);
    const { slides } = SlidesData;
    this.state = {
      slides,
      profile: props.pageStyles,
      total: slides.length,
      current: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
    // console.log('props>Collection: ', props);
  }
  componentDidMount() {
    // console.log("this.state.slides.length", this.state.total)
  }
  clickHandler() {
    // console.log("total: ", this.state.total)
      this.setState({
        current: this.state.current + 1 === this.state.total ? 0 : this.state.current + 1,
      });
    console.log("this.state.current", this.state.current);
  }
  componentWillUnmount() {
  }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;
    const currentslide = this.state.slides[this.state.current];
    console.log("currentslide", currentslide);
    const {proj_icon,
      proj_number,
      proj_title,
      proj_tech,
      proj_desc,
      proj_link1,
      proj_link1_text,
      proj_link2,
      proj_link2_text} = currentslide;
    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <div className="topic-container">
          <img src="./img/pagesimg/collectionbanner.svg" alt="collection banner" />
        </div>
        <ShortTree db={tree.short} />
        <div className="grid-ctr-tall">
          <button onClick={() => this.clickHandler()} id="cycle-btn">
          {proj_number}
          </button>
              <section>
              <div className="meta-data-A">A</div>
              <div className="meta-data-B">B</div>
              {/*
                <img src={this.state.slides.proj_icon} alt=""/>
                */}
                <div className="meta-data-icon"><img src={proj_icon} alt={proj_desc}/></div>
                <div className="meta-data-tech">{proj_tech}</div>
                <div className="meta-data-title">{proj_title}</div>
                <div className="meta-data-copy">copy</div>
                
                <div className="slideshow-container">
                <Slideshow  currentslide={this.state.slides[this.state.current]} />
                </div>
                </section>
          
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
