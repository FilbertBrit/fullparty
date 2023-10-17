import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvent, fetchEvent } from '../../../store/events';
import { useEffect } from 'react';
import { deleteEvent } from '../../../store/events';
import Navigation from "../../Navigation"
import { useHistory } from 'react-router';
import wazzap from "../../../images/wazzap-halloween.jpeg"
import "./EventShowPage.css"


export function EventShowPage () {

    const { eventId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const event = useSelector(getEvent(eventId));
    const editLink = "/events/" + eventId + "/edit";

    const handleDelete = (e) => {
        dispatch(deleteEvent(eventId));
        history.push('/events')
    }


    useEffect( () => {
        dispatch(fetchEvent(eventId));
    }, [dispatch, eventId])

    return event ? (
        <>
        <div id='page-layout-showpage'>
            <Navigation/>
            <div className="showpage-layout">
                <div className="show-info">
                    <div className="show-title">
                        <h2>{event.title}</h2>
                    </div>
                    <div className="show-date-time">
                        { event.dateTime ? 
                            (<h2>{event.dateTime}</h2>) 
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
                                            {event.capacity}/{event.capacity} spots left
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
                        <div className="show-guests">
                            <div className="show-guests-rsvps">
                                <h2>20 Went</h2>
                                <h2>.</h2>
                                <h2>10 Maybe</h2>
                                <h2>.</h2>
                                <h2>3 Waitlist</h2>
                            </div>
                            <div className="show-guests-profiles">
                                <h2>prof</h2>
                                <h2>prof</h2>
                                <h2>prof</h2>
                                <h2>prof</h2>
                                <h2>prof</h2>
                                <h2>prof</h2>
                            </div>
                        </div>
                    </div>
                    <div className="show-add-pics-btn">
                        <button id='show-add-pics-btn'>

                            + 
                            <h2 id='show-camera-btn-emoji'>📸</h2>
                            ADD PHOTOS
                        </button>
                    </div>
                    <div className="show-rsvps-comments">
                        <div className="show-rsvps-comments-header">
                            <h2 id='show-activity-header'>Activity</h2>
                        </div>
                        <div className="show-rsvps-comments-div">
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
                        <h2 id='show-rsvp-item'>rsvp</h2>
                    </div>
                </div>
                <div className="show-photo-rsvp">
                    <div className="show-img">
                        <img src={wazzap} alt="show-img" id='show-img'/>
                    </div>
                    <div className="show-rsvp">
                    <div className="rsvp-options-btns-container">
                                <div className="rsvp">
                                    <div className="emoji-rsvp">
                                        👍
                                    </div>
                                    <h4>I'm Going</h4>
                                </div>
                                <div className="rsvp">
                                    <div className="emoji-rsvp">
                                        🤔
                                    </div>
                                    <h4>Maybe</h4>
                                </div>
                                <div className="rsvp">
                                    <div className="emoji-rsvp">
                                        😢
                                    </div>
                                    <h4>Can't Go</h4>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="author-nav-sidebar">
            {/* <a href="/events/:" + { event.id } + "/edit" id='author-nav-sidebar-item'> */}
            <a href={editLink} id='author-nav-sidebar-item' className='edit-show-title'>
                <h2>✏️</h2>
                <h2 id='author-nav-sidebar-text'>EDIT</h2>
            </a>
            <div className="divider"></div>
            <div className="module-guest-list" id='author-nav-sidebar-item'>
                <div className="container-guest-list">
                    <h2 id='number-guest-going'>#</h2>
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
        </div>
        </>
    ) : null;
}