import React from 'react';
import { Link } from 'react-router-dom';
import NotesFormModal from './NotesFormModal';

class NotesDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };

        this.handleUploadButton = this.handleUploadButton.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleUploadButton() {
        this.setState(() => ({ modalOpen: true }));
    }

    handleModalClose() {
        this.setState(() => ({ modalOpen: false }));
    }

    render() {
        return (
            <div className="dashboard dashboard--notes">
                <div className="dashboard__content">
                    <div className="dashboard__header">
                        <h2 className="dashboard__title">Notes Dashboard</h2>
                        <button
                            onClick={this.handleUploadButton}
                            className="button dashboard--notes__button"
                        >
                            Upload Notes
                        </button>
                    </div>
                    <NotesFormModal
                        modalOpen={this.state.modalOpen}
                        handleModalClose={this.handleModalClose}
                    />
                    <div className="dashboard--notes__branches">
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/first_year"
                        >
                            First Year
                        </Link>
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/computer_science"
                        >
                            Computer Science
                        </Link>
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/electrical"
                        >
                            Electrical
                        </Link>
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/electronics"
                        >
                            Electronics
                        </Link>
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/mechanical"
                        >
                            Mechanical
                        </Link>
                        <Link
                            className="dashboard--notes__branches-link"
                            to="/notes/civil"
                        >
                            Civil
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesDashboard;
