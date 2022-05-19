import {useState, useEffect} from 'react';
import './App.css';
import SocialCard from './SocialCard';

function App() {
  const [users, setUsers] = useState([]);
  
useEffect(() => {
  (async () => {
  let userData;
  try {
    const response = await fetch ("https://randomuser.me/api/?results=9");
    // eslint-disable-next-line no-unused-vars
    const userData = (await response.json()).results;
  } catch (error) {
       console.log(error);
      userData = [];
  }

  setUsers(userData);
  })();
},[]);

  return (
    <div className="App">
     {users && users.map((user, index) => (
       <SocialCard userData={user} key={index} />
     ))}
    </div>
  );
}

export default App;
