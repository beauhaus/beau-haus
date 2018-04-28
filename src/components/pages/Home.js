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
      <br/><br/><br/>
      <h1>Home Something!</h1>
      </div>
    );
  }
}

export default Home;