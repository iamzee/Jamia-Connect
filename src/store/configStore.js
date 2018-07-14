import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './../reducers/auth';
import notesReducer from './../reducers/notes';

const store = createStore(
    combineReducers({
        user: authReducer,
        notes: notesReducer
    }),
    applyMiddleware(thunk)
);
store.subscribe(() => {
    console.log('Store', store.getState());
});

export { store };
