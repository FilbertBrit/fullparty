import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';

function App() {
  // return (
  //   <h1>Hello from App</h1>
  // );
  return (
    <Switch>
      <Route path="/login">
        <h1>Hello from App</h1>
        <LoginFormPage />
      </Route>
    </Switch>
  );

}

export default App;