import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import history from './history';
import Applications from './components/Applications';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/apps" element={<Applications />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;