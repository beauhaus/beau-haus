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

import LinksIcon from './CollectionComps/LinksIcon';
import PageBanner from './CollectionComps/CollectionPageBanner';
import CycleBtn from './CollectionComps/CycleBtn';
import ProgressGauge from './CollectionComps/ProgressGauge';
import Slideshow from '../UI/Slideshow';
import SlidesData from '../../data/SlideShowData.json';
/* grid is fibonacci @WIDTH 51vw  X 31.5vh (1.5 * 34) X (1.5 X 21)
so. 16vw 68vw 16vw*/

// /Users/beau/Desktop/beauhaus/beau-haus/public/img/listdot.svg
/* customized size of grid using fr to do fibonacci calculations */
const CollectionPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 35vh 45vh 20vh;
  

  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/4;
    z-index: 35; /* above trees */
    position: relative;
    
    & section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      z-index: 100;
      grid-template-columns: repeat(34, 1fr);
      grid-template-rows: repeat(21, 1fr) 20vh;
      & > .fibonacci {
        border: 1px solid grey;
      }
      & > .meta-data-1a {
        grid-column: 1/2;
        grid-row: 1;
        background-color: hsl(0, 0%, 7.7%);
        opacity: 0;
        animation: fadeIn .5s .5s ease-in-out forwards;
      }
      & > .meta-data-1b {
        grid-column: 2/3;
        grid-row: 1;
        background-color: hsl(0, 0%, 7.7%);  
        opacity: 0;
        animation: fadeIn .5s .75s ease-in-out forwards;
      }
      & > .meta-data-gauge {
        grid-column: 1/3;
        grid-row: 2/4;
        background-color: hsl(0, 0%, 15.4%);
        svg {
          width: 100%;
          height: 100%;
          & > #gauge-needle {
            transform-origin: 50% 50%;
            stroke-width: 4px;
            stroke: #aaa;
          }
        }
        opacity: 0;
        animation: fadeIn .5s 1s ease-in-out forwards;
      }
      
      & > .meta-data-links {
        /*3x3*/
        grid-row: 1/4;
        grid-column: 3/6;
        position: relative;
        background-color: hsl(0, 0%, 23.1%);
        ul {
          position: absolute;
          top: 0.5vh;
          left: 0.2vw;
          font-weight: 100;
          line-height: 2.5vh;
          li {
            font-size: 1.5rem;
          }
        }
        a,
        a:visited,
        a:link,
        a:active {
          text-decoration: none;
          color: #b9b693;
          text-shadow: -1px 1px 2px #1c1e20;
          font-weight: 400;
        }
        a:hover {
          color: lemonchiffon;
          text-shadow: -2px 2px 2px black;
        }
        opacity: 0;
        animation: fadeIn .5s 1.25s ease-in-out forwards;
      }

      & .meta-data-techlist { /* 5x5 */
        grid-column: 1/6;
        grid-row: 4/9;
        padding: 4%;
        font-size: 1vw;
        letter-spacing: -1px;
        background-color: hsl(0, 0%, 38.5%); 
        ul li {
          display: block;
        }
        ul {
          font-style: italic;
          font-weight: 300;
          text-align: left;
          line-height: 1.6rem;
          color: #bbb;
          & > li::after {
            content: url('./img/listdot.svg');
            font-size: 10px;
            width: 10px;
            margin: 0 4px;
            display: inline-block;
            opacity: 0.5;
          }
        }
        opacity: 0;
        animation: fadeIn .5s 1.50s ease-in-out forwards;
      }
      & > .meta-data-btn-pos { /* 8x8 */
        grid-row: 1/9;
        grid-column: 6/14;
        box-shadow: -5px 5px 10px 0px black;
      }

      & .meta-data-desc {
        /* 13x13 */
        grid-column: 1/14;
        grid-row: 9/22;
        padding: 2%;
        text-align: justify;
        background-color: hsl(0, 0%, 80%);
        & h3 {
          text-align: center;
          margin-top: 1vh;
          font-size: 2vw;
          font-weight: 300;
        }
        & p {
          margin-top: 1vh;
          line-height: 2.4vh;
          font-size: 1vw;
          font-weight: 300;
        }
        opacity: 0;
        animation: fadeIn 5s 1.75s ease-in-out forwards;    
      }
      & > .slideshow-container-tall {
        /* entire right half */
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 20vh;
      }
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
    background: maroon;
  }

/*
  & .fader {
    opacity: 0;
    animation: fadeIn 1s 5s ease-in-out forwards;
  }
  */
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
      slidesEngage: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    // console.log('props>Collection: ', props);
  }
  componentDidMount() {
    // console.log("this.state.slides.length", this.state.total)
  }
  clickHandler() {
    this.setState({
      current: this.state.current + 1 === this.state.total ? 0 : this.state.current + 1,
      slidesEngage: true
    });
    console.log('this.state.current', this.state.current);
  }
  componentWillUnmount() {}

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles;
    const currentSlide = this.state.slides[this.state.current];
    // console.log('currentSlide', currentSlide);
    const { proj_icon, proj_number, proj_title, proj_tech, proj_desc, proj_links } = currentSlide;
    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <PageBanner fill={fill} />
        <div className="grid-ctr-tall">
          <section>
          <div className="meta-data-1a fibonacci ">.</div>
          <div className="meta-data-1b fibonacci ">.</div>
          <div className="meta-data-gauge fibonacci ">
          <ProgressGauge total={this.state.total} count={proj_number}/>
          </div>
          <div className="meta-data-links fibonacci ">
              <LinksIcon />
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
            <div className="meta-data-techlist fibonacci">
              <ul>{proj_tech.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul>
            </div>
            <div className="meta-data-btn-pos fibonacci" onClick={() => this.clickHandler()} >
              <CycleBtn count={proj_number} id="cycle-btn"/>
            </div>
            <div className="meta-data-desc fibonacci fader">
              <h3>{proj_title}</h3>
              <p>{proj_desc}</p>
            </div>

            <div className="slideshow-container-tall">
              <Slideshow currentSlide={this.state.slides[this.state.current]} />
            </div>
          </section>
        </div>
        
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

1,1,2,3,5,8,13,21 = 54;

black to white fibonacci

(1 / 13 ) * 100 = 07.7%
background-color: hsl(0, 0%, 92.3%); 

(1 / 13 ) * 100 = 07.7% 
background-color: hsl(0, 0%, 92.3%); 

(2 / 13 ) * 100 = 15.4% 
background-color: hsl(0, 0%, 84.6%); 

(3 / 13 ) * 100 = 23.1%
background-color: hsl(0, 0%, 76.9%); 

(5 / 13 ) * 100 = 38.5%
background-color: hsl(0, 0%, 61.5%); 

(8 / 13 ) * 100 = 61.5%
background-color: hsl(0, 0%, 38.5%); 

(13 / 13 ) * 100 = 100%
background-color: hsl(0, 0%, 0%); 

*/