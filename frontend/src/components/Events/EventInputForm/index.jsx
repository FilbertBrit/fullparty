import { useDispatch, useSelector } from "react-redux"
import Navigation from "../../Navigation";
import wazzap from "../../../images/wazzap-halloween.jpeg"
import { getEvent, fetchEvent } from '../../../store/events';
import { useEffect, useState } from "react";
import "./EventInputForm.css"
import * as eventActions from '../../../store/events';
import { useHistory, useParams } from "react-router";

export function EventInputForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(getEvent(eventId));

    const [title, setTitle] = useState( event ? event.title : '');
    const [dateTime, setDateTime] = useState(event ? event.dateTime : '');
    const [location, setLocation] = useState(event ? event.location : '');
    const [capacity, setCapacity] = useState(event ? event.capacity : '');
    const [cost, setCost] = useState(event? event.cost : '');
    const [description, setDescription] = useState(event ? event.description : '')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(eventActions.createEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description})).then( res =>  history.push('/events/' + res.id));
    }

    useEffect( () => {
        if ( eventId ) dispatch(fetchEvent(eventId)).then( event => {
            setTitle(event.title);
            setCapacity(event.capacity);
            setLocation(event.location);
            setCost(event.cost);
            setDateTime(event.dateTime);
            setDescription(event.description);
        });

    }, [dispatch, eventId])

    return (
        eventId && !event ?
        (<></>)
        :
        ( <>
            <Navigation/>
        
            <form onSubmit={handleSubmit}>
                <div className="event-form-layout">
                    <div className="title-options-container">
                        <div className="title-container">
                            <input 
                            id="title-input"
                            type="text" 
                            value={title}
                            onChange={ (e) => setTitle(e.target.value) }
                            required
                            placeholder="Untitled Event"
                            />
                        </div>
                        <div className="date-time-container">
                            <input 
                            id="date-time-input"
                            type="text"
                            value={dateTime}
                            onChange={ (e) => setDateTime(e.target.value) }
                            placeholder="Date & Time TBD"
                            />
                        </div>
                        <div className="host-optional-inputs-container">
                            <div className="host-container">
                                <div className="host-title">
                                    <h2 id="input-emoji">👑</h2>
                                    <h4 id="host-title">Hosted by the wonderful...</h4>
                                </div>
                                <div id="host">
                                    {sessionUser.name}
                                </div>
                            </div>
                            <div className="location-input-div">
                                <h2 id="input-emoji">📍</h2>
                                <input 
                                id="location-input"
                                type="text"
                                value={location}
                                onChange={ (e) => setLocation(e.target.value) }
                                placeholder="Place name, address, or link"
                                />
                            </div>
                            <div className="capacity-input-div">
                                <h2 id="input-emoji">👥</h2>
                                <input 
                                id="capacity-input"
                                type="number"
                                value={capacity}
                                onChange={ (e) => setCapacity(e.target.value) }
                                placeholder="Unlimited"
                                />
                                <div> spots</div>
                            </div>
                            <div className="cost-div">
                                <h2 id="input-emoji">🎟️</h2>
                                <input 
                                id="cost-input"
                                type="number"
                                value={cost}
                                onChange={ (e) => setCost(e.target.value) }
                                placeholder="+ Cost per person"
                                />
                            </div>
                            {/* <div className="custom-link-div">
                                <h2 id="input-emoji">✨</h2>
                                <div id="custom-link">+ Add custon link or text </div>
                            </div> */}
                        </div>
                        <div className="description-input-container">
                            <input 
                            id="description-input"
                            type="text" 
                            value={description}
                            onChange={ (e) => setDescription(e.target.value) }
                            placeholder="Add a description of your event"
                            />
                        </div>
                        {/* <div className="covid-setting-div">
                            <h4>COVID_19 SAFETY SETTINGS</h4>
                            <div>+</div>
                        </div> */}
                    </div>

                    <div className="photo-rsvp-container">
                    
                        <div className="photo-container">
                            <img src={wazzap} id="wazzap-halloween-pic" alt="dummy-pic"/>
                        </div>
                        <div className="open-invite-div">
                            <h2 id="open-invite-title">💫 Open Invite</h2>           
                            <h2 id="open-invite-btn"> Turned Off </h2>
                        </div>
                        <div className="rsvp-option-container">
                            <div className="rsvp-option-title-div">
                                <h2 id="rsvp-option-btn">RSVP Options</h2>
                            </div>
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
                    <div className="static-sidebar">
                    </div>
                </div>  
                {event ? (
                    <></>
                ) : (
                    <>
                        <button type="submit" id="create-form-btn"> PUBLISH EVENT </button> 
                    </>
                )}
            </form>
            <div className="author-nav-sidebar">
                <div className="module-invite" id='author-nav-sidebar-item'>
                    <h2>🖌️</h2>
                    <h2 id='author-nav-sidebar-text'>THEME</h2>
                </div>
                <div className="divider"></div>
                <div className="module-invite" id='author-nav-sidebar-item'>
                    <h2>🪄</h2>
                    <h2 id='author-nav-sidebar-text'>EFFECT</h2>
                </div>
                <div className="divider"></div>
                <div className="module-invite" id='author-nav-sidebar-item'>
                    <h2>⚙️</h2>
                    <h2 id='author-nav-sidebar-text'>SETTING</h2>
                </div>
                <div className="divider"></div>
                {event ? (
                    <div>
                        <div className="module-invite" id='author-nav-sidebar-item'>
                            <h2>☑️</h2>
                            <h2 id='author-nav-sidebar-text'>DONE</h2>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="module-invite" id='author-nav-sidebar-item'>
                            <h2>👁️</h2>
                            <h2 id='author-nav-sidebar-text'>Preview</h2>
                        </div>
                    </div>
                )}
            </div>
        </> ) 
    )
}
