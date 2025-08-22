import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const Login = ({loginSuccess }) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password
      });
      //console.log(response.data);
      const loginToken = response.data.accessToken;
      loginSuccess(loginToken);
      setError('');
      Navigate('/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='row'>
          <label htmlFor='username'>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            id='username'
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className='row'>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            placeholder="Password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
