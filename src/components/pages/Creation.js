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

const CreationPageCompDiv = styled.div`
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
    & > img {   /* svg */
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
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    opacity: 1; /* fixme: during testing this overrides app.css */
    & .creation-proj-desc {
      padding: 2%;
      color: #444;
      & h2 {
        margin: 0 auto;
        font-family: 'Segoe UI', sans-serif;
        font-weight: lighter;
      }
      & h3 {
        margin: 0.5vh auto;
      }
      & p {
        margin: 3vh auto;
      }
      & h4 {
        margin: auto auto -2vh;
      }
      & ul {
        text-align: center;
      }
      & li {
        margin: 0 1vw;
        display: inline-block;
      }
    }
    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      & > .top-text {
        grid-column: 1/3;
        grid-row: 1;
        text-align: right;
      }
    }
    & > .ctr-row-mid {
      grid-column: 1/4;
      grid-row: 2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      & > .mid-text {
        text-align: left;
        grid-column: 2/4;
      }
      & > .mid-proj-img {
        position: relative;
        & > img {
          position: absolute;
          top: 0;
          left: 2vw;
          width: 9vw;
          height: 14vh;
        }
      }
    }
    & > .ctr-row-bot {
      display: none; /* NOTE: TBD */
      grid-column: 1/4;
      grid-row: 3;
      border: 2px solid orangered;
    }
  }
`;

class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

    // console.log("props>Creation: ", props);
  }
  // componentDidMount() {
  //   this.props.location.state
  //     ? this.setState({ profile: this.props.location.state.profile })
  //     : this.setState({ profile: InitialLoad.profile });
  // }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <CreationPageCompDiv className="page creation-container" style={pageStyles}>
        <div className="grid-header" />
        <div className="topic-container">
          <img src="./img/pagesimg/creationbanner.svg" alt="current creation" />
        </div>
        <div className="grid-ctr">
          <div className="ctr-row-top">
            <div className="creation-proj-desc top-text">
              <h2>Meet & Eat</h2>
              <h3>App scheduling appointments for large teams and companies.</h3>
              <p>
                Schedules random, one-on-one dates so that, by the end of each cycle, all members will have met each other and will
                have met and shared a meal.
              </p>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>mongoDB</li>
              </ul>
            </div>
            <div className="top-proj-img">
              <img src="./img/pagesimg/peckish-picker-icon.svg" alt="peckish picker icon" />
            </div>
          </div>
          <div className="ctr-row-mid">
            <div className="mid-proj-img">
              <img src="./img/pagesimg/codejournal-icon.png" alt="code journal icon" />
            </div>
            <div className="creation-proj-desc mid-text">
              <h2>Code Journal</h2>
              <h3>Large library of code and tutorials. <br/>(Portage from Angular.js to React)</h3>
              <p>This project is curently being ported from Angular.js to React into beau.haus/reflection.</p>
              <ul>
                <li>React.js</li>
                <li>node.js</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
          <div className="ctr-row-bot" />
        </div>

        <LogoTheme themeFill={fill} />
      </CreationPageCompDiv>
    );
  }
}

export default Creation;
// <WaterBg {...water} />
// <WaterBody />
// <Shore />
// <MediumTree db={tree.medium} />
// <TallTree db={tree.tall} />
// <ShortTree db={tree.short} />
// <MuteBtn />

/*

  .page-creation h1,
  p {
    font-weight: lighter;
    width: 100%;
    font-size: 0.8em;
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

          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />


          <p>Your patience is appreciated.</p>


*/
