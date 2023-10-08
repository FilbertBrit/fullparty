import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useParams } from 'react-router';
import './Navigation.css';

function Navigation() {

    let { route } = useParams()
    console.log()
    const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {

    //add : case
    sessionLinks = (
      <>
        <br/>
        <NavLink to="/login">Log In</NavLink>
        <br/>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {sessionLinks}
      </li>
    </ul>
  );

}

export default Navigation