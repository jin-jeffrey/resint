import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Applications from "./components/Applications";
import history from './history';
import JobApps from './components/JobApps';
import MainHero from './components/MainHero';
import Product from "./components/Product";
import Features from "./components/Features";
import Header from "./components/Header";

function App() {

  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={[<Header />, <MainHero />, <Product />, <Features />]} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/resint" element={<JobApps />} />
          <Route exact path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


