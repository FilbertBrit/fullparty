import { useDispatch, useSelector } from "react-redux"
import Navigation from "../../Navigation";
import wazzap from "../../../images/wazzap-halloween.jpeg"
import { getEvent, fetchEvent } from '../../../store/events';
import { useEffect, useState } from "react";
import "./EventInputForm.css"
import * as eventActions from '../../../store/events';
import { useHistory, useParams } from "react-router";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AiOutlineInstagram } from "react-icons/ai"

export function EventInputForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const { eventId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(getEvent(eventId));

    const [title, setTitle] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('')
    const [selectedDate, setSelectedDate] = useState('');

    const filteredDate = (date) => { 
        return (new Date() < date) || (new Date() == date)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dateTime);
        event ? 
        (
            dispatch(eventActions.updateEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description, id: eventId})).then( res =>  history.push('/events/' + res.event.id))
        ) : 
        (
            dispatch(eventActions.createEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description})).then( res =>  history.push('/events/' + res.event.id))
        );
    }

    const handleDateChange = (date) => {
        console.log(date)
        console.log(new Date(date))
        setDateTime(date);
        setSelectedDate(date);
    }

    useEffect( () => {
        if(eventId) dispatch(fetchEvent(eventId)).then( payload => {
            setTitle(payload.event.title);
            setCapacity(payload.event.capacity);
            setLocation(payload.event.location);
            setCost(payload.event.cost);
            setDateTime(payload.event.dateTime);
            setDescription(payload.event.description);
        });

    }, [dispatch, eventId])

    if (!sessionUser) return <Redirect to="/login" />;
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
        
                            <DatePicker 
                                showTimeSelect
                                filterDate={filteredDate}
                                selected={selectedDate} 
                                onChange={ handleDateChange }
                                placeholderText="Date & Time TBD"
                                className="datePicker-input"
                                dateFormat='yyyy-mm-dd hh:ii'
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
                {event ? (
                    <div onClick={handleSubmit}>
                        <div className="module-invite" id='author-nav-sidebar-item'>
                            <h2>☑️</h2>
                            <h2 id='author-nav-sidebar-text' >DONE</h2>
                        </div>
                    </div>
                ) : (
                    // <div>
                    //     <div className="module-invite" id='author-nav-sidebar-item'>
                    //         <h2>👁️</h2>
                    //         <h2 id='author-nav-sidebar-text'>Preview</h2>
                    //     </div>
                    // </div>
                    <></>
                )}
            </div>
            <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
        </> ) 
    )
}
