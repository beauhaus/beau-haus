import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './Interface/NavMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomeContainer from './HomeContainer';
import Home from './pages/Home';

import Create from './pages/Create';
import Collect from './pages/Collect';
import Code from './pages/Code';
import Connect from './pages/Connect';

const FourOhFour = () => (
  <h1>
    <span>😭</span>
    404
  </h1>
);

class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotColor: ''
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <NavMenu />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/collect" component={Collect} />
            <Route path="/code" component={Code} />
            <Route path="/connect" component={Connect} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// <HomeContainer />

export default RoutesContainer;
