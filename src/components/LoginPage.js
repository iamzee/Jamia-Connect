import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

const LoginPage = props => (
    <div className="login-page">
        <div className="login-page__box">
            <h1 className="login-page__title">Jamians Rivet</h1>
            <p className="login-page__subtitle">
                Connecting minds along with the essence of heart
            </p>
            <button className="button button--login" onClick={startLogin}>
                Login with Google
            </button>
        </div>
    </div>
);

export default connect()(LoginPage);
