import './App.css';
import React, { useState } from "react";
import { authentication } from './firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { redirect } from 'react-router-dom';

function App() {
  //user sign in state
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        // const user = re.user;
        //check if user is null and then redirect to the homepage
      })
      .catch((err) => {
        console.log(err);
        // const errorCode = err.code;
        // const errorMessage = err.message;
        // // The email of the user's account used.
        // const email = err.email;
      })
  }

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>
        Sign in with google
      </button>
    </div>
  );

}

export default App;
