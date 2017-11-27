import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props)=>
    //implicit return 
    <Modal
    //real boolean needs to be passed, !!'string '-> true; undefined not a valid string
    isOpen={!!props.modalOpenSelected}
    onRequestClose={props.onResetHandlePick}
    contentLabel="Selected option"
    closeTimeoutMS={500}
    className="modal"
    > 
     <h3 className="modal__title">You have selected the following option!</h3>
     <p className="modal__body">{props.pickedOption}</p>
     <button 
     className="small-button"
     onClick={props.onResetHandlePick}> Okay! </button>
    </Modal>
;
export default OptionModal;