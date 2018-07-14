import { database } from './../firebase/configFirebase';

export const addNote = note => ({
    type: 'ADD_NOTE',
    note
});

export const startAddNote = note => {
    return dispatch => {
        database
            .ref(`notes/${note.branch}`)
            .push(note)
            .then(ref => {
                dispatch(
                    addNote({
                        noteId: ref.key,
                        ...note
                    })
                );
            });
    };
};
