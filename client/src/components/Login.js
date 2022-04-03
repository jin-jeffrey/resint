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
        <img src='../../public/images/icons8-tree-64.png' className="logo"></img>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Meet the team</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>RESINT!</h1> <h1>Your guide to <span class="text">landing</span> your <span class="text">dream career.</span></h1>
        <div>
          <button className="login__btn" onClick={signInWithGoogle}><span class="login_btn_span"></span> Login </button>
        </div>
      </div>
    </div>
  );
}

export default Login;