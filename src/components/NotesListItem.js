import React from 'react';
import moment from 'moment';

const NotesListItem = ({ note }) => (
    <div>
        <a href={note.downloadURL}>{note.topic}</a>
        <p>{note.teacher}</p>
        <p>
            Uploaded By: {note.displayName} at
            {moment(note.uploadedAt).format('MMM Do, YYYY h:mm a')}
        </p>
    </div>
);

export default NotesListItem;
