import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './Interface/NavMenu';
import {
  BrowserRouter,
  Route,
  Link, //move to Nav
  Switch
} from 'react-router-dom';

import Background from './Background';
import HomeContainer from './HomeContainer';

import Banner from './Banner';
import BHLogo from './BHLogo';

import Home from './pages/Home';

import Create from './pages/Create';
import Collect from './pages/Collect';
import Code from './pages/Code';
import Connect from './pages/Connect';

const FourOhFour = () => (
  <div className="page-404">
    <br />
    <br />
    <br />
    <h1>404 (...probably your fault)</h1>
  </div>
);

class RoutesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageThemeColor: '#FFCC91',
      page: 'home'
    };
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  componentDidMount(props) {
    this.setState(() => {
      place: 'holder';
    });
  }
  menuClickHandler(name, fill) {
    this.setState({
      page: name,
      pageThemeColor: fill
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Banner dot={this.state.pageThemeColor} />
          <HomeContainer />
          <NavMenu load={this.state.load} page={this.state.page} select={this.menuClickHandler} />
          <Background />
          <Switch>
            <Route exact path="/" render={() => <Home name="home" />} />
            <Route path="/create" render={() => <Create name="create" />} />
            <Route path="/collect" render={() => <Collect name="collect" />} />
            <Route path="/code" render={() => <Code name="code" />} />
            <Route path="/connect" render={() => <Connect name="connect" />} />
            <Route component={FourOhFour} />
          </Switch>
          <BHLogo dot={this.state.pageThemeColor} />
        </div>
      </BrowserRouter>
    );
  }
}

export default RoutesContainer;
/*

///*********************
 <Route path="/" onChange={yourHandler} component={AppContainer}>
   <IndexRoute component={StaticContainer}  />
   <Route path="/a" component={ContainerA}  />
   <Route path="/b" component={ContainerB}  />
 </Route>
 onChange={yourHandler} 
function yourHandler(previousRoute, nextRoute) {
   //do your logic here
}
*/
