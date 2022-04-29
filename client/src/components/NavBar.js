import React from "react";
import "./NavBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();
    function signUserOut() {
        signOut(auth)
        navigate("/");
    }

    return (
        <nav className="navbar1">
        <a href="/" className="logo1"></a>
        <ul className="main_nav">
          <li>
            <a href="/getCode" className="">Get Code</a>
          </li>
          <li>
            <a><button className="nav-logout" onClick={signUserOut}>Log Out</button></a>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;