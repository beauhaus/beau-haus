import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';

import Slides from '../../data/SlideShowData.json';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      current: 0
    };
    this.showNext = this.showNext.bind(this);
    this.slides = Slides.slides;
  }
  componentDidMount() {
    console.log(this.slides);
    this.setState({
      total: 10
    });
  }
  showNext() {
    const { total, current } = this.state;
    console.log('NEXT!');
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  }
  // slides.map((item, idx) =>(
  //   <img key={item.id} src={item.url} alt={item.alt}/>

  render() {
    const { slides } = Slides;
    const cards = slides.map(item => (
        <img className="fadeIn" key={item.id} src={item.url} alt={item.alt} />
    ));
    return (
      <div>
        <button onClick={this.showNext}>fwd</button>
        {cards[this.state.current]}
      </div>
    );
  }
}


export default Slideshow;

/*
*/
