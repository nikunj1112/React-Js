import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchusers, getUser } from '../../slices/userslice';
import { useNavigate } from 'react-router-dom';
// import "./Homepage.css";

export default function HomeBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { users, currentuser } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchusers());
  }, [dispatch]);

  return (
    <div className="user-home-container">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <h2 className="user-title">User - {currentuser?.email}</h2>

      <ol className="user-list">
        {users
          .filter((user) => user.email !== currentuser?.email)
          .map((user, index) => (
            <li
              key={index}
              onClick={() => navigate("/chat", { state: user })}
              className="user-item"
            >
              <div className="user-info-box">
                <div className="user-avatar">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="user-info">{user.email}</div>
                  <div className="user-subtext">Tap to start chatting</div>
                </div>
              </div>
            </li>
          ))}
      </ol>


    </div>
  );
}