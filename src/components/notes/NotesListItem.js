import React from 'react';
import moment from 'moment';

const NotesListItem = ({ note }) => (
    <div className="item">
        <a
            className="item__topic item__topic--notes"
            href={note.downloadURL}
            target="_blank"
        >
            {note.topic}
        </a>
        <div className="item__extras">
            <p>
                <span className="item__extras--title">Teacher: </span>
                <span className="item__extras--value">{note.teacher}</span>
            </p>
            <p>
                <span className="item__extras--title">Uploaded By: </span>
                <span className="item__extras--value">{note.displayName}</span>
            </p>
            <p>
                <span className="item__extras--title">Uploaded On: </span>
                <span className="item__extras--value">
                    {moment(note.uploadedAt).format('MMM Do, YYYY')}
                </span>
            </p>
        </div>
    </div>
);

export default NotesListItem;
