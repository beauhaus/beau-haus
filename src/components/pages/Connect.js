import React from 'react';
import ReactDOM from 'react-dom';

class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="page-connect">
      <br/><br/><br/>
      <h1>Connect Something!</h1>
      </div>
    );
  }
}

export default Connect;