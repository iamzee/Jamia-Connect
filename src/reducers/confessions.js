export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONFESSION':
            return state.concat(action.confession);
        case 'SET_CONFESSIONS':
            return action.confessions;
        default:
            return state;
    }
};
