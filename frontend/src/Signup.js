import React, { useState } from 'react';
import JoblyApi from './JoblyApi';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setError(null); // Clear previous errors

    // Basic validation to ensure all fields are filled
    for (let key in formData) {
      if (formData[key] === '') {
        setError(`The ${key} field is required.`);
        return;
      }
    }

    try {
      const token = await JoblyApi.register(formData);
      console.log(token);
    } catch (err) {
      setError(err);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button>Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Signup;
