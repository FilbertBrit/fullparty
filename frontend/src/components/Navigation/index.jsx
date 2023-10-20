import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../images/logo.png"
import git from "../../images/git.png"
import home from "../../images/home.png"
import notification from "../../images/notification.png"
import * as sessionActions from '../../store/session';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const userInitial = sessionUser.name.slice(0,1)
  console.log(userInitial);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    console.log('logout')
    dispatch(sessionActions.logout());
  };

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
        {/* <ProfileButton user={sessionUser} id="profile-btn-nav" /> */}
        <button onClick={openMenu}> Profile
        <i className="fa-solid fa-user-circle" />
      </button>
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
    {showMenu && (
      <span className="dropdown-menu">
        <ul className="profile-dropdown">

          <div className="first-div">
            <div className="session-user-name">
              <div className="user-profile-photo">
                    <div className="initials">
                      {userInitial}
                    </div>
              </div>
              <div className="user-name-profile-section">
                <li id='username-profile-btn'>{sessionUser.name}</li>
                <div className="header-profile-btn">
                  See your profile
                </div>
              </div>
            </div>
            <div className="profile-create-btns">
              {/* <a href="/">profile-link</a> */}
              <a href="/create" id='profile-dropdown-create-btn'>+ CREATE</a>
            </div>
          </div>

          <div className="mutals-btn">
            <a href="/mutual" id='mutuals-a-link'>
              <div className="mutual-emoji">
                👥
              </div>
              <div className="mutual-header">
                Mutals
              </div>
            </a>
          </div>

          <div className="logout-btn" onClick={logout}>
            <div className="logout-emogi-profile-btn">
              🧳
            </div>
            <div className="logout-profile-header">
              Log Out
            </div>
          </div>
        </ul>
      </span>
    )}
    </>
  );

}

export default Navigation