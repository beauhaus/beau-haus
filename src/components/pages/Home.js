import React, { Component } from 'react';
import styled from 'styled-components';

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

const HomePageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  .page-home {
    // color: red;
    // z-index: 20;
    position: relative;
    top: 0;
    font-size: 2em;
    width: 50vh;
  
    height: 70vh;
    margin-left: 30vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .page-home h1, p {
      font-weight: lighter;
    width: 100%;
    font-size: .8em; 
      color: dimgray;
  
  }
  h1 span {
    font-style: italic;
    color: black;
  }
  #temp-img {
    top: 20vh;
    margin: 10vh auto 1vh auto;
    border: 2px solid skyblue;
    box-shadow: 4px 4px 10px 0px black;
    width: 100%;
  }
`;

const InitialLoad = {
  profile: {
    name: 'HOME',
    pageStyles: {
      background: 'linear-gradient(0deg, #bfbfbf 0%, #838383 100%)',
      color: 'brown',
      fill: '#e47814'
    },
    water: {
      bgGradient: {
        left: '#646464',
        right: '#fff'
      }
    },
    skyGradient: {
      left: '#646464',
      right: '#fff'
    },
    tree: {
      short: {
        branches: '#363636',
        leaves: '#0f0f0f',
        opacity: '1'
      },
      medium: {
        branches: '#bbb',
        leaves: '#9b9b9b',
        opacity: '1'
      },
      tall: {
        branches: '#707070',
        leaves: '#999999',
        opacity: '1',
        flower: {
          base: '#513535',
          frame: '#bd1634',
          petal: '#a90c00',
          stamen: '#fceded'
        }
      }
    }
  }
};
/* NB: Home (on initial load of app) sets state.profile from const InitialLoad object.
 * props.location contains no state (initially).
 * subsequent link clicks load props.location.state onto 
 * Home component's state.profile
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: InitialLoad.profile
    };
  }
  componentDidMount() {
    this.props.location.state
      ? this.setState({ profile: this.props.location.state.profile })
      : this.setState({ profile: InitialLoad.profile });
  }

  render() {
    const { tree, water } = InitialLoad.profile;
    return (
      <HomePageCompDiv className="page home-container" style={this.state.profile.pageStyles}>
        <div className="page-home">
          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />

          <h1>
            <span>Under Construction...</span>
            <br />
            <br />
            Rome wasn't built in a day.<br />
            Neither was this site.
          </h1>
          <p>Your patience is appreciated.</p>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={this.props.stylesDB} />
      </HomePageCompDiv>
    );
  }
}

export default Home;
