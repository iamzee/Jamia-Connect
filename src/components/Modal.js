import React from 'react';
import Modal from 'react-modal';

const NotesFormModal = ({
    modalOpen,
    handleModalClose,
    component: Component
}) => (
    <Modal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Upload Notes Form"
        closeTimeoutMS={200}
        className="modal"
    >
        <Component />
        <button
            className="upload-form__input upload-form__modal-close-button"
            onClick={handleModalClose}
        >
            Close
        </button>
    </Modal>
);

export default NotesFormModal;
