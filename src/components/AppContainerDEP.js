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
          name: "placeholder",
          pageThemeColor: '#ebbd89',
          palette: [
            {
              pageName: "home",
              color: "#ebbd89"
            },
            {
              pageName: "create",
              color: "#9b353a"
            },
            {
              pageName: "collect",
              color: "#85bb8f"
            },
            {
              pageName: "code",
              color: "#567ace"
            },
            {
              pageName: "connect",
              color: "#65aca2"
            },
          ]
    };
    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.log = this.log.bind(this);
  }
  log(previousRoute, nextRoute) {
    // console.log(input);
    console.log("prev: ", previousRoute)
    console.log("next: ", nextRoute)
  }
  menuClickHandler(color, name) {
    console.log("name", name)
    this.setState({
      currentPage: name,
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
        <NavMenu 
        click={this.menuClickHandler} 
        pageColor={this.state.pageThemeColor}
        palette={this.state.palette}
        />
        <Switch>
        <Route exact path="/" render={() =>(
          <Home name={this.state.currentPage}
            />
        )} />
        <Route path="/create" render={() =>(
          <Create name={this.state.currentPage}/>
        )} />
        
        <Route path="/collect" render={() =>(
          <Collect name={this.state.currentPage}/>
        )} />
        <Route path="/code" render={() =>(
          <Code name={this.state.currentPage}/>
        )} />
        <Route path="/connect" render={() =>(
          <Connect name={this.state.currentPage}/>
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
/*

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