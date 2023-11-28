import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, getEvents } from "../../../store/events"
import { useEffect } from "react";
import { EventIndexItem } from "../EventIndexItem";
import "./EventIndex.css"
import { useState } from "react";


export const EventIndex = ({filter}) => {

    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];
    const [filteredEvents, setFilteredEvents] = useState()
    // console.log(filter)
    // console.log(events)

    useEffect( () => {
        dispatch( fetchEvents() ).then( (res) => setFilteredEvents(Object.values(res)));
        // console.log("filered:",filteredEvents)
    }, [dispatch])

    if(filter === "Upcoming"){
        // setFilteredEvents(events.filter(event =>  ))

        // console.log(events);
    }else if(filter === "Hosting"){
        
    }else if(filter === "Open Invite"){

    }

    
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