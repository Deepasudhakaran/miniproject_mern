import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/register', { fname, lname, username, password })
      .then(result => {
        console.log(result);
        
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="register-page">
        <div className="form">
          <div className="register">
            <div className="register-header">
              <h1>Sign up</h1><br />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  value={fname}
                  name="fname"
                  placeholder="Enter First Name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lname}
                  name="lname"
                  placeholder="Enter Last Name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="email"
                  value={username}
                  name="username"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit'>Sign up</button>
              <p>Do you have an account? <a href="/">Sign in</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
