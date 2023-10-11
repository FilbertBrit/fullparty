import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import { Redirect, Router } from 'react-router-dom/cjs/react-router-dom.min';
import SignupFormPage from './components/SignupFormPage';
import { useSelector } from "react-redux"
import { HomePage } from './components/HomePage';
import { SplashPage } from './components/SplashPage';


function App() {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
    <Switch>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/events">
      {sessionUser ? (
              <HomePage/>
            ) : (
              <Redirect to="/login"/>
            )}
      </Route>

      <Route path="/signup">
        <SignupFormPage/>
      </Route>

      <Route path="/">
      {sessionUser ? (
        <Redirect to="/events"/>
      ) : (
        <SplashPage/>
      )}
      </Route>
      
    </Switch>
    </>
  );

}

export default App;
