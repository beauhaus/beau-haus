import React from 'react';
import ReactDOM from 'react-dom';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  //Singular responsability. Simply extract from input field, then call the parent
  getOptionInput = (evt) => {
    evt.preventDefault();
    const optionEntry = evt.target.elements.optionField.value.trim(); // inside formSubmit

    /**Error msg is specific to this form */
    const error = this.props.handleAddOption(optionEntry);
    this.setState(() => ({ error }));

    if (optionEntry) {
      this.props.handleAddOption;
    }
    if (!error) {
      evt.target.elements.optionField.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.getOptionInput}>
          <input type="text" name="optionField" />
          <button
          className="btn btn-link">Add Option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
