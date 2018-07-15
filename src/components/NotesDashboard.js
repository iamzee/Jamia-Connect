import React from 'react';
import { Link } from 'react-router-dom';
import UploadNotesForm from './UploadNotesForm';

const NotesDashboard = () => (
    <div className="notes-dashboard">
        <div className="notes-dashboard__content">
            <div className="notes-dashboard__header">
                <h2 className="notes-dashboard__title">Notes Dashboard</h2>
                <button className="button notes-dashboard__button">
                    Upload Notes
                </button>
            </div>
            {/*<UploadNotesForm />*/}
            <div className="notes-dashboard__branches">
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/first_year"
                >
                    First Year
                </Link>
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/computer_science"
                >
                    Computer Science
                </Link>
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/electrical"
                >
                    Electrical
                </Link>
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/electronics"
                >
                    Electronics
                </Link>
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/mechanical"
                >
                    Mechanical
                </Link>
                <Link
                    className="notes-dashboard__branches-link"
                    to="/notes/civil"
                >
                    Civil
                </Link>
            </div>
        </div>
    </div>
);

export default NotesDashboard;
