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

/* Component is .home-container */
const HomePageCompDiv = styled.div`
  background: fuchsia;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  display: grid;
  grid-template-columns: 26vw repeat(3, 1fr) 26vw;
  grid-template-rows: 20vh repeat(4, 1fr) 20vh;
  z-index: 1;
  & > .grid-ctr {
    grid-column: 2/5;
    grid-row: 2/6;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    
    & > .eleven {
      grid-column: 1/3;
      text-align: right;
      padding: 10px;
    }
    & > .twelve {
      grid-column: 3/4;
      text-align: right;

    }
    & > ten {
      background: purple;
    }
    & > div {
      text-align: center;
      
    }
  }
}
 #temp-img {
  width: 100%;
  height: 100%;
}
#notice {
  font-size: 1.5vw;
  font-weight: 400;
  color: #000;
  margin-top: 10px;
  
  & > span {
    letter-spacing: .1vw;
    color: white;
    font-weight: 400;
    font-style: italic;
  }
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
      <HomePageCompDiv className="home-container page" style={this.state.profile.pageStyles}>
        <div className="grid-ctr">
          <div className="one">.</div>
          <div className="two">.</div>
          <div className="three">.</div>
          <div className="four">.</div>
          <div className="five">.</div>
          <div className="six">.</div>
          <div className="seven">.</div>
          <div className="eight">.</div>
          <div className="nine">.</div>
          <div className="ten">
            
          </div>
          <div className="eleven">
          <h3 id="notice">
              <span>Under Construction:</span>
              <br /><br/>
              Rome wasn't built in a day. <br/>Neither was this site.
            </h3>
            </div>
          <div className="twelve">
          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />
          </div>
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
