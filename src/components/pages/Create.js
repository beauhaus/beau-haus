import React from 'react';
import ReactDOM from 'react-dom';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="page-create">
      <br/><br/><br/>
      <h1>Create Something!</h1>
      </div>
    );
  }
}

export default Create;