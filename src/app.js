import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { firebase } from './firebase/configFirebase';
import { store } from './store/configStore';
import { login, logout } from './actions/auth';

import AppRouter from './routers/AppRouter';

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('User Login');
        console.log('User', user);
        store.dispatch(login(user));
    } else {
        console.log('User Logout');
        store.dispatch(logout());
    }
});

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);
