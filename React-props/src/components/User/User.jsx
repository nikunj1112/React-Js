import React from 'react';
import './User.css';

const User = ({ name, username, email, phone }) => {
  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone No: <span>{phone}</span></p>
    </div>
  );
};

export default User;