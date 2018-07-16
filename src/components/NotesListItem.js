import React from 'react';
import moment from 'moment';

const NotesListItem = ({ note }) => (
    <div className="note-item">
        <a className="note-item__topic" href={note.downloadURL} target="_blank">
            {note.topic}
        </a>
        <div className="note-item__extras">
            <p>
                <span className="note-item__extras--title">Teacher: </span>
                <span className="note-item__extras--value">{note.teacher}</span>
            </p>
            <p>
                <span className="note-item__extras--title">Uploaded By: </span>
                <span className="note-item__extras--value">
                    {note.displayName}
                </span>
            </p>
            <p>
                <span className="note-item__extras--title">Uploaded On: </span>
                <span className="note-item__extras--value">
                    {moment(note.uploadedAt).format('MMM Do, YYYY')}
                </span>
            </p>
        </div>
    </div>
);

export default NotesListItem;
