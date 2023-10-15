// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"

export const EventIndexItem = ({ event }) => {
    // const dispatch = useDispatch();
    // console.log('in event index item')
    return (
        <div id="event-item">
            <img src={wazzap} id="event-img" />
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">Hosted by {event.host}</h2>
            </div>
        </div>
        // <></>
    )
}