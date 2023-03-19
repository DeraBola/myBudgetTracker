import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';

function Home() {
  const { initialValue, logout } = useContext(AuthContext);
const {username, usergoals, userincome} = initialValue
  return (
    <div>
      <h1>
        Welcome, {username}!
      {usergoals}
      {userincome}
      </h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Home;
 
