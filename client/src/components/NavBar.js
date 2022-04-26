import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import "./NavBar.css";

function NavBar() {
    return (
        <nav class="navbar1">
            <p className="logo1"></p>
            <ul class="main_nav">
                <li>
                    <a href="/resint" class="nav_links">Home</a>
                </li>
                <li>
                    <a href="/apps" class="nav_links">My Applications</a>
                </li>
                <li>
                    <a href="/getCode" class="nav_links">Get Code</a>
                </li>
                <li>
                    <a href="/" class="nav_links">Logout</a>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;