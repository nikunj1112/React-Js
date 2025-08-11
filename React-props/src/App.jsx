// import React from 'react';
// import User from './components/User/User';
// import users from './assets/UserData';
// import './App.css';

// function App() {
//   return (
// <>
//     <header className="app-header">
//     <h1>👤 ProfileDeck</h1>
//   </header>
//     <div className="user-container">
//       {users.map((user) => (
//         <User
//           name={user.name}
//           username={user.username}
//           email={user.email}
//           phone={user.phone}
//         />
//       ))}
//     </div>

// </>

// export default App;



import React from 'react';
import User from './components/User/User';
import users from './assets/UserData';
import './App.css';

function App() {
  return (
    <>

      <div className='main'>

        <header className="app-header">
          <h1>👤 ProfileDeck</h1>
        </header>

        <div className="user-container">
          {users.map((user, index) => (
            <User
              key={index}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default App;
