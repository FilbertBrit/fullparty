import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'; 
import SignupFormPage from './components/SignupFormPage';
import { useSelector } from "react-redux"
import { HomePage } from './components/HomePage';
import { SplashPage } from './components/SplashPage';
// import { EventFormPage } from './components/EventFormPage';
// import { EventFormPage } from './components/Events/EventFormPage';
import { EventShowPage } from './components/Events/EventShowPage';
import { EventEditForm } from './components/Events/EventEditForm';
import { EventInputForm } from './components/Events/EventInputForm';


function App() {

  // REFACTOR TO GET RID OF THIS USESELECTOR
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
    <Switch>
      
      {/* <Route path="/create" component={ EventFormPage } /> */}
      <Route path="/create" component={ EventInputForm } />
      <Route path="/events/:eventId/edit" component={ EventEditForm }/>
      <Route path="/events/:eventId" component={ EventShowPage }/>
      <Route path="/events">
      {sessionUser ? (
              <HomePage/>
            ) : (
              <Redirect to="/login"/>
            )}
      </Route>
      <Route path="/login" component={ LoginFormPage} />
      <Route path="/signup" component={ SignupFormPage } />
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
