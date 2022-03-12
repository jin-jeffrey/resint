import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import React, { useState } from "react";
import { signInWithGoogle } from "./firebase";
import Home from './Home';
import ErrorPage from './Error';
import SignIn from './signIn';
import SignOut from "./signOut";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" caseSensitive={false} element={<SignIn />}></Route>
          <Route path="/signout" caseSensitive={false} element={<SignOut />}></Route>
          <Route path="/" caseSensitive={false} element={<Home />}></Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;



{/* <Router>
        <Routes>
          <Route path="/signin" caseSensitive={false} element={<SignIn />}></Route>
          <Route path="/signout" caseSensitive={false} element={<SignOut />}></Route>
          <Route index element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router> */}