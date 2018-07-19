import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LoginPage from './../components/LoginPage';
import NotesDashboard from './../components/notes/NotesDashboard';
import NotesList from './../components/notes/NotesList';
import ConfessionsDashboard from './../components/confessions/ConfessionsDashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Amazon from './../components/Amazon';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact={true} path="/" component={LoginPage} />
            <PrivateRoute path="/notes/:branch" component={NotesList} />
            <PrivateRoute path="/notes" component={NotesDashboard} />
            <PrivateRoute
                path="/confessions"
                component={ConfessionsDashboard}
            />
            <PrivateRoute path="/amazon" component={Amazon} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;

/*


*/
