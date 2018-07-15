import React from 'react';
import { Link } from 'react-router-dom';

import { startLogin, startLogout } from './../actions/auth';

const Header = () => (
    <div className="header">
        <h1 className="header__title">Jamians Rivet</h1>
        <button className="button button--login" onClick={startLogout}>
            Logout
        </button>
    </div>
);

export default Header;
