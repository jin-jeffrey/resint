import React from "react";
import { auth } from "./firebase";
const SignOut = () => {
    auth.signOut();
    return (
        <div>
            <h2> Sign Out below!</h2>
            {/* add on click */}
            <button> Sign Out</button>
        </div>
    );
};

export default SignOut;