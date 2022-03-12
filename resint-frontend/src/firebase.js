import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDOdH8ajmOmNGOk5yk6zvardr86wqAbkio",
    authDomain: "resint-51a90.firebaseapp.com",
    projectId: "resint-51a90",
    storageBucket: "resint-51a90.appspot.com",
    messagingSenderId: "1065381705811",
    appId: "1:1065381705811:web:e2d98fd17e96659b0eeea6",
    measurementId: "G-MPG955MP4H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            if (email !== null) {
                return <Navigate to="/" />

            }
        })

        .catch((error) => {
            console.log(error);
        });
};



