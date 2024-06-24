import React, { useState } from 'react';
import JoblyApi from './JoblyApi';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const token = await JoblyApi.login({ username, password });
      console.log(token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
