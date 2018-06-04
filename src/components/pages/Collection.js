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
  overflow: hidden;
  display: grid;
  /* customized size of grid using fr to do fibonacci calculations */
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
      opacity: 1;
      position: absolute;
      top: 0;
      left: 5.7rem;
      background: lemonchiffon;
      width: 8.4rem;
      height: 6.5vh;
      box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0.8);
      z-index: 100;
      text-align: left;
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
      grid-template-columns: repeat(34, 1fr);
      grid-template-rows: repeat(21, 1fr) 20vh;
      & > .meta-data-nums {
        grid-column: 1/3;
        grid-row: 1/4;
        text-align: center;
        & > h1 {
          margin-top: 1rem;
          font-family: 'Limelight', monospace, sans-serif;
          font-size: 2em;
          color: #444;
          text-shadow: -2px 2px #ecdfcd;
        }  
      }
      & > .slideshow-container {
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;

        grid-template-columns: 1fr;
        grid-template-rows: 1fr 20vh;
      }

      & > .meta-data-links {
        grid-row: 4/9;
        grid-column: 1/6;
        text-align: left;
        padding: 1%;
        font-size: 1em;
        position: relative;
        & > .links-banner {
          height: 100%;
          top: 0;
          left: 0;
          fill: #5f807d;
        }
        a,
        a:visited,
        a:link,
        a:active {
          text-decoration: none;
          color: #1d3247;
          text-shadow: -1px 1px wheat;
          font-weight: 400;
        }
        a:hover {
          font-weight: 400;
          color: #b45330;
          text-shadow: -1px 1px #1d3247;
        }
        ul {
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-weight: 100;
          text-align: left;
          line-height: 3vh;
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
    background: rgba(113, 144, 153, 0.5);
  }
`;

// <svg className="links-banner" viewBox="0 0 20 90"
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
          <button onClick={() => this.clickHandler()} id="cycle-btn">.</button>
          <section>
          <div className="meta-data-nums">
          <h1>{proj_number}</h1>
          </div>
            <div className="meta-data-links">
              <svg className="links-banner" preserveAspectRatio="none">
                <path d="M1.5 84.8v-5.7l12.8 3.1v-8.9l4.2 1V89l-17-4.2zm0-17.3v-5.7l17 4.2v5.7l-17-4.2zm0-9.8v-5.3l9.4-4.6-9.4-2.3v-5.4l17 4.2v5.4l-9.3 4.6 9.3 2.3v5.3l-17-4.2zm0-21.4v-5.7l6.4 1.6-6.4-7.5v-7.6l6.4 8.3L18.5 21v7l-7 2.2 2.8 3.6 4.1 1v5.7L1.5 36.3zm11.4-17.6l-.3-5.5c.8.1 1.4 0 1.9-.3.7-.4 1-1.2 1-2.3 0-.8-.2-1.5-.5-2-.4-.5-.8-.8-1.2-1-.4-.1-.8 0-1.2.3-.3.3-.7 1.2-1 2.7-.5 2.4-1.2 4-2.1 4.8-.9.9-2 1.1-3.3.8-.9-.2-1.7-.7-2.5-1.4s-1.4-1.7-1.8-2.9c-.4-1.2-.7-2.8-.7-4.7 0-2.3.4-4 1.2-5.1.8-1 2.1-1.5 3.9-1.3l.3 5.4c-.8.2-1.3.4-1.7.8-.3.4-.5 1-.5 1.8 0 .7.1 1.2.4 1.6.2.3.5.5.9.6.3.1.5 0 .7-.2.2-.2.4-.8.6-1.8.5-2.4 1-4 1.5-5 .5-.9 1.1-1.6 1.9-1.9.8-.2 1.6-.2 2.6 0 1.1.3 2.1.8 3 1.7.9.9 1.6 2 2.1 3.2.5 1.3.7 2.8.7 4.6 0 3.1-.6 5.2-1.7 6.1-1.1 1-2.5 1.3-4.2 1z" />
              </svg>
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


<svg className="links-banner" viewBox="0 0 20 90">
  <path fill="#F15A24" d="M1.5 84.8v-5.7l12.8 3.1v-8.9l4.2 1V89l-17-4.2zm0-17.3v-5.7l17 4.2v5.7l-17-4.2zm0-9.8v-5.3l9.4-4.6-9.4-2.3v-5.4l17 4.2v5.4l-9.3 4.6 9.3 2.3v5.3l-17-4.2zm0-21.4v-5.7l6.4 1.6-6.4-7.5v-7.6l6.4 8.3L18.5 21v7l-7 2.2 2.8 3.6 4.1 1v5.7L1.5 36.3zm11.4-17.6l-.3-5.5c.8.1 1.4 0 1.9-.3.7-.4 1-1.2 1-2.3 0-.8-.2-1.5-.5-2-.4-.5-.8-.8-1.2-1-.4-.1-.8 0-1.2.3-.3.3-.7 1.2-1 2.7-.5 2.4-1.2 4-2.1 4.8-.9.9-2 1.1-3.3.8-.9-.2-1.7-.7-2.5-1.4s-1.4-1.7-1.8-2.9c-.4-1.2-.7-2.8-.7-4.7 0-2.3.4-4 1.2-5.1.8-1 2.1-1.5 3.9-1.3l.3 5.4c-.8.2-1.3.4-1.7.8-.3.4-.5 1-.5 1.8 0 .7.1 1.2.4 1.6.2.3.5.5.9.6.3.1.5 0 .7-.2.2-.2.4-.8.6-1.8.5-2.4 1-4 1.5-5 .5-.9 1.1-1.6 1.9-1.9.8-.2 1.6-.2 2.6 0 1.1.3 2.1.8 3 1.7.9.9 1.6 2 2.1 3.2.5 1.3.7 2.8.7 4.6 0 3.1-.6 5.2-1.7 6.1-1.1 1-2.5 1.3-4.2 1z"/>
</svg>

*/
