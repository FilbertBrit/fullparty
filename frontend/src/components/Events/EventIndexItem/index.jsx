// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import { useState } from "react";

export const EventIndexItem = ({ event }) => {
    const showPage = '/events/' + event.id;
    const [rsvpStatus, setRsvpStatus] = useState('')

    switch (event.userRsvp) {
        case "I'm Going":
            setRsvpStatus('')
            break;
        case "Maybe":

            break;
        case "Can't Go":

            break;
        default:
            break;
    }

    
    return (
        
        <a href={ showPage } id="event-item" >
            <img src={wazzap} id="event-img" alt="dummy-pic"/>
            <div id="user-rsvp-details">{}</div>
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">Hosted by {event.host}</h2>
            </div>
        </a>
    )
}