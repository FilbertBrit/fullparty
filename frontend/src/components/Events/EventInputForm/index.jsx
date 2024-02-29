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
    const [selectedInput, setSelectedInput] = useState('')

    const filteredDate = (date) => { 
        return (new Date() < date) || (new Date() === date)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(dateTime);
        event ? 
        (
            dispatch(eventActions.updateEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description, id: eventId})).then( res =>  history.push('/events/' + res.event.id))
        ) : 
        (
            dispatch(eventActions.createEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description})).then( res =>  history.push('/events/' + res.event.id))
        );
    }

    const handleDateChange = (date) => {
        // console.log(date)
        // console.log(new Date(date))
        setDateTime(date);
        setSelectedDate(new Date(date));
    }

    // const handleSelect = (e) => {
    //     e.parent.stopPropagation()
    //     console.log(e.target.value)
    //     // setSelectedInput('title')
    // }

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


    // Function to dynamically adjust the height of the textarea based on content
    const autoResizeTextarea = (event) => {
        setTitle(event.target) 
        const textarea = event.target; 
        // console.log(title, title.length) 
        textarea.style.height = 'auto';
        textarea.style.height = title.length < 28 ? (textarea.scrollHeight - 40) + 'px' : (textarea.scrollHeight) + 'px';
    };


    if (!sessionUser) return <Redirect to="/login" />;
    return (
        // eventId && !event ?
        // (<></>)
        // :
        ( <>
            <Navigation/>
        
            <form onSubmit={handleSubmit} 
                            // onClick={e => setSelectedInput('date')}
                            >
                <div className="event-form-layout">
                    <div className="title-options-container">
                        <div className="title-container" style={{
                                backgroundColor: 
                                    selectedInput === "title" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }}
                            onClick={e => setSelectedInput('title')} value='title'
                            >
                            <textarea
                            id="title-input"
                            type="text" 
                            value={title}
                            onChange={ autoResizeTextarea }
                            required
                            placeholder="Untitled Event"
                            // onInput={autoResizeTextarea}
                            // onKeyDown={onEnterPress}
                            // onSelect={e => { e.stopPropagation() && setSelectedInput('title') }}
                            on
                            style={{ height: '30px'}}
                            maxLength={'50'}

                            />
                        </div>
                        <div className="date-time-container" style={{
                                backgroundColor: 
                                    selectedInput === "date" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }} onSelect={e => setSelectedInput('date')}>
        
                            <DatePicker 
                                showTimeSelect
                                filterDate={filteredDate}
                                selected={selectedDate} 
                                onChange={ handleDateChange }
                                placeholderText="Set a date..."
                                className="datePicker-input"
                                dateFormat='EEEE, MMM dd, h:mm a'
                                style={{width: '100%'}}
                            />
                        </div>
                        <div className="host-optional-inputs-container">
                            <div className="host-container" onClick={e => setSelectedInput('host')} style={{
                                backgroundColor: 
                                    selectedInput === "host" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }}>
                                <div className="host-title">
                                    <h2 id="input-emoji">👑</h2>
                                    <h4 id="host-title">Hosted by the wonderful...</h4>
                                </div>
                                <div id="host">
                                    {sessionUser.name}
                                </div>
                            </div>
                            <div className="location-input-div" style={{
                                backgroundColor: 
                                    selectedInput === "location" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }} onSelect={e => setSelectedInput('location')}>
                                <h2 id="input-emoji">📍</h2>
                                {/* <input  */}
                                <textarea
                                    id="location-input"
                                    type="text"
                                    value={location}
                                    onChange={ (e) => setLocation(e.target.value) }
                                    placeholder="Place name, address, or link"
                                    maxLength={'120'}
                                    style={{ height: 'fit-content'}}

                                />
                            </div>
                            <div className="capacity-input-div" onClick={e => setSelectedInput('capacity')} style={{
                                backgroundColor: 
                                    selectedInput === "capacity" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }}>
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
                            <div className="cost-div" onSelect={e => setSelectedInput('cost')} style={{
                                backgroundColor: 
                                    selectedInput === "cost" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }}>
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
                        <div className="description-input-container" onClick={e => setSelectedInput('description')} style={{
                                backgroundColor: 
                                    selectedInput === "description" ? "hsla(234.56deg 63.96% 50.92% / 31%)" : null,
                                }}>
                            {/* <input  */}
                            <textarea
                            id="description-input"
                            type="text" 
                            value={description}
                            onChange={ (e) => setDescription(e.target.value) }
                            placeholder="Add a description of your event"
                            
                            />
                        </div>
                    </div>

                    <div className="photo-rsvp-container">
                    
                        <div className="photo-container">
                            <img src={wazzap} id="wazzap-halloween-pic" alt="dummy-pic"/>
                        </div>
                        <div className="open-invite-div">
                            <h2 id="open-invite-title">💫 Open Invite</h2> 
                            <h2 id="open-invite-btn"> Turned On </h2>
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
