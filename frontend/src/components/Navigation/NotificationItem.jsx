import './Navigation.css';

export function NotificationItem ({ notification }) {
    console.log(notification)

    return(
        <div id="temp">
            {notification.event}
        </div>
    )
}