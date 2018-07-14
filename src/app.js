import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { firebase } from './firebase/configFirebase';
import { store } from './store/configStore';
import { login, logout } from './actions/auth';

import Header from './components/Header';
import NotesDashboard from './components/NotesDashboard';
import NotesList from './components/NotesList';

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
    <BrowserRouter>
        <div>
            <Header />
            <Route path="/notes" component={NotesDashboard} />
            <Route path="/notes/:branch" component={NotesList} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
