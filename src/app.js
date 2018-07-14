import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { createStore } from 'redux';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const store = createStore((state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
});
store.subscribe(() => {
    console.log('Store', store.getState());
});

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

const login = ({ displayName, email, phoneNumber, uid }) => ({
    type: 'LOGIN',
    user: {
        displayName,
        email,
        phoneNumber,
        uid
    }
});

const startLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
};

const logout = () => ({
    type: 'LOGOUT'
});

const startLogout = () => {
    firebase.auth().signOut();
};

const App = () => (
    <div>
        <h1>Jamians Rivet</h1>
        <button onClick={startLogin}>Login with Google</button>
        <button onClick={startLogout}>Logout</button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
