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
    if (user) navigate("/resint");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="navbar">
        <img src="https://i.pinimg.com/1200x/e4/8f/14/e48f14e8010a1e668f741678f8c524c1.jpg" className="logo"></img>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Meet the team</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>RESINT!</h1> <h1>Your guide to landing your dream career.</h1>
        <div>
        <button className="login__btn" onClick={signInWithGoogle}><span></span> Login </button>
        </div>
      </div>
    </div>
  );
}

export default Login;