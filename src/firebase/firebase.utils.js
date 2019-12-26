import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDS1m7G25QhViqWqtuAyWHpHZbaB4jq1uI",
    authDomain: "jrclothing-db.firebaseapp.com",
    databaseURL: "https://jrclothing-db.firebaseio.com",
    projectId: "jrclothing-db",
    storageBucket: "jrclothing-db.appspot.com",
    messagingSenderId: "7253896647",
    appId: "1:7253896647:web:9aa454635440ca95657de2",
    measurementId: "G-R5X3LBDLR0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
