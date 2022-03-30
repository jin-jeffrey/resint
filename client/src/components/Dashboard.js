import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import history from '../history';
import "./Dashboard.css";
const status_img = "https://st.hzcdn.com/simgs/871106f40f9b11c7_4-8510/home-design.jpg";
const logo = "https://ichef.bbci.co.uk/news/976/cpsprodpb/169DC/production/_99863629_sticker.jpg";

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

      <div className="navbar">
        <img src={logo} className="logo"></img>
        <h1>Welcome back, {user?.displayName}!</h1>
        <img src={logo} className="profile"></img>
      </div>

      <div class="row">
        <div class="col">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="bottom-left">
            <h1>15</h1>
            <h2>Applied</h2>
          </div>
        </div>
        <div class="col">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="bottom-left">
            <h1>15</h1>
            <h2>Interviewed</h2>
          </div>
        </div>
        <div class="col">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="bottom-left">
            <h1>10</h1>
            <h2>Saved</h2>
          </div>
        </div>
        <div class="col">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="bottom-left">
            <h1>2</h1>
            <h2>Rejected</h2>
          </div>
        </div>
      </div>

      <div class="tabs">
        <div class="apptab">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="center-text">
            <h2>Applied</h2>
          </div>
        </div>
        <div class="apptab">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="center-text">
            <h2>Interviewed</h2>
          </div>
        </div>
        <div class="apptab">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="center-text">
            <h2>Saved</h2>
          </div>
        </div>
        <div class="apptab">
          <img src={status_img} onclick="myAudioFunction('music/Spirited-Away-(JKuch-Edit).mp3');"></img>
          <div class="center-text">
            <h2>Rejected</h2>
          </div>
        </div>
      </div>

      <div className="options">
        <form>
        <button className="dashboard__btn" id="button1" onClick={() => history.push('/resint')}>Job Applications</button>
        <button className="dashboard__btn" id="button2" onClick={logout}> Logout </button>
        </form>
      </div>

    </div>
  );
}

export default Dashboard;