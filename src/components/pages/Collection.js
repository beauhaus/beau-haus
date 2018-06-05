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

import Slideshow from '../UI/Slideshow';
import SlidesData from '../../data/SlideShowData.json';
/* grid is fibonacci @WIDTH 51vw  X 31.5vh (1.5 * 34) X (1.5 X 21)
so. 16vw 68vw 16vw*/

// /Users/beau/Desktop/beauhaus/beau-haus/public/img/listdot.svg
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
  & > div.page-banner {
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
      left: 14.1rem;
      background: grey;
      width: 22.65rem;
      height: 15.3rem;
      box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0.8);
      z-index: 100;
      text-align: center;
      & > svg {
        height: 100%;
        width: 100%;
        & > rect {
          fill: #999;
        }
      }
      & > h1 {
        position: absolute;
        top: 2rem;
        left: 5rem;
        margin: 0;
        font-family: 'Plaster', monospace, sans-serif;
        font-size: 10rem;
        color: #555;
        text-shadow: -2px 2px 4px #ecdfcd;
        opacity: 1;
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
      grid-template-columns: repeat(34, 1fr);
      grid-template-rows: repeat(21, 1fr) 20vh;
      & > .meta-data-nums {
        grid-column: 1/3;
        grid-row: 1/4;
        text-align: center;
      }
      & > .slideshow-container {
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;

        grid-template-columns: 1fr;
        grid-template-rows: 1fr 20vh;
      }
      & > .meta-data-links {
        grid-row: 1/4;
        grid-column: 3/6;
        position: relative;
        background: hsla(51, 74%, 45%, 0.4);
        svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        a,
        a:visited,
        a:link,
        a:active {
          text-decoration: none;
          color: #ccf1ce;
          text-shadow: -1px 1px 2px #1c1e20;

          font-weight: 400;
        }
        a:hover {
          color: #fff;
          text-shadow: -2px 2px 2px black;
        }
        ul {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          font-weight: 100;
          text-align: center;
          line-height: 2.5rem;
        }
      }
      & > .meta-data-techlist {
        grid-row: 4/9;
        grid-column: 1/6;
        text-align: left;
        padding: 1%;
        font-size: 1em;
        position: relative;
        ul li {
          display: block;
        }
        ul {
          font-style: italic;
          font-weight: 300;
          text-align: left;
          line-height: 2rem;
          color: black;
          & > li::after {
            content: url('./img/listdot.svg');
            font-size: 10px;
            width: 10px;
            margin: 0 4px;
            display: inline-block;
            opacity: 0.5;
          }
        }
      }

      /*
      & .meta-data-tech {
        grid-column: 6/14;
        grid-row: 1/9;
        padding: 5%;
        font-size: 1.3em;
      }
*/
      & .meta-data-desc {
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
    background: maroon;
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
    console.log('props>Collection: ', props);
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
    const { fill } = this.props.profile.pageStyles;
    const currentslide = this.state.slides[this.state.current];
    // console.log('currentslide', currentslide);
    const { proj_icon, proj_number, proj_title, proj_tech, proj_desc, proj_links } = currentslide;
    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
       <PageBanner fill={fill}/>
        <div className="grid-ctr-tall fading-in">
          

          <button onClick={() => this.clickHandler()} id="cycle-btn">

            <svg id="demo" viewBox="220 0 500 500" preserveAspectRatio="none">
              <defs>
                <filter id="grain">
                  <feTurbulence type="turbulence" numOctaves="1" baseFrequency="3" result="turb" />
                  <feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
                  <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter" />
                  <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
                </filter>
              </defs>
              <rect id="view" width="520" height="520" fill="#555" x="210" y="0" filter="url(#grain)" />
            </svg>
            <h1>{proj_number}</h1>
          </button>
          <section>
            <div className="meta-data-nums" />
            <div className="meta-data-links">
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
            <div className="meta-data-techlist">
              <ul>{proj_tech.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul>
            </div>

            {/*

            */}
            <div className="meta-data-desc">
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

grain ******************
<button><svg id="demo" viewBox="220 0 500 500" preserveAspectRatio="none">
<defs>
<filter  id="grain">
<feTurbulence type="turbulence" numOctaves="1" baseFrequency="3"  result="turb"/>
<feComposite in="turb" operator="arithmetic" k1="1.3" k2=".5" k3=".5" result="result1" />
<feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter"/>
<feBlend mode="multiply" in="finalFilter" in2="SourceGraphic" />
</filter>
</defs>
  <rect id="view" width="520" height="520" fill="#eee" x="210" y="0" filter="url(#grain)" />

</svg>
</button>

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

links icon

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 52">
  <linearGradient id="a" x1="28.8789" x2="28.8789" y1="33.8271" y2="10.5533" gradientTransform="matrix(.8733 -.4871 .4871 .8733 -.7592 23.0815)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#5b9493"/>
    <stop offset="1" stopColor="#113030"/>
  </linearGradient>
  <path fill="url(#a)" d="M68.2 11c3.1 5.1 1.1 11.5-4.5 14.3L17.5 48.9C12 51.7 5 49.9 1.9 44.8-1.2 39.7.8 33.3 6.4 30.5L52.5 6.9c5.5-2.8 12.6-1 15.7 4.1z"/>
  <linearGradient id="b" x1="374.9551" x2="374.9551" y1="-154.4287" y2="-177.1954" gradientTransform="rotate(150.849 188.89793969 -115.43293178)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#940022"/>
    <stop offset=".9957" stopColor="#240008"/>
  </linearGradient>
  <path fill="url(#b)" d="M26.7 32.2c-3.1-5.1-2.3-10.9 1.8-13L62.7 1.8c4.1-2.1 10 .3 13.1 5.4 3.1 5.1 2.3 10.9-1.8 13L39.8 37.6c-4.2 2.1-10-.3-13.1-5.4z"/>
  <linearGradient id="c" x1="19.1953" x2="19.1953" y1="33.0186" y2="11.0454" gradientTransform="matrix(.8733 -.4871 .4871 .8733 -.7592 23.0815)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#5b9493"/>
    <stop offset="1" stopColor="#113030"/>
  </linearGradient>
  <path fill="url(#c)" d="M14.9 50.2L49 32.8c4.1-2.1 4.9-7.9 1.8-13l-49 25c3.2 5.1 9 7.5 13.1 5.4z"/>
</svg>
*****************
<button onClick={() => this.clickHandler()} id="cycle-btn">
            <h1>{proj_number}</h1>
          </button>
*/
