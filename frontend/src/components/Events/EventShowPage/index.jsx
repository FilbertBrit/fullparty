import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent, fetchEvent } from '../../../store/events';
import { useEffect, useState } from 'react';
import { deleteEvent } from '../../../store/events';
import Navigation from "../../Navigation"
import { useHistory } from 'react-router';
import wazzap from "../../../images/wazzap-halloween.jpeg"
import "./EventShowPage.css"
import { RsvpComponent } from './RsvpComponent';
import { fetchRsvps } from '../../../store/rsvps';
// import { RsvpShow } from './RsvpShow';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { ActivityLog } from './ActivityLog';


export function EventShowPage () {

    const { eventId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const event = useSelector(getEvent(eventId));
    const sessionUser = useSelector(state => state.session.user)
    const rsvps = useSelector(state => state.rsvps )
    // const guestGoing = event.going;
    // const guestMaybe = event.maybe;
    const editLink = "/events/" + eventId + "/edit";
    
    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId));
        history.push('/events')
    }
    
    
    useEffect(  () => {
        dispatch(fetchEvent(eventId));
        // dispatch(fetchRsvp)
    }, [dispatch, eventId])
    
    if (!sessionUser) return <Redirect to="/login" />;

    return event ? (
        <>
        <div id='page-layout-showpage'>
            <Navigation/>
            <div className="showpage-layout">
                <div className="show-info">
                    <div className="show-title">
                        <h2 id='event-title-show'>{event.title}</h2>
                    </div>
                    <div className="show-date-time">
                        { event.dateTime ? 
                            (
                            <h2>{event.dateTime}</h2>
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
                            { event.location ? 
                                (
                                    <>
                                        <h2 >📍</h2>
                                        <h2 id='show-host-by'>{event.location}</h2>
                                    </>
                                )
                                : 
                                (
                                    <>
                                        <h2>📍</h2>
                                        <h2 id='show-host-by'>No Location Set</h2>
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
                                    <>
                                    </>
                                ) 
                            }
                        </div>
                        <div className="show-capacity-div">
                        { event.capacity ? 
                                (
                                    <div className="show-capacity">
                                        <h2>👥</h2>
                                        <div id='show-host-by'>
                                            {event.available}/{event.capacity} spots left
                                        </div>
                                    </div>
                                )
                                : 
                                (
                                    <>
                                    </>
                                ) 
                            }
                        </div>
                        <div className="show-description">
                            <h2>{event.description}</h2>
                        </div>
                        {event.rsvpList.empty ? (
                            <></>
                        ) : (
                            <div className="show-guests">
                                <div className="show-guests-rsvps">
                                    {event.going !== 0 ? (
                                        <>
                                            <div className="going">
                                            {event.going} Going
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    {event.maybe !== 0 ? (
                                        <>
                                            <div className="maybe">
                                                {event.maybe} Maybe
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    {/* <h2>3 Waitlist</h2>  */}
                                </div>
                                <div className="show-guests-profiles">
                                    {/* <h2>prof</h2>
                                    <h2>prof</h2>
                                    <h2>prof</h2>
                                    <h2>prof</h2>
                                    <h2>prof</h2>
                                    <h2>prof</h2> */}
                                </div>
                            </div>
                        )}
                        
                    </div>
                    <div className="show-add-pics-btn">
                        <button id='show-add-pics-btn'>

                            + 
                            <h2 id='show-camera-btn-emoji'>📸</h2>
                            ADD PHOTOS
                        </button>
                    </div>
                    <div className="show-rsvps-comments">
                        <ActivityLog/>
                        {/* <div className="show-rsvps-comments-div">
                            < RsvpShow/>
                            <div className="show-rsvps-comments-add-comment">
                                <h2>prof</h2>
                                <h2> + Add a comment</h2>
                                <h2>Gif</h2>
                            </div>
                            <div className="show-rsvps-comments-displayed">
                                <h2>we be a compontent that has all the coments.rsvps</h2>
                            </div>
                        </div>
                        
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2>
                        <h2 id='show-rsvp-item'>rsvp</h2> */}
                    </div>
                </div>
                <div className="show-photo-rsvp">
                    <div className="show-img">
                        <img src={wazzap} alt="show-img" id='show-img'/>
                    </div>
                    <div className="show-rsvp">
                        <RsvpComponent event={event}/>
                    </div>
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
                            <div id='number-guest-going'>{event.going}</div>
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
                        {/* <div className='setting-text-show'>...</div> */}
                        <div className='setting-text-show'>DELETE</div>
                    </div>
                </>
                ) : (
                    <></>
                )}
        </div>
        </>
    ) : null;
}