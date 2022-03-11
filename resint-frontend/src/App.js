import './App.css';
import React, { useState } from "react";
import Home from './Home';
import ErrorPage from './Error';
import SignInWithGoogle from './signIn';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignInWithGoogle />} />
          <Route path="/home/:username" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );

}

export default App;
