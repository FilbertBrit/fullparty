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
    const today = new Date();
    // console.log(today, new Date(events[0]?.dateTime))
    // console.log(today < new Date(events[0]?.dateTime) )
    let filteredEvents = []

    useEffect( () => {
        dispatch( fetchEvents() );//filteredEvents = (Object.values(res)));
    }, [dispatch])

    //still need to take into account dates, old events vs current events
    if(filter === "Upcoming"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime)) && (event.userRsvp !== "null"));//=== "I'm Going" || event.userRsvp === 'Maybe');
    }else if(filter === "Hosting"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime)) && (event.authorId === sessionUser.id));
    }else if(filter === "Open Invite"){
        filteredEvents = events.filter(event => today < new Date(event.dateTime));
    }else if(filter === 'Attended'){
        filteredEvents = events.filter(event => (today > new Date(event.dateTime)) && (event.userRsvp !== "null"));
    }else if(filter === 'All Past Events'){
        filteredEvents = events.filter(event => (today > new Date(event.dateTime)) && ((event.authorId === sessionUser.id ) || (event.userRsvp !== 'null')));
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