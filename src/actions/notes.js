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

export const setNotes = notes => ({
    type: 'SET_NOTES',
    notes
});

export const startSetNotes = ({ branch }) => {
    return dispatch => {
        console.log('branch', branch);
        return database
            .ref(`notes/${branch}`)
            .once('value')
            .then(snapshot => {
                let notes = [];
                snapshot.forEach(childSnapshot => {
                    notes.push({
                        noteId: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setNotes(notes));
            });
    };
};
