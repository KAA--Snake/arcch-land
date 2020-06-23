import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './Modal.module.scss';

Modal.setAppElement('#root');

function CustomModal({
  children,
  isOpen,
  onCloseModal,
  bodyClassName,
  overlayClassName,
  className,
  closeTimeoutMS,
  onAfterClose,
  isShowCloseButton,
  closeButtonClassName,
  isWithoutPadding,
  align,
  valign,
}) {
  return (
    <Modal
      onAfterClose={onAfterClose}
      isOpen={isOpen}
      onRequestClose={() => {
        onCloseModal();
      }}
      portalClassName={`${styles.popup} ${ isWithoutPadding ? [styles.withoutPadding] : ''} ${className} ${styles.alignCenter} ${styles.valignCenter}`}
      overlayClassName={{
        base: `${styles.overlay} ${overlayClassName}`,
        afterOpen: styles.afterOpen,
        beforeClose: styles.beforeClose,
      }}
      bodyOpenClassName={styles.popupOpen}
      className={`${styles.body} ${bodyClassName}`}
      closeTimeoutMS={closeTimeoutMS}
    >
      {isShowCloseButton && (
        <button
          type="button"
          className={`${styles.closePopupButton} ${closeButtonClassName}`}
          onClick={onCloseModal}
        >
          X
        </button>
      )}

      {children}
    </Modal>
  );
}

CustomModal.defaultProps = {
  className: '',
  bodyClassName: '',
  overlayClassName: '',
  closeButtonClassName: '',
  closeTimeoutMS: 300,
  onAfterClose() {},
  onCloseModal() {},
  isOpen: false,
  isShowCloseButton: true,
  isWithoutPadding: false,
  align: 'center',
  valign: 'center',
};

CustomModal.propTypes = {
  onAfterClose: PropTypes.func,
  onCloseModal: PropTypes.func,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  closeTimeoutMS: PropTypes.number,
  isOpen: PropTypes.bool,
  isShowCloseButton: PropTypes.bool,
  isWithoutPadding: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'center', 'bottom']),
};

export default CustomModal;
