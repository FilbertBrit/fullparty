import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import logo from "../../images/logo.png"
import git from "../../images/git.png"
import home from "../../images/home.png"
import linkedin from "../../images/linkedin.png"
import notification from "../../images/notification.png"
import * as sessionActions from '../../store/session';
import { NotificationItem } from './NotificationItem';
// import { useHistory } from 'react-router';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const notificationsObj = useSelector(state => state.notifications);
  const notifications = notificationsObj ? Object.values(notificationsObj) : [];
  
  // const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const userId = sessionUser ? (sessionUser.id) : ('');
  const userProfile = '/users/' + userId;
  console.log(notifications,showNotifications)
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const openNotifications = () => {
    if (showNotifications) return;
    setShowNotifications(true);
  }
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    if (!showNotifications) return;

    const closeMenu = () => {
      setShowNotifications(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showNotifications]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  // console.log(sessionUser)

  if (sessionUser) {
    sessionLinks = (
      <div id='active-session-nav'>
        <a href="/create" id='create-btn-nav'>+ CREATE</a>
        <a href="/events">
          <img src={home} id="home-btn" alt='home-btn'/>
          {/* <p id="home-btn">HOME</p> */}
        </a>
        <img onClick={openNotifications} src={notification} id="notification-btn"  alt='notif-btn'/>
        <div className="profile-btn-container">
          <button onClick={openMenu} id='profile-btn'> { sessionUser.name.slice(0,1)}</button>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" id='down-arrow' fill='#cad3e2'>
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        
        </div>
      </div>
    );
  } else {
    const currentURL = window.location.pathname
    switch (currentURL) {
      case "/login":
        sessionLinks = ( <></> )
        break;
      case "/":
        sessionLinks = ( 
          <div id='splash-nav'>
            <a href="https://linkedin.com/in/brittiny-filbert" id='linkedin-nav' target='_blank' rel="noreferrer">
              <img src={linkedin} id="linkedin-img" alt='linkedin-img' />
            </a>
            <a href="https://github.com/FilbertBrit/fullparty.git" id='github-nav' target='_blank' rel="noreferrer">
              <img src={git} id="git-img" alt='git-img' />
            </a>
            {/* <a href="/" id='inspo-nav'>✨INSPO</a> */}
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
            <a href="/events" className="photo-logo-home-link">
              <img className='logo' src={logo} alt='logo-img'/>
            </a>
        ) : (
          <div>

            <NavLink exact to="/" className="photo-logo-home-link">
              <img className='logo' src={logo} alt='logo'/>
            </NavLink>

          </div>
        )}
        {sessionLinks}
    </ul>
    {showMenu && (
      <span className="dropdown-menu">
        <ul className="profile-dropdown">

          <div className="first-div">
            <NavLink exact to={ userProfile } className="session-user-name">
                <div className="user-profile-photo">
                      <div className="initials">
                        {sessionUser.name.slice(0,1)}
                      </div>
                </div>
                <div className="user-name-profile-section">
                  <li id='username-profile-btn'>{sessionUser.name}</li>
                  <div className="header-profile-btn">
                    See your profile
                  </div>
                </div>
            </NavLink>
            <div className="profile-create-btns">
              <a href="/create" id='profile-dropdown-create-btn'>+ CREATE</a>
            </div>
          </div>

          <div className="mutals-btn">
            <a href="/mutuals" id='mutuals-a-link'>
              <div className="mutual-emoji">
                👥
              </div>
              <div className="mutual-header">
                Mutals
              </div>
            </a>
          </div>

          <div className="logout-btn" onClick={logout}>
            <div className="logout-emogi-profile-btn" onClick={logout}>
              🧳
            </div>
            <div className="logout-profile-header" onClick={logout}>
              Log Out!
            </div>
          </div>
        </ul>
      </span>
    )}
    {showNotifications && (

    <span className="dropdown-notifications">
      <ul className="profile-dropdown">
        <div className='notification-header'>
          <p id='notification-title'>Notifications</p>
          <a href="" id='notification-page-link'>SEE ALL</a>
        </div>
            {notifications.map((notification, i) => 
              <NotificationItem notification={notification} key={i}/>
            )}
      </ul>
    </span>
    )}
    </>
  );

}

export default Navigation