import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useParams } from 'react-router';
import './Navigation.css';
import logo from "../../images/logo.png"

function Navigation() {

    // let { route } = useParams()
    const currentURL = window.location.pathname
    console.log(currentURL);
    const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    
    switch (currentURL) {
      case "/login":
        console.log('in case 1')
        // break;
      case "/":
        // break;
    }

    //add : case
    sessionLinks = (
      <>
        <br/>
        <NavLink to="/login">Log In</NavLink>
        <br/>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <>
    <ul>
        <NavLink exact to="/" className="photo-logo-home-link">
          <img className='logo' src={logo}/>
        </NavLink>
        {/* <NavLink exact to="/">Home</NavLink> */}
        {sessionLinks}
    </ul>
    </>
  );

}

export default Navigation