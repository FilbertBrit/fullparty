import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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
    // console.log('logout')
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}> Profile
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <span className="dropdown-menu">
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <div className="profile-create-btns">
              <a href="/">profile-link</a>
              <a href="/create">+ CREATE</a>
            </div>
            <div className="mutals-btn">
              <a href="/mutual">Mutals</a>
            </div>
            <div className="logout-btn">
              <button onClick={logout}>Log Out</button>
            </div>
          </ul>
        </span>
      )}
    </>
  );
}

export default ProfileButton;
