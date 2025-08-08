import React from 'react';
import User from './components/User/User';
import users from './assets/UserData';
import './App.css';

function App() {
  return (
    <div className="user-container">
      {users.map((user) => (
        <User
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>//
  );
}

export default App;
