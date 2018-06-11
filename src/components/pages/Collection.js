import React, { Component } from 'react';
import styled from 'styled-components';
// import { CSSTransitionGroup } from 'react-transition-group';

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

// import LinksIcon from './CollectionComps/LinksIcon';
import PageBanner from './CollectionComps/CollectionPageBanner';
// import CycleBtn from './CollectionComps/CycleBtn';
import Slideshow from './CollectionComps/Slideshow';
import SlidesData from '../../data/SlideShowData.json';
import SlideshowUI from './CollectionComps/SlideshowUI';

// /Users/beau/Desktop/beauhaus/beau-haus/public/img/listdot.svg

const CollectionPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 24vw 52vw 24vw;
  grid-template-rows: 30vh 50vh 20vh;
  user-select: none;

  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/4;
    position: relative;

    & section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(34, 1fr);
      grid-template-rows: repeat(21, 1fr) 20vh;
      & > div {
        margin: 0.5rem;
      }
      & > .slideshow-UI-container {
        grid-column: 1/14;
        grid-row: 1/9;
      }

      & .meta-data-13x13 {
        grid-column: 1/14;
        grid-row: 9/22;
        text-align: justify;
        background-color: hsl(0, 0%, 80%);
        opacity: 0;
        animation: fadeIn 5s 1.75s ease-in-out forwards;
        padding: 4%;
        & > .text-copy {
        }
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
      }

      & > .slideshow-container-tall-21x21 {
        /* entire right half */
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;

        grid-template-columns: repeat(21, 1fr);
        grid-template-rows: repeat(21, 1fr) 20vh;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  & #btn-mute {
    z-index: 50;
    fill: maroon;
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
    this.onStepFwdHandler = this.onStepFwdHandler.bind(this);
    // console.log('props>Collection: ', props);
  }
  componentDidMount() {
    // console.log("this.state.slides.length", this.state.total)
  }
  onStepFwdHandler() {
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
    const { proj_icon, proj_number, proj_title, proj_tech, proj_desc, proj_links } = currentSlide;
    // console.log('currentSlide', currentSlide);
    // click={() => this.clickHandler()}
    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <PageBanner fill={fill} />
        <div className="grid-ctr-tall">
          <section>
            <div className="slideshow-container-tall-21x21">
              <Slideshow currentSlide={this.state.slides[this.state.current]} links={proj_links}/>
            </div>
            <div className="slideshow-UI-container">
              <SlideshowUI stepFwd={this.onStepFwdHandler} current={this.state.current} total={this.state.total} />
            </div>
            <div className="meta-data-13x13 fibonacci fader">
              <h3 className="text-copy">{proj_title}</h3>
              <p className="text-copy">{proj_desc}</p>
            </div>
          </section>
        </div>

        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        {/*
          <ShortTree db={tree.short} />
          <MediumTree db={tree.medium} />
          <TallTree db={tree.tall} />
        */}
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CollectionPageCompDiv>
    );
  }
}

export default Collection;

/*
<LinksIcon />
<CycleBtn count={proj_number} id="cycle-btn" />
*************
<ul>
  {proj_links.map((item, idx) => (
</div>
    <li key={`${item}-${idx}li`}>
      <a key={`${item}-${idx}`} target="blank_" href={item.url}>
        {item.text}
      </a>
    </li>
  ))}
</ul>
)}

<ul>{proj_tech.map((item, idx) => <li key={`${item}-${idx}`}>{item}</li>)}</ul>
              

*******************LINKS TO PROJECTS CSS*************

        /*
        This stuff is for links
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
    
      }
    */

/************************FIBONACCI NOTES********************
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
