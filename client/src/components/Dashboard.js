import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import history from '../history';
import SideNavBar from "./SideNavBar";


import "./Dashboard.css";

const status_img = "https://st.hzcdn.com/simgs/871106f40f9b11c7_4-8510/home-design.jpg";
const logo = "";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/"); // "/" is the login page

  }, [user, loading]);

  return (
    <div className="dashboard">
      < SideNavBar />
      <div>
        <br></br>
        <br></br>
      </div>
      {/* <div className="navbar">
        <img src={logo} className="logo"></img>
      </div> */}

      <div className="row">
        <div className="col">
          <img src={status_img} onClick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div className="bottom-left">
            <h1>15</h1>
            <h2>Applied</h2>
          </div>
        </div>
        <div className="col">
          <img src={status_img} onClick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div className="bottom-left">
            <h1>15</h1>
            <h2>Interviewed</h2>
          </div>
        </div>
      </div>


      {/* <div className="options">
        <form>
          <button className="dashboard__btn" id="button3" onClick={Si}}> Profile </button>
          <button className="dashboard__btn" id="button1" onClick={() => history.push('/resint')}>Job Applications</button>
          <button className="dashboard__btn" id="button2" onClick={logout}> Logout </button>
        </form>
      </div> */}
    </div>
  );
}

export default Dashboard;