import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, getEvents } from "../../../store/event"
import { useEffect } from "react";
import { EventIndexItem } from "../EventIndexItem";
import "./EventIndex.css"


export const EventIndex = () => {

    const dispatch = useDispatch();
    const events = useSelector(getEvents);
    // console.log(events);

    useEffect( () => {
        dispatch( fetchEvents() );
    }, [dispatch])

    
    return (
        <div className="events">
            {
                events.map( (event, i) => 
                    <EventIndexItem event={event}/>
                   )
            }

            <a href="/create" id="new-event-link">
                <div className="empty-event">
                    <h4 id="empty-event-title">+ New Event</h4>
                </div>
            </a>
            {/* <nav>
                    <button>Open Invite</button>
                    <button>Upcoming</button>
                    <button>Hosting</button>
                    <button>Attended</button>
                    <button>All Past Events</button>
                </nav>
            <div id="tabed-events">
                <h3>event 1</h3>
                <h3>event 2</h3>
                <h3>event 3</h3>
            </div> */}
        </div>
    )
}