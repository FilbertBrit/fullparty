
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
    const [filter, setFilter] = useState("Open Invite");

    const handleClick = (e) => {
        // console.log(e.target.value)
        // console.log(e.currentTarget.value)
        setFilter(e.target.value)
    }

    useEffect(()=>{

    }, [dispatch, filter])

    //call <EventIndex> here then filter based on button choice: openI, upcoming, hosting, attended, allPast


   return (
        <div>
            <Navigation/>
            <div className="dashboard">
                <h1 id="welcome-header">Welcome back, {sessionUser.name}!</h1>
                <div className="upcoming-events-msg">
                    You have
                    <a href="/events" id="upcoming-msg">{1} upcoming event</a>
                    .
                </div>
                {/* <h3 id="upcoming-events-msg">You have {1} upcoming event.</h3> */}
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
                    <EventIndex className="events-dash" filter={filter}/>
                </div>
                <div className="Mutuals">
                    {/* <Mutuals/> */}
                </div>
                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>

   ) 
}

