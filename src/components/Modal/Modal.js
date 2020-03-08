import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const ModalContext = React.createContext();

function Modal(props) {
  const { isOpen, onClose } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ onClose }}>
      {props.isOpen ? (
        <React.Fragment>
          <div className="modal-backdrop" onClick={onClose}></div>
          <div className="modal">{props.children}</div>
        </React.Fragment>
      ) : null}
    </ModalContext.Provider>
  );
}

export function Header(props) {
  const { children } = props;
  const { onClose } = useContext(ModalContext);

  return (
    <div className="modal-header">
      {typeof children === 'string' ? (
        <h2 className="modal-header__text">{children}</h2>
      ) : (
        children
      )}
      <span className="modal-header__close" onClick={onClose}>
        &times;
      </span>
    </div>
  );
}

export function Body(props) {
  const { children } = props;

  return <div className="modal-body">{children}</div>;
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
