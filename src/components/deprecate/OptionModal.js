import React from 'react';

import Modal from 'react-modal';
// <button onClick={this.openModal}>Open Modal</button>

const OptionModal = (props) => (
    // selectedOption is either going to be 'undefined' (default) or a string
    // we double-bang it to create "true booleans"

    // selectedOption is either going to be 'undefined' (default) or a string
    // we double-bang it to create "true booleans"

    // "!!" flips a valid string over to 'true' and converts undefined to false

  <Modal className="modal"
    isOpen={!!props.selectedOption}
    contentLabel={"selected Option"}
    onRequestClose={props.clear}
    closeTimeoutMS={4000}
    

    >
    {/* 
    <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
    <button onClick={this.closeModal}>close</button>
    */}
    {props.selectedOption && <p>{props.selectedOption}</p> }
    <form>
      <button onClick={props.clear}>X</button>
    </form>
  </Modal>
);

export default OptionModal;


/*

 <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={props.clear}
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>

            */
