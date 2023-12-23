
import { useDispatch, useSelector } from "react-redux"
import Navigation from "../Navigation"
import "./HomePage.css"
import { EventIndex } from "../Events/EventIndex";
import { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { Mutuals } from "../Mutuals";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export function HomePage () {
    // debugger
    const sessionUser = useSelector(state => state.session.user);
    // if (!sessionUser) return <Redirect to="/login" />;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("Upcoming");
    const [upcoming, setUpcoming] = useState('');
    
    const handleClick = (e) => {
        setFilter(e.target.value)
    }
    
    useEffect(()=>{
        // upcoming === 0 ? setFilter("Open Invite") : setFilter("Upcoming");

    }, [dispatch, upcoming])

   return (
        <div>
            <Navigation/>
            <div className="dashboard">
                <h1 id="welcome-header">Welcome back, {sessionUser.name}!</h1>
                <div className="upcoming-events-msg">
                    You have
                    <span id="upcoming-msg" onClick={() => setFilter('Upcoming')}>{upcoming} upcoming event</span>
                    .
                </div>
                <nav className="event-nav-bar">
                    <button className="event-filter-btn" style={{
                        backgroundColor: 
                            filter === "Open Invite" ? "hsla(0,0%,100%,.15)" : "transparent",
                        }} onClick={handleClick} value="Open Invite">
                        Open Invite
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
                <div className="event-items">
                    <EventIndex className="events-dash" filter={filter} setUpcoming={setUpcoming}/> 
                </div>
                <div className="Mutuals">
                    {/* <Mutuals/> */}
                    {/* <div id="mutuals-header">
                        <h1 id="welcome-header">Mutuals</h1>
                        <a href="" id="all-mutuals-link">SEE ALL</a>
                    </div>
                    <div id="mutuals-preview">

                    </div> */}
                </div>
                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>

   ) 
}

