import { useState, useRef } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

//https://jsonplaceholder.typicode.com/users

const fetchApi = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return JSON.stringify(data, null, 2);
};

const CardComponent = ({ user }) => {
  return (
    <div className='card' key={user.id}>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
    </div>
  );
};

const App = () => {
  const [usersArray, setUsersArray] = useState([]);
  const inputRef = useRef()

  const clickHandler = async () => {
    const data = await fetchApi();


  };


  return (
    <div className='App'>
      <div className='header'>
        <input type='text' ref={inputRef}/>
        <button onClick={clickHandler}>fetch api</button>
      </div>
      <div className='card-div'>
        {usersArray.map((user) => (
          <CardComponent user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;