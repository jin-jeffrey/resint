import React from "react";
// import { auth } from './firebase';
// import { useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
const Home = () => {
    return (
        <div>
            <h1>  This is the home page for {localStorage.getItem("name")}</h1>
            <button onclick={signOut}>Sign Out</button>
        </div>
    );
};

export default Home;