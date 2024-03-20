

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data.toLowerCase() === 'success') {
          navigate('/Employeehome');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div>
                <label>Username</label>
                <input
                  type="email"
                  value={username}
                  name="username"
                  placeholder='abcd@gmail.com'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit'>Login</button>
              <p>Don't have an account? <a href="/Signup">Sign-up</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

