import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, getEvents } from "../../../store/events"
import { useEffect } from "react";
import { EventIndexItem } from "../EventIndexItem";
import "./EventIndex.css"


export const EventIndex = () => {

    const dispatch = useDispatch();
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];

    useEffect( () => {
        dispatch( fetchEvents() );
    }, [dispatch])

    
    return events ? (
        <div className="events">
            {
                events.map( (event, i) => 
                    <EventIndexItem event={event} key={i}/>
                   )
            }

            <a href="/create" id="new-event-link">
                <div className="empty-event">
                    <h4 id="empty-event-title">+ New Event</h4>
                </div>
            </a>
        </div>
    ) : null ;
}