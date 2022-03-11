import React from "react";
import { authentication } from './firebase';
import { useParams } from "react-router-dom";

const Home = () => {
    let { username } = useParams();
    const signOut = () => {
        authentication.signOut();
    }
    return (
        <div>
            This is the home page for {username}!
            <button onclick={signOut}>Sign Out</button>
        </div>
    );
};

export default Home;