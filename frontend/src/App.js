import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'; 
import SignupFormPage from './components/SignupFormPage';
import { useSelector } from "react-redux"
import { HomePage } from './components/HomePage';
import { SplashPage } from './components/SplashPage';
import { EventShowPage } from './components/Events/EventShowPage';
import { EventInputForm } from './components/Events/EventInputForm';
import { UserProfile } from './components/UserProfile';
import { UserProfileEditForm } from './components/UserProfile/UserProfileEditForm';
import { Modal } from './components/Modal/modal';
import { Mutuals } from './components/Mutuals';

function App() {

  // REFACTOR TO GET RID OF THIS USESELECTOR
  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className='app'>
    {/* <div> */}
      <Modal/>
    {/* </div> */}
    <div>
      {!sessionUser ? <Redirect to="/login"/> : 
      <Switch>
        <Route path="/create" component={ EventInputForm } />
        <Route path="/events/:eventId/edit" component={ EventInputForm }/>
        <Route path="/events/:eventId">
        {sessionUser ? (
                <EventShowPage/>
              ) : (
                <Redirect to="/login"/>
              )}
        </Route>
        <Route path="/events">
        {sessionUser ? (
                <HomePage/>
              ) : (
                <Redirect to="/login"/>
              )}
        </Route>
        <Route path="/login" component={ LoginFormPage } />
        <Route path="/mutuals" component={ Mutuals }/>
        <Route path="/signup" component={ SignupFormPage } />
        <Route path="/users/:userId/edit" component={UserProfileEditForm}></Route>
        <Route path="/users/:userId">
        {sessionUser ? (
          <UserProfile/>
          ) : (
            <Redirect to="/events"/>
          )}
        </Route>
        <Route path="/">
        {sessionUser ? (
          <Redirect to="/events"/>
          ) : (
            <SplashPage/>
          )}
        </Route>
        
      </Switch>
      }
    </div>
    </div>
  );

}

export default App;
