import './App.css';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

export default function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <div className="App">
      
    </div>
  );
}

