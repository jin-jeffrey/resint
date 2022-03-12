import { auth } from '../firebase'
import React, { useEffect } from "react";
import '../App.css';
import "./Home.css";

const Home = ({ user }) => {

  return (
    <div className="home">
      <div className="home__container">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button__signout" onClick={() => auth.signOut()}>Sign out</button>
      </div>
    </div>
  )
}

export default Home;