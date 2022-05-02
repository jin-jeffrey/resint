import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../images/resint-logo.png";
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
  }, [user, loading]);

  return (
    <>
      <div className="login">
      <div className="navbar">
        <div className="logo"><img src={logo}/></div>
        <ul>
          <li><a href="/about">Meet the team</a></li>
          <li><a href="/onboard">How to use Resint</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>RESINT! <br></br>The guide to <span className="text">landing</span> your <span className="text">dream career.</span></h1>
        <h3>Tracking applications made easy.</h3>
        <br></br>
        { !user && 
        <div>
          <button className="login__btn" onClick={signInWithGoogle}><span className="login_btn_span"></span>Sign In</button>
        </div>
        }
        {
          user &&
          <div>
            <button className="login__btn" onClick={() => navigate("/apps")}><span className="login_btn_span"></span>View Applications</button>
          </div>
        }
      </div>
      </div>
    </>

  );
}

export default Login;