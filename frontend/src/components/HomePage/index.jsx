
import { useSelector } from "react-redux"
import Navigation from "../Navigation"
import "./HomePage.css"
import { EventIndex } from "../Events/EventIndex";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { Mutuals } from "../Mutuals";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { MutualsItem } from "./MutualsItem";

export function HomePage () {
    
    const sessionUser = useSelector(state => state.session.user);
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    const [filter, setFilter] = useState("Upcoming");
    const [upcoming, setUpcoming] = useState('');
    
    const handleClick = (e) => {
        setFilter(e.target.value)
    }

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
                    <EventIndex className="events-dash" filter={filter} setUpcoming={setUpcoming} /> 
                </div>
                <div className="Mutuals">
                    {/* <Mutuals/> */}
                    <div id="mutuals-header-home">
                        <h1 id="welcome-header">Mutuals</h1>
                        <a href="/mutuals" id="all-mutuals-link">SEE ALL</a>
                    </div>
                    <div id="mutuals-preview">
                        {
                            mutuals.map ( (mutual, i) => 
                                <MutualsItem mutual={mutual} key={i}/>
                            )
                        }
                    </div>
                </div>
                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>

   ) 
}

