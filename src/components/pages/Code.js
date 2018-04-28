import React from 'react';
import ReactDOM from 'react-dom';

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="tst page-code">
      <br/><br/><br/>
      <h1>Code Something!</h1>
      </div>
    );
  }
}

export default Code;