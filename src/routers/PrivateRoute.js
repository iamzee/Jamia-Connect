import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from './../components/Header';
import Navigation from './../components/Navigation';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAuthenticated ? (
                <div className="container">
                    <Header />
                    <div className="content">
                        <Navigation />
                        <Component {...props} />
                    </div>
                </div>
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.user.uid
});

export default connect(mapStateToProps)(PrivateRoute);
