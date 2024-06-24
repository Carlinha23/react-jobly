import React, { createContext, useState, useContext } from 'react';

// Initialize a new context
export const UserContext = createContext();

// Custom hook to use the user context
export const useUserContext = () => useContext(UserContext);

// User provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
