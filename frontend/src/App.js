import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path="/login">
        {/* <h1>Welcome to partiful</h1> */}
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage/>
      </Route>
    </Switch>
    </>
  );

}

export default App;
