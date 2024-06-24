import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Import UserProvider
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Jobs from './Jobs';
import JobDetails from './JobDetails';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Profile from './Profile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter> {/* Wrap entire app with BrowserRouter */}
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/:id" component={JobDetails} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/companies/:handle" component={CompanyDetails} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

