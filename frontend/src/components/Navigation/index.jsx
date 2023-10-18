import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import { useParams } from 'react-router';
import './Navigation.css';
import logo from "../../images/logo.png"
import git from "../../images/git.png"
import home from "../../images/home.png"
import notification from "../../images/notification.png"
// import { useParams } from 'react-router';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  // const path = useParams()
  // console.log('path:', path)
  const handleClick = (e) => {
    e.preventDefault();
  }

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <div id='active-session-nav'>
        <a href="/create" id='create-btn-nav'>+ CREATE</a>
        <a href="/events">
          <img src={home} id="home-btn" alt='home-btn'/>
        </a>
        <img src={notification} id="notification-btn" onClick={handleClick} alt='notif-btn'/>
        <ProfileButton user={sessionUser} id="profile-btn-nav" />
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
            <a href="https://github.com/FilbertBrit/fullparty.git" id='github-nav' target='_blank' rel="noreferrer">
              <img src={git} id="git-img" alt='git-img' />
            </a>
            <a href="/" id='inspo-nav'>✨INSPO</a>
            <a href="/login" id='login-nav'>LOGIN</a>
          </div>
         )
        break;
      default:
        break;
    }
    
  }

  return (
    <>
    <ul id='nav-links'>
        {sessionUser ? (
          <NavLink exact to="/events" className="photo-logo-home-link">
            <img className='logo' src={logo} alt='logo-img'/>
          </NavLink>
        ) : (
          <div>

            <NavLink exact to="/" className="photo-logo-home-link">
              <img className='logo' src={logo} alt='logo'/>
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