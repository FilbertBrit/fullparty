
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

export function HomePage () {
    
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    const invitesObj = useSelector(state => state.invites)
    const eventsInvited = []
    const [filter, setFilter] = useState("Upcoming");
    const upcoming = useSelector(state => state.session.user.upcomingEvents)
    const today = new Date();
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    const [mutualSize, setMutualSize] = useState(8)
    const [usersState, setUsersState] = useState()

    let filteredEvents = []

    // for(invite of invitesObj){
    //     eventsInvited.push(invite.eventId)
    // }

    mutuals.sort( (a,b) => b.sharedEvents.length - a.sharedEvents.length  )
    
    if(filter === "Upcoming"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null ) && (event.userRsvp !== null || (event.authorId === sessionUser.id) || (Object.values(invitesObj).map(obj => obj.eventId).includes(event.id))));
    }else if(filter === "Hosting"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime) || event.dateTime === null) && (event.authorId === sessionUser.id));
    }else if(filter === "Open Invite"){
        filteredEvents = events.filter(event => (today < new Date(event.dateTime)) && (event.userRsvp === null) && (event.openInvite));
    }else if(filter === 'Attended'){
        filteredEvents = events.filter(event => (event.userRsvp === "I'm Going") && (today > new Date(event.dateTime) && event.dateTime !== null));
    }else if(filter === 'All Past Events'){
        filteredEvents = events.filter(event => ((event.dateTime !== null) && today > new Date(event.dateTime)) && ((event.authorId === sessionUser.id ) || (event.userRsvp !== null)));
    }
    
    const handleClick = (e) => {
        setFilter(e.target.value)
    }
    function chbg(color){
        
    //    console.log(color)
    //    let div = document.getElementById("new-event-link")
    //    div.style.backgroundColor = color;

    }

    useEffect( () => {
        dispatch( fetchEvents() ).then( res => {
            const users = res.users
            for(let key in users){
                const user = {id: users[key].id, name: users[key].name, recentEvent: (res.events[users[key].recentEvent]).title}
                users[key]= user;
            }
            setUsersState(users)
        });
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
        windowSize.width <= 720 ? setMutualSize(6) : setMutualSize(8);
    }, [windowSize.width])

   return (
    upcoming ? 
        <div className="homepage-component">
            <Navigation/>
            <div className="dashboard">
                <section className="top-dashboard">
                <h1 id="welcome-header">Welcome back, {sessionUser.name}!</h1>

                <div className="upcoming-events-msg">
                    <span id="welcome-header-span">You have</span>
                    <span id="upcoming-msg" onClick={() => setFilter('Upcoming')}>{upcoming } upcoming {upcoming > 1 ? 'events' : 'event'}.</span>
                </div>

                <nav className="event-nav-bar">
                    <button className="event-filter-btn-open" style={{
                        background: 
                            filter === "Open Invite" ? "linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)),linear-gradient(90deg,rgba(217,149,211,.6) 7.51%,rgba(100,98,239,.6) 28.85%,rgba(109,238,255,.6) 57.53%,rgba(190,254,246,.6) 68.5%,rgba(118,246,185,.6) 82.82%,rgba(191,255,224,.6) 97.32%),hsla(0,0%,100%,.15)"
                             : "hsla(0,0%,100%,.025)",
                        }} onClick={handleClick} value="Open Invite">
                        💫 Open Invite
                    </button>
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Upcoming" ? "hsla(0,0%,100%,.15)" : null,
                        }} onClick={handleClick} value="Upcoming">
                        Upcoming
                    </button>
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Hosting" ? "hsla(0,0%,100%,.15)" : null,
                        }} onClick={handleClick} value="Hosting">
                        Hosting
                    </button>

                    {/* <button className="event-filter-btn">
                        Drafts
                    </button> */}
                    
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Attended" ? "hsla(0,0%,100%,.15)" : null,
                        }} onClick={handleClick} value="Attended">
                        Attended
                    </button>

                    <button className="event-filter-btn" id="event-filters" style={{
                        backgroundColor: 
                            filter === "All Past Events" ? "hsla(0,0%,100%,.15)" : null,
                        }} onClick={handleClick} value="All Past Events">
                        All Past Events
                    </button>
                </nav>
                
                    {filter === 'Open Invite' ?
                    <div id="open-invite-msg">
                        <p>Hosted by people you've partied with 🥳</p>
                    </div>
                    : null}
                </section>
                <div className="event-items">
                    <div className="events">
                        {
                            filteredEvents.map( (event, i) => 
                                <EventIndexItem event={event} usersState={usersState} key={i}/>
                            )
                        }
                        <a href="/create" id="new-event-link">
                            <div className="empty-event" onMouseOver={chbg("rgba(255, 255, 255, 0.15)")} onMouseLeave={chbg("transparent")}>
                                <p id="empty-event-title">+ New Event</p>
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

