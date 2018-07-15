import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LoginPage from './../components/LoginPage';
import NotesDashboard from './../components/NotesDashboard';
import NotesList from './../components/NotesList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact={true} path="/" component={LoginPage} />
            <PrivateRoute path="/notes/:branch" component={NotesList} />
            <PrivateRoute path="/notes" component={NotesDashboard} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
