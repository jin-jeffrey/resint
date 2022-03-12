import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div className="app">
      {user ? <Home user={user} />: <Login/>}
    </div>
  //   <Router>
  //   <Routes>
  //     <Route exact path="/" element={<Login />} />
  //     <Route exact path="/home" element={<Home />} />
  //   </Routes>
  // </Router>
  );
}

export default App;