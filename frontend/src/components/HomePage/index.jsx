
import { useSelector } from "react-redux"
import Navigation from "../Navigation"
import "./HomePage.css"
import { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { MutualsItem } from "./MutualsItem";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../store/events";
import { getEvents } from "../../store/events";
import { EventIndexItem } from "../Events/EventIndexItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";

export function HomePage () {
    
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    const [filter, setFilter] = useState("Upcoming");
    const upcoming = useSelector(state => state.session.user.upcomingEvents)
    const today = new Date();
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    const [mutualSize, setMutualSize] = useState(8)
    let filteredEvents = []

    mutuals.sort( (a,b) => b.sharedEvents.length - a.sharedEvents.length  )
    
    if(filter === "Upcoming"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null ) && (event.userRsvp !== null || (event.authorId === sessionUser.id)));
    }else if(filter === "Hosting"){
        console.log('hi')
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null) && (event.authorId === sessionUser.id));
    }else if(filter === "Open Invite"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime)) && (event.userRsvp === null));
    }else if(filter === 'Attended'){
        filteredEvents = events.filter(event => (event.userRsvp !== "Can't Go" && event.userRsvp !== null) && (today > new Date(event.dateTime)));
    }else if(filter === 'All Past Events'){
        filteredEvents = events.filter(event => ((event.dateTime !== null) && today > new Date(event.dateTime)) && ((event.authorId === sessionUser.id ) || (event.userRsvp !== null)));
    }
    
    const handleClick = (e) => {
        setFilter(e.target.value)
    }
    function chbg(color){
        // console.log(color)
    //    let div = document.getElementById("new-event-link")
    //    div.style.backgroundColor = color;
    }

    useEffect( () => {
        dispatch( fetchEvents() );
    }, [dispatch])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight})
        };
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      useEffect(() => {
        windowSize.width <= 720 ? setMutualSize(6) : setMutualSize(8)
      }, [windowSize.width])

   return (
    upcoming ? 
        <div className="homepage-component">
            <Navigation/>
            <div className="dashboard">
                <section className="top-dashboard">
                <h1 id="welcome-header">Welcome back, {sessionUser.name}!</h1>
                <div className="upcoming-events-msg">
                    You have
                    <span id="upcoming-msg" onClick={() => setFilter('Upcoming')}>{upcoming }</span>
                    upcoming event.
                </div>
                <nav className="event-nav-bar">
                    <button className="event-filter-btn-open" style={{
                        background: 
                            filter === "Open Invite" ? "linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)),linear-gradient(90deg,rgba(217,149,211,.6) 7.51%,rgba(100,98,239,.6) 28.85%,rgba(109,238,255,.6) 57.53%,rgba(190,254,246,.6) 68.5%,rgba(118,246,185,.6) 82.82%,rgba(191,255,224,.6) 97.32%),hsla(0,0%,100%,.15)"
                             : "transparent",
                        }} onClick={handleClick} value="Open Invite">
                        💫 Open Invite
                    </button>
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Upcoming" ? "hsla(0,0%,100%,.15)" : "transparent",
                        }} onClick={handleClick} value="Upcoming">
                        Upcoming
                    </button>
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Hosting" ? "hsla(0,0%,100%,.15)" : "transparent",
                        }} onClick={handleClick} value="Hosting">
                        Hosting
                    </button>
                    {/* <button className="event-filter-btn">
                        Drafts
                    </button> */}
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Attended" ? "hsla(0,0%,100%,.15)" : "transparent",
                        }} onClick={handleClick} value="Attended">
                        Attended
                    </button>
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "All Past Events" ? "hsla(0,0%,100%,.15)" : "transparent",
                        }} onClick={handleClick} value="All Past Events">
                        All Past Events
                    </button>
                </nav>
                </section>
                
                <div className="event-items">
                    <div className="events">
                        {
                            filteredEvents.map( (event, i) => 
                                <EventIndexItem event={event} key={i}/>
                            )
                        }
                        <a href="/create" id="new-event-link">
                            <div className="empty-event" onMouseOver={chbg("rgba(255, 255, 255, 0.15)")} onMouseLeave={chbg("transparent")}>
                                <h4 id="empty-event-title">+ New Event</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="mutuals">
                    <div id="mutuals-header-home">
                        <h1 id="welcome-header">Mutuals</h1>
                        <a href="/mutuals" id="all-mutuals-link">SEE ALL</a>
                    </div>
                    <div id="mutuals-preview">
                        {
                            mutuals.slice(0,mutualSize).map ( (mutual, i) => 
                                <MutualsItem mutual={mutual} key={i}/>
                            )
                        }
                    </div>
                </div>
                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>
        : 
        null
   ) 
}

