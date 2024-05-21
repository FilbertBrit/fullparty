import { useState } from 'react';
import './Navigation.css';
import './NotificationItem.css';


export function NotificationItem ({ notification }) {
    console.log(notification)
    const eventShowPage = '/events/' + notification.eventId;
    const userProfile = '/users/' + notification.senderId;
    const notificationDate = new Date(notification.date);
    let noticationDays;
    const [shorterThanMonth, setShorterThanMonth] = useState(false);
    const today = new Date();

    if((notificationDate.getDate() === today.getDate()) && (notificationDate.getMonth() === today.getMonth()) && (notificationDate.getFullYear() === today.getFullYear())){
        if(today.getHours() - notificationDate.getHours() === 0){
            noticationDays = (today.getMinutes() - notificationDate.getMinutes() > 1) ? ((today.getMinutes() - notificationDate.getMinutes()) + ' minutes ago') : ('about 1 minute ago')
        }else{
            noticationDays = (today.getHours() - notificationDate.getHours()) > 1 ? ('about ' + (today.getHours() - notificationDate.getHours()) + ' hours ago') : ( 'about 1 hour ago' )
        }
        setShorterThanMonth(true);
    }else if((notificationDate.getMonth() === today.getMonth()) && (notificationDate.getFullYear() === today.getFullYear())){
        noticationDays = (today.getDate() - notificationDate.getDate() > 1) ? ((today.getDate() - notificationDate.getDate()) + ' days ago') : ( '1 day ago' )  
    }else if(notificationDate.getFullYear() === today.getFullYear()){
        noticationDays = (today.getMonth() - notificationDate.getMonth() > 1) ? (today.getMonth() - notificationDate.getMonth()) + ' months ago' : '1 month ago';
    }else{
        noticationDays = (today.getFullYear() - notificationDate.getFullYear() > 1) ? (today.getFullYear() - notificationDate.getFullYear()) + ' years ago' : '1 year ago';
    }

    console.log(noticationDays)
    return(
        <a href={eventShowPage} className='notificationItem'>
            <div className='notificationItemContainer'>
                <div className='notification-prof-photo'>

                </div>
                <div className="user-profile-photo-form">
                            <div className="initials">
                            {notification.sender.slice(0,1)}
                            </div>
                    </div>
                <div className='notification-info'>
                    <div>
                        <a href={userProfile} className='notification-item-user-link'>{notification.sender} </a>
                         invited you to an event
                    </div>
                    <div className='notification-item-event-prev'>
                        event prev
                    </div>
                    <div className='notification-item-msg'>
                        <p> msg </p>
                    </div>
                    <p className='notication-item-date'> { shorterThanMonth ? 
                         noticationDays : 'about ' + noticationDays }
                         </p>
                </div>
            </div>
        </a>
        // <></>
    )
}