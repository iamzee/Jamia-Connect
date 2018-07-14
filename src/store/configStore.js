import { createStore } from 'redux';

import authReducer from './../reducers/auth';

const store = createStore(authReducer);
store.subscribe(() => {
    console.log('Store', store.getState());
});

export { store };
