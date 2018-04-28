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
  <div className="page-404">
      <br/><br/><br/>
      <h1>404 (and probably your fault)</h1>
      </div>
);

class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          view: ''
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
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
