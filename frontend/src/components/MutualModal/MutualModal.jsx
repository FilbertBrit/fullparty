import cancel from "../../images/cancel.png"
import { useDispatch, useSelector } from "react-redux"
import { getEvents } from "../../store/events";
import { closeModal } from "../../store/modal";
// import { useEffect } from "react";
import "./MutualModal.css"
import { SharedEventPrev } from "./SharedEventPrev";

export const MutualModal = ({ mutualId }) => {

    const dispatch = useDispatch();
    const mutual = useSelector(state => state.users[mutualId]);
    const eventsObj = useSelector(getEvents);
    const events = eventsObj ? Object.values(eventsObj) : [];
    
    const fetchSharedEvents = () => {
        const eventsArr = []

        for(let i = 0; i < events.length && eventsArr.length !== mutual.sharedEvents.length; i++){
            if(mutual.sharedEvents.includes(events[i].id)) eventsArr.push(events[i])
        }
        return eventsArr
    }
    
    let sharedEvents = eventsObj ? fetchSharedEvents() : [];

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    // useEffect(() => {
    //     // dispatch(fetchUser(mutualId))
    // }, [dispatch])

    return (
        // mutual ? 
        <div className="mutual-modal-component">
            <div className="exit-btn-mutual-component" onClick={handleCancel}><img src={cancel} id="cancel-img" /></div>

            <div className="mutual-modal-profile">
                <div className="user-profile-photo" id="user-profile-shared-events">
                      <div className="initials" id="initials-shared-events">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div id="username-container-mutual-prev-modal">
                    <h2>{mutual.name}</h2> 
                </div>
                <div className="profile-user-join-date">
                    <h3 id="user-profile-details">💥 <span id="bam-emoji"> Joined {mutual.joined}</span></h3>
                </div>
                <div className="socials-container-mutual-modal">

                </div>
                <div className="achievments-container-mutual-modal">
                    
                </div>
                <section className="mutual-modal-shared-events-container">
                    <h2 id="shared-events-container-header">Shared Events</h2>
                    <div className="events-container-mutual-modal">
                        {
                            sharedEvents.map( (event, i) => 
                                <SharedEventPrev event={event} key={i} id="event-prev-item"/>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
        // : null
    )
}