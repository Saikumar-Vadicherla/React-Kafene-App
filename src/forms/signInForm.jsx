import React, { useState } from 'react';
import './signInForm.css';
import { useNavigate } from 'react-router-dom';

export const SignInForm = (props) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogIn = () => {
    if (credentials.password === credentials.username) {
      alert('Logged in successfully!');
      props.setIsLoggedIn(true);
      navigate('/Orders');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  return (
    <div className="signInForm">
      <div className="form">
        <div>
          <h1>Sign In</h1>
        </div>
        <div className="userNamePassword">
          <input
            type="text"
            id="user-name"
            className="userName"
            placeholder="Enter Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            className="password"
            placeholder="Enter Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="button" className="signInButton" onClick={handleLogIn}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
