import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent, fetchEvent } from '../../../store/events';
import { restoreUsers } from '../../../store/user';
import { useEffect } from 'react';
import { deleteEvent } from '../../../store/events';
import Navigation from "../../Navigation"
import { useHistory } from 'react-router';
import wazzap from "../../../images/wazzap-halloween.jpeg"
import "./EventShowPage.css"
import { RsvpComponent } from './RsvpComponent';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AiOutlineInstagram } from "react-icons/ai"
import { ActivityLog } from './ActivityLog';
import { store } from '../../../store';

export function EventShowPage () {

    const { eventId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const event = useSelector(getEvent(eventId));
    const sessionUser = useSelector(state => state.session.user);
    const rsvps = useSelector(state => state.rsvps);
    const date = event ? new Date(event.dateTime).toLocaleTimeString('en-US', { timeZone: 'PST' }).split(" ") : ''
    console.log(date)
    // const today = new Date()
    // const eventDone = event ? date < today : '';
    let rsvpGoing = 0;
    let rsvpMaybe = 0;
    const editLink = "/events/" + eventId + "/edit";
    let location = event?.location || "No Location Set";

    // When returning to the original page
    const savedState = JSON.parse(localStorage.getItem('usersState'));
    console.log(savedState)
    // store.dispatch({ type: 'RESTORE_STATE', payload: savedState });
    
    for(let key in rsvps){
        rsvps[key].status === "I'm Going" ? (rsvpGoing = (rsvpGoing + 1)) : (rsvpGoing = (rsvpGoing));
        rsvps[key].status === "Maybe" ? (rsvpMaybe = (rsvpMaybe + 1)) : (rsvpMaybe = (rsvpMaybe));
    }

    const handleDelete = async(e) => {
        dispatch(deleteEvent(eventId)).then(history.push('/events'));
    }
    
    useEffect(  () => {
        debugger
        dispatch(fetchEvent(eventId)).then(() => dispatch(restoreUsers(savedState)));
        
    }, [dispatch, eventId])
    // useEffect( () => {
    //     debugger
    //     store.dispatch({ type: 'RESTORE_STATE', payload: savedState });
    // }, [event])
    
    if (!sessionUser) return <Redirect to="/login" />;

    return event ? (
        <>
        <div id='page-layout-showpage'>
            <Navigation/>
            <div className="showpage-layout">
                    <div className="show-title">
                        <h2 id='event-title-show'>{event.title}</h2>
                    </div>
                    <div className="show-photo-rsvp">
                    <div className="show-img">
                        <img src={wazzap} alt="show-img" id='show-img'/>
                    </div>
                    <div className="show-rsvp">
                        <RsvpComponent event={event}/>
                    </div>
                </div>
                <div className="show-info">
                    <div className="show-date-time" id='dateTime-show'>
                        { event.dateTime ? 
                            (
                                <div>
                                    <h2>{event.date}</h2>
                                    <h2 id='event-time-h2'>{date[0].slice(0,5) + date[1].toLocaleLowerCase()}</h2>
                                    {/* <h2 id='event-time-h2'>{date}</h2> */}
                                </div>
                            ) 
                            : 
                            (<h2>Date & Time TBD</h2>)
                        }
                    </div>
                    <div className="show-details">
                        <div className="show-host">
                            <div className="show-hosted-title">
                                <h2 id='show-host-crown'>👑</h2>
                                <h2 id='show-host-by'>Hosted by </h2>
                            </div>
                            <div className="show-host-profile">
                                <h2>{event.host}</h2>
                            </div>
                        </div>
                        <div className="show-location">
                            { event.userRsvp || sessionUser.id === event.hostId? 
                                (
                                    <>
                                        <h2 >📍</h2>
                                        <h2 id='show-host-by'>{location}</h2>
                                    </>
                                )
                                : 
                                (
                                    <>
                                        <h2>📍</h2>
                                        <h2 id='' className='location-no-rsvp'> RSVP <span id='rsvp-location-h2-event-show'>to see location</span></h2>
                                    </>
                                ) 
                            }
                        </div>
                        <div className="show-cost-div">
                        { event.cost && event.cost !== 0 ? 
                                (
                                    <div className="show-cost">
                                        <h2 >🎟️</h2>
                                        <h2 id='show-host-by'>${event.cost} per person</h2>
                                    </div>
                                )
                                : 
                                (
                                    <></>
                                ) 
                            }
                        </div>
                        <div className="show-capacity-div">
                        { event.capacity ? 
                                (
                                    <div className="show-capacity">
                                        <h2>👥</h2>
                                        <div id='show-host-by'>
                                            <span id='capacity-num-event-show'>{event.capacity - rsvpGoing}</span>/{event.capacity} spots left
                                        </div>
                                    </div>
                                )
                                : 
                                (
                                    <></>
                                ) 
                            }
                        </div>
                        <div className="show-description">
                                <h2 className='event-description-showpage'>{event.description ? event.description : ''}</h2>
                        </div>
                        {Object.keys(rsvps).length === 0 ? (
                            <></>
                        ) : (
                            <div className="show-guests">
                                <div className="show-guests-rsvps">
                                    {rsvpGoing !== 0 ? (
                                        <>
                                            <div className="going">
                                            {rsvpGoing} Going
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    {rsvpMaybe !== 0 ? (
                                        <>
                                            <div className="maybe">
                                                {rsvpMaybe} Maybe
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    {/* <h2>3 Waitlist</h2>  */}
                                </div> 
                                <div className="show-guests-profiles">
                                    
                                </div>
                            </div>
                        )}
                        
                    </div>
                    <div className="show-add-pics-btn">
                        {/* <button id='show-add-pics-btn'>

                            + 
                            <h2 id='show-camera-btn-emoji'>📸</h2>
                            ADD PHOTOS
                        </button> */}
                    </div>
                </div>
                {/* <div className="show-photo-rsvp">
                    <div className="show-img">
                        <img src={wazzap} alt="show-img" id='show-img'/>
                    </div>
                    <div className="show-rsvp">
                        <RsvpComponent event={event}/>
                    </div>
                </div> */}
                <div className="show-rsvps-comments">
                    <div className="show-rsvps-comments-header">
                        <h2 id='show-activity-header'>Activity</h2>
                    </div>
                    {!event.userRsvp && sessionUser.id !== event.hostId? 
                        <div id='restricted-log-container'>
                            <div className='restrict-activity-log'>
                                <h2 id='restricted-header'>🔒 Restricted Access</h2>
                                <p>Only RSVP'd guests can view event activity & see who's going</p>
                                <button>RSVP FOR ACCESS</button>
                                <p> Not sure if you'll go? Pick “Maybe”</p>
                            </div>
                            <div id='log-restricted'>
                                <ActivityLog />
                            </div>
                        </div>
                        : <ActivityLog/>
                    }
                    {/* <ActivityLog/> */}
                </div>
            </div>
        </div>
        <div className="author-nav-sidebar">
            {sessionUser.id === event.hostId ? (
                <>
                    <a href={editLink} id='author-nav-sidebar-item' className='edit-show-title'>
                        <h2>✏️</h2>
                        <h2 id='author-nav-sidebar-text'>EDIT</h2>
                    </a>
                    <div className="divider"></div>
                    <div className="module-guest-list" id='author-nav-sidebar-item'>
                        <div className="container-guest-list">
                            <div id='number-guest-going'>{rsvpGoing}</div>
                            <h2 className='going-text-show' id='author-nav-sidebar-text'>GOING</h2>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="module-invite" id='author-nav-sidebar-item'>
                        <h2>👥</h2>
                        <h2 id='author-nav-sidebar-text'>INVITE</h2>
                    </div>
                    <div className="divider"></div>
                    <div className="show-settings-menu" id='author-nav-sidebar-item' onClick={ handleDelete }>
                        <div className='setting-text-show'>DELETE</div>
                    </div>
                </>
                ) : (
                    <></>
                )}
        </div>
        <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
        </>
    ) : null;
}