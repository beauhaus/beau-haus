import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      current: 0
    };
    this.showNext = this.showNext.bind(this);
  }
  componentDidMount() {
    const {children} = this.props;
    this.setState({
      total: Children.count(children)
    })
  }
  showNext() {
    const {total, current} = this.state;
console.log("NEXT!")
this.setState( {
  current: current + 1 === total? 0 : current+ 1
})
  }
  render() {
      const cards = Children.map(this.props.children, child => (
        <div>{child}</div>
      ))
      const children = this.props;
    return (
      <div>
      <button onClick={this.showNext}>next</button>
      Children.count() : {Children.count(this.props.children)}
      {Children.toArray(cards)[this.state.current]}
      </div>
    );
  }
}

export default Slideshow;

/*
      {Children.only(this.props.children)}

*/