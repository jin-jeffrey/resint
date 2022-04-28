import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar1">
            <p className="logo1"></p>
            <ul className="main_nav">
                <li>
                    <a href="/apps" className="nav_links">My Applications</a>
                </li>
                <li>
                    <a href="/getCode" className="nav_links">Get Code</a>
                </li>
                <li>
                    <a href="/" className="nav_links">Logout</a>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;