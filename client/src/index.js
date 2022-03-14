import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
import JobApps from './pages/JobApps';

ReactDOM.render(
  <React.StrictMode>
    <JobApps />
  </React.StrictMode>,
  document.getElementById('root')
);



// reportWebVitals();
