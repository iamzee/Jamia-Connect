import { database } from './../firebase/configFirebase';

export const addConfession = confession => ({
    type: 'ADD_CONFESSION',
    confession
});

export const startAddConfession = confession => {
    return dispatch => {
        database
            .ref('confessions')
            .push(confession)
            .then(ref => {
                dispatch(
                    addConfession({
                        confessionId: ref.key,
                        ...confession
                    })
                );
            });
    };
};

export const setConfessions = confessions => ({
    type: 'SET_CONFESSIONS',
    confessions
});

export const startSetConfessions = () => {
    return dispatch => {
        database
            .ref('confessions')
            .once('value')
            .then(snapshot => {
                let confessions = [];
                snapshot.forEach(childSnapshot => {
                    confessions.push({
                        confessionId: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setConfessions(confessions));
            });
    };
};
