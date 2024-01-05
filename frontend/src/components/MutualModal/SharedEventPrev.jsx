import "./SharedEventPrev.css"
import wazzap from "../../images/wazzap-halloween.jpeg"

export const SharedEventPrev = ({ event }) => {
    const showPage = '/events/' + event.id;

    return (
        <a href={ showPage } id="event-item" >
            <img src={wazzap} id="event-img" alt="dummy-pic"/>
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">{event.dateTime}</h2>
            </div>
        </a>
    )
}