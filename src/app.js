import React from 'react';
import ReactDOM from 'react-dom';

import { firebase } from './firebase/configFirebase';
import { store } from './store/configStore';
import { login, startLogin, logout, startLogout } from './actions/auth';

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

const App = () => (
    <div>
        <h1>Jamians Rivet</h1>
        <button onClick={startLogin}>Login with Google</button>
        <button onClick={startLogout}>Logout</button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
