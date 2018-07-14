export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat(action.note);
        case 'SET_NOTES':
            return action.notes;
        default:
            return state;
    }
};
