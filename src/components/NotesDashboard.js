import React from 'react';
import { Link } from 'react-router-dom';
import UploadNotesForm from './UploadNotesForm';

const NotesDashboard = () => (
    <div>
        <h2>Notes Dashboard</h2>
        <UploadNotesForm />
        <Link to="/notes/first_year">First Year</Link>
        <Link to="/notes/computer_science">Computer Science</Link>
        <Link to="/notes/electrical">Electrical</Link>
        <Link to="/notes/electronics">Electronics</Link>
        <Link to="/notes/mechanical">Mechanical</Link>
        <Link to="/notes/civil">Civil</Link>
    </div>
);

export default NotesDashboard;
