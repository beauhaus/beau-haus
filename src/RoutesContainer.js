import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import NavsContainer from './components/UI/NavsContainer';
// import NavLink from './components/UI/NavLink';
// import NavMenu from './components/UI/NavMenu';

import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Collect from './components/pages/Collect';
import Code from './components/pages/Code';
import Connect from './components/pages/Connect';

import PageData from './data/PageData.json';

import BHLogo from './components/portals/BHLogo';
import SocIcons from './components/portals/SocIcons';
import NavsContainer from './components/UI/NavsContainer';



// import styled from 'styled-components';

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
                  <Switch location={location}>
                  <Route
                      exact
                      path="/"
                      render={() => {
                        return <Home location={location} profile={PageData.profile.home} />;
                      }}
                    />
                    <Route
                      path="/create"
                      render={() => {
                        return <Create location={location} profile={PageData.profile.create} />;
                      }}
                    />
                    <Route
                      path="/collect"
                      render={() => {
                        return <Collect location={location} profile={PageData.profile.collect} />;
                      }}
                    />
                    <Route
                      path="/code"
                      render={() => {
                        return <Code location={location} profile={PageData.profile.code} />;
                      }}
                    />
                    <Route
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
              <SocIcons/>
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

    // console.log('Props > NavPortal: ', { ...props });
  }
  menuClickHandler(name, fill) {
    // this.setState({
    //   page: name,
    //   pageThemeColor: fill
    // });
    // console.log(`MenCLickHandle got: ${name} & ${fill}`)
  }


  render() {
    return ReactDOM.createPortal(<NavsContainer {...this.props} select={this.menuClickHandler}/>, document.getElementById('nav'));
  }
}

const BHLogoPortal = props => {
  return ReactDOM.createPortal(<BHLogo {...props} />, document.getElementById('logo'));
};

export default App;

/****REDIRECT*** */
// import { Redirect } from 'react-router-dom';
// <Route exact path="/" render={() => <Redirect to="/home" />} />
