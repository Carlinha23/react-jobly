import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import JoblyApi from './JoblyApi';


export const UserContext = createContext(); // Exporting UserContext as named export

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    async function fetchUser() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          const user = await JoblyApi.getUserProfile(username);
          setCurrentUser(user);
        } catch (err) {
          console.error("Failed to fetch user", err);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    }

    fetchUser();
  }, [token]);

  const login = async (data) => {
    try {
      const token = await JoblyApi.login(data);
      JoblyApi.token = token;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const signup = async (data) => {
    try {
      const token = await JoblyApi.register(data);
      JoblyApi.token = token;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  const logout = () => {
    setToken(null);
    setCurrentUser(null);
    JoblyApi.token = null;
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
}
