import { useSelector } from "react-redux";
import { getEvents } from "../../store/events"


export function MutualsItem ({ mutual }) {

    const eventsObj = useSelector(getEvents);
    const eventTitle = eventsObj[mutual.recentEvent].title
    const eventDate = new Date(eventsObj[mutual.recentEvent].dateTime)
    console.log(eventDate.getMonth() + 1)
    console.log(eventDate.getUTCDate())

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div id="mutual-prev-item" onClick={handleClick}>
            <div id="profile-container-mutual-prev">
                {/* <img src=""></img> */}
                <div className="user-profile-photo">
                      <div className="initials">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div id="username-container-mutual-prev">
                    <h2>{mutual.name}</h2>
                </div>
            </div>
            <div id="num-events-container">
                <h2>🗓️ {mutual.sharedEvents} shared events</h2>
            </div>
            <div id="last-shared-event">
                <h2>🕓 {eventTitle} • {eventDate.getMonth() + 1}/{eventDate.getUTCDate()}</h2>
            </div>
        </div>
    )
}