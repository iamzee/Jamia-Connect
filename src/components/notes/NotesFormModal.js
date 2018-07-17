import React from 'react';
import Modal from 'react-modal';
import UploadNotesForm from './UploadNotesForm';

const NotesFormModal = props => (
    <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.handleModalClose}
        contentLabel="Upload Notes Form"
        closeTimeoutMS={200}
        className="modal"
    >
        <UploadNotesForm />
        <button
            className="upload-form__input upload-form__modal-close-button"
            onClick={props.handleModalClose}
        >
            Close
        </button>
    </Modal>
);

export default NotesFormModal;
