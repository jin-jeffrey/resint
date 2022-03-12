import React from "react";
// import { authentication } from './firebase';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useNavigate, Navigate, useLocation } from "react-router-dom";

import { signInWithGoogle } from "./firebase";
const SignIn = () => {
    return (
        <>
            <h1>Sign In below!</h1>
            <button onClick={signInWithGoogle}> Sign In with Google </button>
        </>
    );
};

export default SignIn;