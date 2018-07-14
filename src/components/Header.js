import React from 'react';
import { Link } from 'react-router-dom';

import { startLogin, startLogout } from './../actions/auth';

const Header = () => (
    <div>
        <h1>Jamians Rivet</h1>
        <button onClick={startLogin}>Login with Google</button>
        <button onClick={startLogout}>Logout</button>
        <hr />
        <Link to="/notes">Notes</Link>
    </div>
);

export default Header;
