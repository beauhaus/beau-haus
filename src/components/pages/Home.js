import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="page-home">
         <p>okay well, this is under construction because React--while being lots of fun--is hard.</p>
      </div>
    );
  }
}

export default Home;