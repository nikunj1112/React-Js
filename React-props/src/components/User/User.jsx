import React from 'react';
import './User.css';

const User = ({ name, username, email, phone }) => {

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phone)
      .then(() => {
        alert('📋 Phone number copied!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };


  return (<>
    <div className="user-card">
      <h1> <span>Name: </span>{name}</h1>
      <p><span>Username:  </span>{username}</p>
      <p><span>Email:  </span>{email}</p>
      <p><span>Phone No: </span>
        <small onClick={copyPhoneNumber}>{phone}</small> </p>
    </div>
  </>
  );
};

export default User;