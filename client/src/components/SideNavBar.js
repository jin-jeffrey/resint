
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import history from '../history';
import "./SideNavBar.css";
import axios from 'axios';

function SideNavBar() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/"); // "/" is the login page

    }, [user, loading]);

    const isCurrentPath = (path) => {
        if (window.location.pathname !== path) {
            history.push(path);
        }
    }

    const getCode = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "uid": "MWWc007mSUXoAQGq8zH98CPFeR62"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://resint.herokuapp.com/getCode", requestOptions)
            .then(response => response.json())
            .then(result => {
                navigator.clipboard.writeText(result.key);
                alert("Copied to clipboard!");
            })
            .catch(error => console.log('error', error));
    }

    return (

        <body>
            <div className="sidenavbar">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="profile">
                            <img src="" alt="profile_picture"></img>
                            <h3>{user?.displayName}</h3>
                        </div>
                        <br></br>
                        <ul>
                            <li>
                                <a href="/dashboard" className="active">
                                    <span className="icon"><i className="fas fa-desktop"></i></span>
                                    <span onClick={isCurrentPath('/dashboard')} className="item">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/resint">
                                    <span className="icon"><i className="fas fa-user-friends"></i></span>
                                    <span onClick={() => history.push('/resint')} className="item">Applications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                                    <span onClick={getCode} className="item">Get code!</span>

                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon"><i className="fas fa-database"></i></span>
                                    <span onClick={logout} className="item">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>



            </div >

        </body>


    );
}

export default SideNavBar;