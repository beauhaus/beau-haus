import React, { Component } from 'react';
import styled from 'styled-components';

import Slides from '../../data/SlideShowData.json';
import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

import Slideshow from '../UI/Slideshow'
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
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
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
  & > .grid-ctr {
    grid-column: 2;
    grid-row: 2;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    opacity: 1; /* fixme: during testing this overrides app.css */
    & img {
      width: 142px;
      height: 142px;
      margin: 0 3vw;
    }
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
      profile: props.pageStyles
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
    const { slides } = Slides;

    return (
      <CollectionPageCompDiv className="page collection-container" style={pageStyles}>
        <div className="grid-header">header</div>
        <div className="topic-container">
          <img src="./img/pagesimg/collectionbanner.svg" alt="collection banner" />
        </div>
        
        <div className="grid-ctr">
          
          <Slideshow>
          
          {slides.map((item, idx) =>(
            <img key={item.id} src={item.url} alt={item.alt}/>
          ))}
          </Slideshow>
        </div>
        <WaterBg {...water} />
        <WaterBody />
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

export default Collection;
