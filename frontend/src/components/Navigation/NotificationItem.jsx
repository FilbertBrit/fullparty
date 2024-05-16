import './Navigation.css';
import './NotificationItem.css';


export function NotificationItem ({ notification }) {
    console.log(notification)
    const eventShowPage = '/events/' + notification.eventId;
    const userProfile = '/users/' + notification.senderId;

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
                    <p className='notication-item-date'> {notification.date} </p>
                </div>
            </div>
        </a>
        // <></>
    )
}