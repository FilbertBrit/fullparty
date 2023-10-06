import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import SignupFormPage from './components/SignupFormPage';

function App() {
  // return (
  //   <h1>Hello from App</h1>
  // );
  return (
    <Switch>
      <Route path="/login">
        {/* <h1>Welcome to partiful</h1> */}
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage/>
      </Route>
    </Switch>
  );

}

export default App;
