import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import history from './history';
import JobApps from './components/JobApps';
import Applications from './components/Applications';
import AboutTeam from "./components/AboutTeam";

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/resint" element={<JobApps />} />
          <Route exact path="/apps" element={<Applications />} />
          <Route exact path="/about" element={<AboutTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;