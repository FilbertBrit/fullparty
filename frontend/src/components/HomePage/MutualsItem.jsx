import { useSelector } from "react-redux";
import { getEvents } from "../../store/events"
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/user";


export function MutualsItem ({ mutual }) {

    const dispatch = useDispatch();
    const eventsObj = useSelector(getEvents);
    const eventTitle = eventsObj ? eventsObj[mutual.recentEvent].title : ''
    const eventDate = new Date(eventsObj[mutual.recentEvent].dateTime)
    if(eventTitle.length > 15){
        eventTitle = eventTitle.slice(0,12) + '...'
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        dispatch(fetchUser(mutual.id))
    }

    return (
        <div id="mutual-prev-item" onClick={handleClick}>
            <div id="profile-container-mutual-prev">
                {/* <img src=""></img> */}
                <div className="user-profile-photo" id="user-profile-mutuals">
                      <div className="initials" id="initials">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div id="username-container-mutual-prev">
                    <h2>{mutual.name}</h2> 
                </div>
            </div>
            <div id="num-events-container">
                {mutual.sharedEvents === 1 ? <h2 id='shared-events-info'>🗓️ 1 shared event</h2> : <h2 id='shared-events-info'>🗓️ {mutual.sharedEvents} shared events</h2> }
            </div>
            <div id="last-shared-event">
                <h2>🕓 {eventTitle} • {eventDate.getMonth() + 1}/{eventDate.getUTCDate()}</h2>
            </div>
        </div>
    )
}