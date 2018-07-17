export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_CONFESSION':
			return state.concat(action.confession);
		default:
			return state;
	}
}