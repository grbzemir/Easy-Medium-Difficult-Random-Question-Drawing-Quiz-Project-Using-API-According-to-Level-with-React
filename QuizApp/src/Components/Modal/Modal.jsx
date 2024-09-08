import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ score }) => {
    return (
        <div className='modal'>
            <div>Skor: {score}</div>
            <div onClick={() => window.location = "/"} className='modal-btn'>Yeniden Başla</div>
        </div>
    );
}

Modal.propTypes = {
    score: PropTypes.number.isRequired
}

export default Modal;
