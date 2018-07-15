import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

const LoginPage = props => (
    <div>
        <button onClick={startLogin}>Login with Google</button>
    </div>
);

export default connect()(LoginPage);
