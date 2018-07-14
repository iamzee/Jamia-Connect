import React from 'react';

const NotesList = props => (
    <div>
        <h3>{props.match.params.branch}</h3>
    </div>
);

export default NotesList;
