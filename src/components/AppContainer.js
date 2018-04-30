import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './Interface/NavMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BHLogo from './BHLogo';

import Background from './Background';
import Banner from './Banner';
import HomeContainer from './HomeContainer';

// import HomeContainer from './HomeContainer';

import Home from './pages/Home';

import Create from './pages/Create';
import Collect from './pages/Collect';
import Code from './pages/Code';
import Connect from './pages/Connect';

const FourOhFour = () => (
  <div className="page-404">
      <br/><br/><br/>
      <h1>404 (...probably your fault)</h1>
      </div>
);

class RoutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          view: '',
          name: "beau",
          pageThemeColor: '#ebbd89',
          palette: [
            {
              color: "#ebbd89"
            },
            {
              color: "#9b353a"
            },
            {
              color: "#85bb8f"
            },
            {
              color: "#567ace"
            },
            {
              color: "#65aca2"
            },
          ]
    };
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  menuClickHandler(color) {
    console.log("color: ", color)
    this.setState({
      pageThemeColor:color
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
        <Background/>
        <HomeContainer/>

        <Banner dot={this.state.pageThemeColor}/>
        <NavMenu click={this.menuClickHandler} palette={this.state.palette}/>
        <Switch>
        <Route exact path="/" render={() =>(
          <Home name={this.state.name}/>
        )} />
        <Route path="/create" render={() =>(
          <Create name={this.state.name}/>
        )} />
        
        <Route path="/collect" render={() =>(
          <Collect name={this.state.name}/>
        )} />
        <Route path="/code" render={() =>(
          <Code name={this.state.name}/>
        )} />
        <Route path="/connect" render={() =>(
          <Connect name={this.state.name}/>
        )} />
        <Route component={FourOhFour} />
        </Switch>
        <BHLogo dot={this.state.pageThemeColor}/>
        </div>
      </BrowserRouter>
    );
  }
}
// <HomeContainer />

export default RoutesContainer;
