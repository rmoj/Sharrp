import React from 'react';
import SignInForm from './SignInForm';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

const SignIn = () => (
  <div className="App">
    <div className="App-header">
      <img className="App-logo" src="./public/SHARPR.png" alt="SHARPR LOGO" />
    </div>

    <div className="AppUi">
      <div className="App__Aside" />
      <div className="App__Form">
        <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="FormTitle">
          <NavLink
            to="/sign-in"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            Sign In
          </NavLink>{' '}
          or{' '}
          <NavLink
            exact
            to="/"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            Sign Up
          </NavLink>
        </div>

        <SignInForm />
      </div>
    </div>
  </div>
);

export default SignIn;
