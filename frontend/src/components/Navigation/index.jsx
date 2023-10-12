import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import { useParams } from 'react-router';
import './Navigation.css';
import logo from "../../images/logo.png"
import git from "../../images/git.png"

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <div id='active-session-nav'>
        <button>Create</button>
        <button>Home</button>
        <button>Notifications</button>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    const currentURL = window.location.pathname
    // console.log(currentURL);
    switch (currentURL) {
      case "/login":
        // console.log('in case 1')
        sessionLinks = ( <></> )
        break;
      case "/":
        sessionLinks = ( 
          <div id='splash-nav'>
            <a href="https://github.com/FilbertBrit/fullparty.git" id='github-nav' target='_blank'>
              <img src={git} id="git-img" />
            </a>
            <a href="/" id='inspo-nav'>✨INSPO</a>
            <a href="/login" id='login-nav'>LOGIN</a>
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
          <div>

            <NavLink exact to="/" className="photo-logo-home-link">
              <img className='logo' src={logo}/>
            </NavLink>
            {/* <>{sessionLinks}</> */}
          </div>
        )}
        {sessionLinks}
    </ul>
    </>
  );

}

export default Navigation