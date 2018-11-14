import React, { Component } from 'react';
import styled from 'styled-components';

import HomeTitle from './HomeTitle';
import LogoTheme from '../scene/LogoTheme';

const HomePageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  z-index: 1;
  #short-tree {
    transform: rotateZ(-5deg);
    bottom: 8vh;
    left: -1.5vw;
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
        branches: '#777',
        leaves: '#5a5a5a',
        opacity: '1'
      },
      medium: {
        branches: '#afafaf',
        leaves: '#afafaf',
        opacity: '0'
      },
      tall: {
        branches: '#8b8b8b',
        leaves: '#8b8b8b',
        opacity: '0',
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
      <HomePageCompDiv className="home-container page" style={this.state.profile.pageStyles}>
        <HomeTitle/>
        <LogoTheme themeFill={this.props.stylesDB} />
        </HomePageCompDiv>
      );
    }
  }
  
  export default Home;