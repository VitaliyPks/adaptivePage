import React from 'react';
import './Modal.scss';

function Modal({ children, onClose }) {
  return (
    <>
      <div className="modal" onClick={onClose} />
      <div className="modal__content">
        {children}
      </div>
    </>
  );
}

export default Modal;
