import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, getEvents } from "../../../store/events"
import { useEffect } from "react";
import { EventIndexItem } from "../EventIndexItem";
import "./EventIndex.css"
import { useState } from "react";


export const EventIndex = ({filter}) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];
    let filteredEvents = []

    useEffect( () => {
        dispatch( fetchEvents() );//filteredEvents = (Object.values(res)));
    }, [dispatch])

    if(filter === "Upcoming"){
        filteredEvents = events.filter(event => event.userRsvp === "I'm Going" || event.userRsvp === 'Maybe' );
    }else if(filter === "Hosting"){
        
    }else if(filter === "Open Invite"){
        filteredEvents = events;
    }

    
    return events ? (
        <div className="events">
            {
                filteredEvents.map( (event, i) => 
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