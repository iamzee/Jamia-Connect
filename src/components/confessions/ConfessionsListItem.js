import React from 'react';
import moment from 'moment';

const ConfessionsListItem = ({ confession }) => {
    console.log('confession', confession);
    console.log('confessionText', confession.confessionText);
    return (
        <div>
            <h2>{confession.confessionText}</h2>
            <p>{confession.isName && confession.displayName}</p>
            <p>{moment(confession.confessedAt).format('MMM Do')}</p>
        </div>
    );
};

export default ConfessionsListItem;
