import React from "react";
import "./NavBar.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CodeModal from './CodeModal';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function NavBar() {
    const navigate = useNavigate();
    const [codeModalOpened, setCodeModalOpened] = React.useState(false);
    const [user, loading, error] = useAuthState(auth);

    function signUserOut() {
        signOut(auth)
        navigate("/");
    }

    return (
        <>
        <nav className="navbar1">
        <a href="/" className="logo1"></a>
        {
          user &&
          <ul className="main_nav">
          <li>
            <a><button onClick={() => setCodeModalOpened(true)} className="nav-logout">Get Code</button></a>
          </li>
          <li>
            <a><button className="nav-logout" onClick={signUserOut}>Log Out</button></a>
          </li>
        </ul>
        }
        </nav>
        <CodeModal open={codeModalOpened} onClose={() => setCodeModalOpened(false)}/>
        </>
    );
}

export default NavBar;