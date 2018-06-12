import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import NavsContainer from './components/UI/NavsContainer';
// import NavLink from './components/UI/NavLink';

import Home from './components/pages/Home';
import Creation from './components/pages/Creation';
import Collection from './components/pages/Collection';
import Reflection from './components/pages/Reflection';
import Connection from './components/pages/Connection';

import PageData from './data/PageData.json';

import BHLogo from './components/portals/BHLogo';
import SocIcons from './components/portals/SocIcons';
import NavsContainer from './components/UI/NavsContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { init: 'state' };
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  menuClickHandler(name, fill) {
    this.setState({
      // page: name,
      // pageThemeColor: fill
    });
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
                      path="/creation"
                      render={() => {
                        return <Creation location={location} profile={PageData.profile.creation} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/collection"
                      render={() => {
                        return <Collection location={location} profile={PageData.profile.collection} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/reflection"
                      render={() => {
                        return <Reflection location={location} profile={PageData.profile.reflection} />;
                      }}
                    />
                    <Route
                      className="route"
                      path="/Connection"
                      render={() => {
                        return <Connection location={location} profile={PageData.profile.connection} />;
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
    this.menuClickHandler = this.menuClickHandler.bind(this);

  }
  menuClickHandler(name, fill) {
    console.log(`MenCLickHandle got: ${name} & ${fill}`)
  }

  render() {
    return ReactDOM.createPortal(
      <NavsContainer {...this.props} select={this.menuClickHandler} />,
      document.getElementById('nav')
    );
  }
}

const BHLogoPortal = props => {
  return ReactDOM.createPortal(<BHLogo {...props} />, document.getElementById('logo'));
};

export default App;

/****REDIRECT*** */
// import { Redirect } from 'react-router-dom';
// <Route exact path="/" render={() => <Redirect to="/home" />} />
