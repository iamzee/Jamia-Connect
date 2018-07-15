import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';
import { firebase, database } from './firebase/configFirebase';
import { store } from './store/configStore';
import { login, logout } from './actions/auth';

import AppRouter from './routers/AppRouter';

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        database
            .ref('users')
            .once('value')
            .then(snapshot => {
                if (user.uid === snapshot.key) {
                } else {
                    database
                        .ref(`users/${user.uid}`)
                        .set({
                            displayName: user.displayName,
                            email: user.email,
                            phoneNumber: user.phoneNumber
                        })
                        .then(() => {
                            store.dispatch(login(user));
                        });
                }
            });
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
