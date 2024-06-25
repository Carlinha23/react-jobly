import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <h1>Welcome back, {currentUser.firstName}!</h1>
      ) : (
        <h1>Welcome to Jobly! Please login or signup.</h1>
      )}
    </div>
  );
}

export default Home;
