import { useSelector } from "react-redux";
import { EventIndexItem } from "../EventIndexItem";
import "./EventIndex.css"

export const EventIndex = ({filter, setUpcoming, events}) => {

    const sessionUser = useSelector(state => state.session.user);
    const today = new Date();
    let filteredEvents = []

    if(filter === "Upcoming"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null ) && (event.userRsvp !== "null"));
        setUpcoming(filteredEvents.length)
    }else if(filter === "Hosting"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null) && (event.authorId === sessionUser.id));
    }else if(filter === "Open Invite"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime)) && (event.userRsvp === null));
    }else if(filter === 'Attended'){
        filteredEvents = events.filter(event => (event.userRsvp !== "Can't Go" && event.userRsvp !== null) && (today > new Date(event.dateTime)));
    }else if(filter === 'All Past Events'){
        filteredEvents = events.filter(event => ((event.dateTime !== null) && today > new Date(event.dateTime)) && ((event.authorId === sessionUser.id ) || (event.userRsvp !== null)));
    }
    
    return filteredEvents ? (
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