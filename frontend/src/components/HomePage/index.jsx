
import { useSelector } from "react-redux"
import Navigation from "../Navigation"
import "./HomePage.css"

// const sessionUser = useSelector(state => state.session.user)
export function HomePage () {
    const sessionUser = useSelector(state => state.session.user);

   return (
        <div>
            <Navigation/>
            <div className="dashboard">
                <h1>Welcome back, {sessionUser.name}!</h1>
                <div className="upcoming-events-msg">
                    <h3>You have</h3>
                    <h3>1 upcoming event.</h3>
                </div>
                <nav>
                    <button>Open Invite</button>
                    <button>Upcoming</button>
                    <button>Hosting</button>
                    <button>Attended</button>
                    <button>All Past Events</button>
                </nav>
                <div id="tabed-events">
                    <h3>event 1</h3>
                    <h3>event 2</h3>
                    <h3>event 3</h3>
                </div>
                <div className="Mutuals">
                    <nav>
                        <h3>Mutuals</h3>
                        <button>SEE ALL</button>
                    </nav>
                    <div className="top-six-mutuals">
                        <h3>Mutual 1</h3>
                        <h3>Mutual 2</h3>
                        <h3>Mutual 3</h3>

                    </div>
                </div>

            </div>
        </div>

   ) 
}

