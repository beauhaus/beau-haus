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
  overflow: hidden;
  color: #fff;
  display: grid;
  /* customized size of grid 60x60  using fr to do fibonacci calculations */
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 35vh 45vh 20vh;
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
    z-index: 35; /* above trees */
    position: relative;
    & > button {
      position: absolute;
      top: 0;
      left: 0;
      background: #ccc;
      width: 8.8vw;
      height: 6.1vh;
      box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0.8);
      z-index: 100;
      text-align: left;
      & h2 {
        margin-left: 0.5vw;
        font-family: 'Limelight', monospace, sans-serif;
        font-size: 1.8em;
        color: #888;
        text-shadow: -2px 2px #ecdfcd;
      }
      &:hover {
        cursor: pointer;
        box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0.8);
      }
    }
    & section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      z-index: 100;
      font-family: 'Montserrat', sans-serif;
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

      & > .meta-data-links {
        & > a:hover,
        a:visited,
        a:link,
        a:active {
          text-decoration: none;
          color: #1d3247;
          text-shadow: -1px 1px wheat;
          font-size: 1.2em;
          font-weight: 400;
        }
        a:hover {
          font-weight: 400;
          color: #b45330;
          text-shadow: -1px 1px #1d3247;
        }
        grid-row: 4/9;
        grid-column: 1/6;
        text-align: left;
        padding: 1%;
        font-size: 1em;
        ul {
          font-weight: 100;
          text-align: left;
          line-height: 4vh;
        }
      }

      & .meta-data-tech {
        grid-column: 6/14;
        grid-row: 1/9;
        padding: 5%;
        font-size: 1.3em;
        & > ul {
          font-style: italic;
          font-weight: 100;
          text-align: right;
          line-height: 4vh;
        }
      }

      & .meta-data-desc {
        border: 0px solid #fafafa;
        border-top-width: 0px;

        grid-column: 1/14;
        grid-row: 9/22;
        padding: 2%;
        padding-left: 0;
        text-align: justify;

        & h3 {
          text-align: center;
          margin-top: 1vh;
          font-size: 1.8em;
          font-weight: 300;
        }
        & p {
          margin-top: 1vh;
          line-height: 1.7em;
          font-size: 1.2em;
          font-weight: 300;
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
  & #short-tree {
    transform-origin: 50% 100%;
    transform: rotate(-9deg);
    left: 1.5vw;
  }
  & #btn-mute {
    z-index: 50;
    fill: maroon;
  }
  & .bg {
    background:  rgba(113, 144, 153, 0.5);
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
      current: 0
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
      current: this.state.current + 1 === this.state.total ? 0 : this.state.current + 1
    });
    console.log('this.state.current', this.state.current);
  }
  componentWillUnmount() {}

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;
    const currentslide = this.state.slides[this.state.current];
    // console.log('currentslide', currentslide);
    const { proj_icon, proj_number, proj_title, proj_tech, proj_desc, proj_links } = currentslide;
    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <div className="topic-container">
          <img src="./img/pagesimg/collectionbanner.svg" alt="collection banner" />
        </div>
        <div className="grid-ctr-tall fading-in">
          <button onClick={() => this.clickHandler()} id="cycle-btn">
            <h2>{proj_number}</h2>
          </button>
          <section>
            <div className="meta-data-links bg">
              <ul>
                {proj_links.map((item, idx) => (
                  <li key={`${item}-${idx}li`}>
                    <a key={`${item}-${idx}`} target="blank_" href={item.url}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="meta-data-tech bg">
              <ul>{proj_tech.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul>
            </div>

            <div className="meta-data-desc bg">
              <h3>{proj_title}</h3>
              <p>{proj_desc}</p>
            </div>

            <div className="slideshow-container">
              <Slideshow currentslide={this.state.slides[this.state.current]} />
            </div>
          </section>
        </div>
        {/*
        */}
        <WaterBg {...water} />
        <WaterBody />
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



links


& > a:hover, a:visited, a:link, a:active
        {
          text-decoration: none;
          color: #1d3247;
          text-shadow: -1px 1px wheat;
        }
        a:hover {
          font-weight: 400;
          color: #b45330;
          text-shadow: -1px 1px #1d3247;
        }
*/
