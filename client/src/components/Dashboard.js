import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import history from '../history';
import "./Dashboard.css";

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
      <div className="dashboard__container">
        {/* <div>{name}</div> */}
        {/* <div>{user?.email}</div> */}
        <h2>Hello, {user?.displayName}</h2>
        <form>
          <button className="dashboard__btn" id="button1" onClick={() => history.push('/resint')}>Job Applications</button>
          <button className="dashboard__btn" id="button2" onClick={logout}> Logout </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;