import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ConfessionsListItem = ({ confession }) => (
    <div className="item">
        <Link
            className="item__topic item__topic--confessions"
            to={`/confessions/${confession.confessionId}`}
        >
            {confession.confessionText}
        </Link>
        <div className="item__extras">
            {confession.isName && (
                <p>
                    <span className="item__extras--title">Confessed By: </span>
                    <span className="item__extras--value">
                        {confession.displayName}
                    </span>
                </p>
            )}

            <p>
                <span className="item__extras--title">Confessed On: </span>
                <span className="item__extras--value">
                    {moment(confession.confessedAt).format('MMM Do')}
                </span>
            </p>
        </div>
    </div>
);

export default ConfessionsListItem;
