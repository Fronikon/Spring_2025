import React, { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

interface PropsType {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<PropsType> = ({ closeModal, children }) => {
  const el = document.createElement('div');
  const modal = useRef(null);

  const onClick = (e: MouseEvent): void => {
    if (e.target === modal.current) {
      closeModal();
    }
  };

  useEffect(() => {
    modalRoot!.appendChild(el);
    document.body.style.overflow = 'hidden';

    return () => {
      modalRoot!.removeChild(el);
      document.body.style.overflow = 'auto';
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div ref={modal} onClick={onClick} className={styles.modal}>
      {children}
    </div>,
    el
  );
};

export default Modal;
