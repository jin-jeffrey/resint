import React from "react";
import { authentication } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    let navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    return (
        <div>
            <button onClick={() => { navigate("/home"); }}>
                Sign in with google
            </button>
        </div>
    );
};

export default SignInWithGoogle;