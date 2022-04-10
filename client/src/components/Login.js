import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";



function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="navbar">
        <img src='' className="logo"></img>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Meet the team</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>RESINT!</h1> <h1>Your guide to <span className="text">landing</span> your <span className="text">dream internship.</span></h1>
        <br></br>
        <div>
          <button className="login__btn" onClick={signInWithGoogle}><span className="login_btn_span"></span> Get Started </button>
        </div>
      </div>
    </div>
  );
}

export default Login;