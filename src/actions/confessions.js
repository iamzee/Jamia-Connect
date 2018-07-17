import { database } from './../firebase/configFirebase';

export const addConfession = (confession) => ({
	type: 'ADD_CONFESSION',
	confession
});

export const startAddConfession = (confession) => {
	return (dispatch) => {
		database.ref('confessions').push(confession).then((ref) => {
			dispatch(addConfession({
				confessionId: ref.key,
				...confession
			}));
		});
	};
}