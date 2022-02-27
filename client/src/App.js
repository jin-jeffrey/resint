import './App.css';
import {app, db, firebaseConfig} from './firebaseConfig';
import firebase from 'firebase'; 

export default function App() {
  const firebaseapp = firebase.apps[0];
  return (
    <div className="App">
      <code>
        <pre>
          {JSON.stringify(firebaseapp.options, null, 2)}
        </pre>
      </code>
    </div>
  );
}

