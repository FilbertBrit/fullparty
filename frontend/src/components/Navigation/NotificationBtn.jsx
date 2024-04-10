import React, { useState, useEffect } from "react";
import notification from "../../images/notification.png"
import { NotificationItem } from "./NotificationItem";

function NotificationBtn({ notifications }) {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const openNotifications = () => {
    if (showNotifications) return;
    setShowNotifications(true);
  };
  
  useEffect(() => {
    if (!showNotifications) return;

    const closeNotifications = () => {
      setShowNotifications(false);
    };

    document.addEventListener('click', closeNotifications);
  
    return () => document.removeEventListener("click", closeNotifications);
  }, [showNotifications]);


  return (
    <>
      <button onClick={openNotifications} id="notification-component"> 
        <img onClick={openNotifications} src={notification} id="notification-btn"  alt='notif-btn'/>
      </button>
      {showNotifications && (
        notifications.map((notification, i) => {
            <NotificationItem notification={notification} key={i}/>
        })
        
      )}
    </>
  );
}

export default NotificationBtn;
