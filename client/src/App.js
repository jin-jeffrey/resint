import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import history from './history';
import Applications from './components/Applications';
import AboutTeam from "./components/AboutTeam";
import ControlledCarousel from "./components/Onboarding";

function App() {

  useEffect(() => {
    document.title = "RESINT"; 
  }, []);

  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/apps" element={<Applications />} />
          <Route exact path="/about" element={<AboutTeam />} />
          <Route exact path="/onboard" element={<ControlledCarousel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;