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
      load: true
    };
    // console.log("this.state.test: ", this.state.test)
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  componentDidMount(props) {
    this.setState(() => {
      place: 'holder'
    })
  }
  menuClickHandler(name, fill) {
    console.log("name: ", name)
    console.log("fill: ", fill)

    this.setState({
      pageThemeColor: fill,
      page: name,
      load: false
    });
  }
  
  render() {
    
    return (
      <BrowserRouter>
      <div className="app-container">
      <Background/>
      <HomeContainer/>
        <Banner dot={this.state.pageThemeColor}/>
          <NavMenu 
          load={this.state.load}
          page={this.state.page}
          select={this.menuClickHandler} />
          <Switch>
            <Route exact path="/" render={() => <Home name="home" />} />
            <Route path="/create" render={() =>
               <Create name="create" />} />
            <Route path="/collect" render={() =>
               <Collect name="collect" />} />
            <Route path="/code" render={() =>
               <Code name="code" />} />
            <Route path="/connect" render={() =>
               <Connect name="connect" />} />
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
