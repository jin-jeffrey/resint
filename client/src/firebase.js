import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDOdH8ajmOmNGOk5yk6zvardr86wqAbkio",
    authDomain: "resint-51a90.firebaseapp.com",
    projectId: "resint-51a90",
    storageBucket: "resint-51a90.appspot.com",
    messagingSenderId: "1065381705811",
    appId: "1:1065381705811:web:e2d98fd17e96659b0eeea6",
    measurementId: "G-MPG955MP4H"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logout = () => {signOut(auth);};