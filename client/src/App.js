import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Applications from "./components/Applications";
import history from './history';
import JobApps from './components/JobApps'

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={ <Dashboard />} />
          <Route exact path="/resint" element={<JobApps />} />
          <Route exact path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;