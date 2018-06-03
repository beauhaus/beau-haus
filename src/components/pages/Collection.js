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
      top: -0.2vh;
      left: 8.8vw;
      cursor: pointer;
      background: #bcbcbc;
      width: 14.1vw;
      height: 17.2vh;
      box-shadow: -2px 4px 5px 0px rgba(0,0,0,0.8);
      z-index: 25;
    }
    & section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 22;
      display: grid;
      font-family: "Montserrat", sans-serif;
      color: black;
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
        background: wheat;
      }
      & > .meta-data-B {
        grid-column: 2/3;
        grid-row: 1;
        background: grey;
      }
      & > .meta-data-C {
        grid-column: 1/3;
        grid-row: 2/4;
        background: pink;
        
      }
      & > .meta-data-number {
        grid-column: 3/6;
        grid-row: 1/4;
        /*background: #666;*/
        font-family: "Limelight", monospace, sans-serif;
        text-align: center;
        padding: 10%;
        font-size: 1.5vw;
        color: #888;
        text-shadow: 2px 2px #ecdfcd;  
        position: relative;
        & > img {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4vw;
          height: 100%;
          margin-left: -2vw;
        }
      }
      
      & .meta-data-tech {
        grid-column: 1/6;
        grid-row: 4/9;
        padding: 10%;
        font-size: 1em;
        & > ul {
          font-weight: 300;
          text-align: right;
          list-style: none;
        }
      }
      & .meta-data-desc {
        grid-column: 1/14;
        grid-row: 9/22;
        padding: 2%;
        text-align: justify;
        & h3 {
          margin-top: 1vh;
        }
        & p {
          margin-top: 1.5vh;
          line-height: 1.6em;
          font-weight: 200;
        }
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
        <div className="grid-ctr-tall fading-in">
        <button onClick={() => this.clickHandler()} id="cycle-btn">
        
        </button>
        <section>
        <div className="meta-data-A">A</div>
        <div className="meta-data-B">B</div>
        <div className="meta-data-C">C</div>
        <div className="meta-data-number"><h2>{proj_number}</h2></div>
        {/*
          <img src={this.state.slides.proj_icon} alt=""/>
        */}
          <div className="meta-data-tech"><ul>{proj_tech.map((item, idx)=>
            <li key={`${item}-${idx}`}>{item}</li>)}</ul></div>
          {console.log(typeof proj_tech)}
            
        <div className="meta-data-desc">
        <h3>{proj_title}</h3>
        <p>{proj_desc}</p>
        </div>
        
        <div className="slideshow-container">
        <Slideshow  currentslide={this.state.slides[this.state.current]} />
        </div>
        </section>
        
        </div>
        <Shore />
        <ShortTree db={tree.short} />
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
