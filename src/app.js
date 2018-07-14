import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('User Login');
        console.log('User', user);
    } else {
        console.log('User Logout');
    }
});

const login = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
};

const logout = () => {
    firebase.auth().signOut();
};

const App = () => (
    <div>
        <h1>Jamians Rivet</h1>
        <button onClick={login}>Login with Google</button>
        <button onClick={logout}>Logout</button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
