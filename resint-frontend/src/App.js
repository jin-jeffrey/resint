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
import history from './history';
import Dashboard from "./components/Dashboard";
import Applications from "./components/Applications";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" caseSensitive={false} element={<SignIn />}></Route>
          <Route path="/signout" caseSensitive={false} element={<SignOut />}></Route>
          <Route path="/home" caseSensitive={false} element={<Home />}></Route>
          <Route path="/*" element={<ErrorPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </>

  )
}
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Applications from "./components/Applications";
// import history from './history';

// function App() {
//   return (
//     <div className="app">
//       <Router history={history}>
//         <Routes>
//           <Route exact path="/" element={<Login />} />
//           <Route exact path="/dashboard" element={<Dashboard />} />
//           <Route exact path="/applications" element={<Applications />} />
//         </Routes>
//       </Router>
//     </div>
//   );

// }

export default App;
