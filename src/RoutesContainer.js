import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './components/pages/Home';
import Coding from './components/pages/Coding';
import Coded from './components/pages/Coded';
import Learning from './components/pages/Learning';
import Connect from './components/pages/Connect';

import PageData from './data/PageData.json';

import BHLogo from './components/portals/BHLogo';
import SocIcons from './components/portals/SocIcons';
import NavsContainer from './components/UI/NavsContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { init: 'state' };
  }

  render() {
    return (
      <Router className="App-routes-container">
        <Route
          render={({ location }) => (
            <div location={{ location }} className="App">
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={4000} classNames="fade">
                  <Switch className="switch" location={location}>
                    <Route
                      className="route"
                      exact
                      path="/"
                      render={() => {
                        return <Home location={location} profile={PageData.profile.home} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/coding"
                      render={() => {
                        return <Coding location={location} profile={PageData.profile.coding} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/coded"
                      render={() => {
                        return <Coded location={location} profile={PageData.profile.coded} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/learning"
                      render={() => {
                        return <Learning location={location} profile={PageData.profile.learning} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/connect"
                      render={() => {
                        return <Connect location={location} profile={PageData.profile.connect} />;
                      }}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <NavPortal location={location} />
              <BHLogoPortal location={location} />
              <SocIcons />
            </div>
          )}
        />
      </Router>
    );
  }
}

class NavPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state'
    };
  }

  render() {
    return ReactDOM.createPortal(
      <NavsContainer {...this.props}  />,
      document.getElementById('nav')
    );
  }
}
const BHLogoPortal = props => {
  return ReactDOM.createPortal(<BHLogo {...props} />, document.getElementById('logo'));
};

export default App;