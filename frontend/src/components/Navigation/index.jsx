import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useParams } from 'react-router';
import './Navigation.css';
import logo from "../../images/logo.png"
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation() {
  // let { route } = useParams()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <div id='active-session-nav'>
        {/* <NavLink>Create</NavLink>
        <NavLink>Home</NavLink> */}
        <button>Create</button>
        <button>Home</button>
        <button>Notifications</button>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    const currentURL = window.location.pathname
    console.log(currentURL);
    switch (currentURL) {
      case "/login":
        console.log('in case 1')
        sessionLinks = ( <></> )
        break;
      case "/":
        sessionLinks = ( 
          <div id='splash-nav'>
            <button>inspo</button>
            <NavLink exact to="/login" className="splash-login-button">
              Login
            </NavLink>
          </div>
         )
        break;
    }
    
  }

  return (
    <>
    <ul id='nav-links'>
        {sessionUser ? (
          <NavLink exact to="/events" className="photo-logo-home-link">
            <img className='logo' src={logo}/>
          </NavLink>
        ) : (
          <NavLink exact to="/" className="photo-logo-home-link">
            <img className='logo' src={logo}/>
          </NavLink>
        )}
        {sessionLinks}
    </ul>
    </>
  );

}

export default Navigation