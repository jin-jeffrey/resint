import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {

  const [users, setUsers] = useState([])
  const [display, setDisplay] = useState(false);
  const [usersToDisplay, setUsersToDisplay] = useState([])

   const getUsers = async (db) => {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
  }

  useEffect(() => {
    if (display) {
      getUsers(db).then(res => setUsers(res))
      const usersList = users.map((user) => 
        <li key={user.name}>
          {user.name}
        </li>
      )
      setUsersToDisplay(usersList);
    }
  }, [display])

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay(!display)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button type="submit">See Users</button>
      </form>
      {display?<ul>{usersToDisplay}</ul> :null}
    </div>
  );
}

