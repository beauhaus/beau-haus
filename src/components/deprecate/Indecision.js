import React from 'react';
import ReactDOM from 'react-dom';

// import AddOption from './AddOption';
// import Header from './Header';
// import Action from './Action';
// import Options from './Options';


import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDelOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDelSingleOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(item => optionToRemove !== item)
    }));
  };

  handleClearSelectedOption=(e) => {
    this.setState(() => {
      selectedOption: undefined
    })
  }

  randomPick = () => {
    let len = this.state.options.length;
    let rando = Math.floor(Math.random() * len);
    const option = this.state.options[rando];
    this.setState(() => ({ 
      selectedOption: option
     }));
  };
  addOption = optionEntry => {
    if (!optionEntry) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(optionEntry) > -1) {
      return 'This option already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(optionEntry) }));
  };
  componentDidMount() {
    try {
      const optionsLocalDB = localStorage.getItem('options');
      const options = JSON.parse(optionsLocalDB);
      // what if there's nothing in local storage? --we don't want to update with setState...
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      return;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // check if options array has changed (if len differs then, update)
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Indecision Sub';

    return (
      <div className="">
        <Header title={title} subtitle={subtitle} />
        <div className="container">
        <h1 className="app__title">Random Pick: {this.state.randoPick}</h1>
        <Action optionsExist={this.state.options.length} rando={this.randomPick} /> {/* oE is a bool prop */}
        <Options
          contents={this.state.options}
          wipe={this.handleDelOptions}
          delSingleOption={this.handleDelSingleOption}
        />
        <AddOption handleAddOption={this.addOption} /></div>
        <OptionModal clear={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
      </div>
    );
  }
}

export default IndecisionApp;
