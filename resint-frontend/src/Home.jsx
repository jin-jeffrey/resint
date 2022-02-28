import React from 'react';
import {
    firebase
} from './firebase/firebase';
const Home = () => {
    const signOut = () => {
        firebase.auth().signOut();
    }
    return (
        <>
            <h1>Home</h1>
            <p>Click the button below to signout</p>
            <button onclick={signOut}>Sign Out</button>
        </>
    )
}

export default Home