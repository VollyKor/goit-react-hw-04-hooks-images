import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEscape(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleClick}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot,
  );
}
