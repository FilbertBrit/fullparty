
import { useSelector } from "react-redux"
import Navigation from "../Navigation"
import "./HomePage.css"
import { EventIndex } from "../Events/EventIndex";
// import { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai"
import { Mutuals } from "../Mutuals";

export function HomePage () {
    const sessionUser = useSelector(state => state.session.user);
    // const dispatch = useDispatch();
    // const [filter, setFilter] = useState("Upcoming");

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
                    {/* <div className="event-filter-btn">
                        Open Invite
                    </div> */}
                    <div className="event-filter-btn">
                        Upcoming
                    </div>
                    <div className="event-filter-btn">
                        Hosting
                    </div>
                    {/* <div className="event-filter-btn">
                        Drafts
                    </div> */}
                    <div className="event-filter-btn">
                        Attended
                    </div>
                    <div className="event-filter-btn">
                        All Past Events
                    </div>
                </nav>
                <div className="event-items">
                    <EventIndex className="events-dash"/>
                </div>
                <div className="Mutuals">
                    <Mutuals/>
                </div>
                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>

   ) 
}

