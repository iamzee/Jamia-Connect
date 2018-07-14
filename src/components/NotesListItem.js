import React from 'react';

const NotesListItem = ({ note }) => (
    <div>
        <a href={note.downloadURL}>{note.topic}</a>
        <p>{note.teacher}</p>
        <p>Uploaded By: {note.displayName}</p>
    </div>
);

export default NotesListItem;
