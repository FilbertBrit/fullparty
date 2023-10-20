// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"

export const EventIndexItem = ({ event }) => {
    const showPage = '/events/' + event.id;
    // console.log(event);
    const handleClick = (e) => {
        // console.log('clicked')
    }
    return (
        
        <a href={ showPage } id="event-item" onClick={handleClick}>
            <img src={wazzap} id="event-img" alt="dummy-pic"/>
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">Hosted by {event.host}</h2>
            </div>
        </a>
    )
}