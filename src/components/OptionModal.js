import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> {
    return (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">SelectedOption</h3>
            {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>okay</button>
        </Modal>
    );
};
export default OptionModal;