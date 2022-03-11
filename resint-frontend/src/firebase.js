import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

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
export const authentication = getAuth(app);


