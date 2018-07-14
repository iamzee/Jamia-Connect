import { firebase, googleAuthProvider } from './../firebase/configFirebase';

export const login = ({ displayName, email, phoneNumber, uid }) => ({
    type: 'LOGIN',
    user: {
        displayName,
        email,
        phoneNumber,
        uid
    }
});

export const startLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    firebase.auth().signOut();
};
