// import { useDispatch, useSelector } from "react-redux"
// import Navigation from "../../Navigation";
// import wazzap from "../../../images/wazzap-halloween.jpeg"
// import { useState } from "react";
import "./EventFormPage.css"
// import * as eventActions from '../../../store/events';
// import { useHistory } from "react-router";
// import { EventInputForm } from "../EventInputForm";

export function EventFormPage () {

    // const dispatch = useDispatch();
    // const history = useHistory();
    // const sessionUser = useSelector(state => state.session.user);
    // const [title, setTile] = useState('');
    // // const [authorId, setAuthorId] = useState(sessionUser.id);
    // const [dateTime, setDateTime] = useState('');
    // const [location, setLocation] = useState('');
    // const [capacity, setCapacity] = useState('');
    // const [cost, setCost] = useState('');
    // const [description, setDescription] = useState('')
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(eventActions.createEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description}))
    //     history.push('/events');
    // }

    return (
        < EventInputForm />

    //     <>
    //         <Navigation/>
        
    //         <form onSubmit={handleSubmit}>
    //             <div className="event-form-layout">
    //                 <div className="title-options-container">
    //                     <div className="title-container">
    //                         <input 
    //                         id="title-input"
    //                         type="text" 
    //                         value={title}
    //                         onChange={ (e) => setTile(e.target.value) }
    //                         required
    //                         placeholder="Untitled Event"
    //                         />
    //                     </div>
    //                     <div className="date-time-container">
    //                         <input 
    //                         id="date-time-input"
    //                         type="text"
    //                         value={dateTime}
    //                         onChange={ (e) => setDateTime(e.target.value) }
    //                         placeholder="Date & Time TBD"
    //                         />
    //                     </div>
    //                     <div className="host-optional-inputs-container">
    //                         <div className="host-container">
    //                             <div className="host-title">
    //                                 <h2 id="input-emoji">👑</h2>
    //                                 <h4 id="host-title">Hosted by the wonderful...</h4>
    //                             </div>
    //                             <div id="host">
    //                                 {sessionUser.name}
    //                             </div>
    //                         </div>
    //                         <div className="location-input-div">
    //                             <h2 id="input-emoji">📍</h2>
    //                             <input 
    //                             id="location-input"
    //                             type="text"
    //                             value={location}
    //                             onChange={ (e) => setLocation(e.target.value) }
    //                             placeholder="Place name, address, or link"
    //                             />
    //                         </div>
    //                         <div className="capacity-input-div">
    //                             <h2 id="input-emoji">👥</h2>
    //                             <input 
    //                             id="capacity-input"
    //                             type="number"
    //                             value={capacity}
    //                             onChange={ (e) => setCapacity(e.target.value) }
    //                             placeholder="Unlimited"
    //                             />
    //                             <div> spots</div>
    //                         </div>
    //                         <div className="cost-div">
    //                             <h2 id="input-emoji">🎟️</h2>
    //                             <input 
    //                             id="cost-input"
    //                             type="number"
    //                             value={cost}
    //                             onChange={ (e) => setCost(e.target.value) }
    //                             placeholder="+ Cost per person"
    //                             />
    //                         </div>
    //                         {/* <div className="custom-link-div">
    //                             <h2 id="input-emoji">✨</h2>
    //                             <div id="custom-link">+ Add custon link or text </div>
    //                         </div> */}
    //                     </div>
    //                     <div className="description-input-container">
    //                         <input 
    //                         id="description-input"
    //                         type="text" 
    //                         value={description}
    //                         onChange={ (e) => setDescription(e.target.value) }
    //                         placeholder="Add a description of your event"
    //                         />
    //                     </div>
    //                     {/* <div className="covid-setting-div">
    //                         <h4>COVID_19 SAFETY SETTINGS</h4>
    //                         <div>+</div>
    //                     </div> */}
    //                 </div>

    //                 <div className="photo-rsvp-container">
                    
    //                     <div className="photo-container">
    //                         <img src={wazzap} id="wazzap-halloween-pic" alt="dummy-pic"/>
    //                     </div>
    //                     <div className="open-invite-div">
    //                         <h2 id="open-invite-title">💫 Open Invite</h2>           
    //                         <h2 id="open-invite-btn"> Turned Off </h2>
    //                     </div>
    //                     <div className="rsvp-option-container">
    //                         <div className="rsvp-option-title-div">
    //                             <h2 id="rsvp-option-btn">RSVP Options</h2>
    //                         </div>
    //                         <div className="rsvp-options-btns-container">
    //                             <div className="rsvp">
    //                                 <div className="emoji-rsvp">
    //                                     👍
    //                                 </div>
    //                                 <h4>I'm Going</h4>
    //                             </div>
    //                             <div className="rsvp">
    //                                 <div className="emoji-rsvp">
    //                                     🤔
    //                                 </div>
    //                                 <h4>Maybe</h4>
    //                             </div>
    //                             <div className="rsvp">
    //                                 <div className="emoji-rsvp">
    //                                     😢
    //                                 </div>
    //                                 <h4>Can't Go</h4>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="static-sidebar">
    //                     <button type="submit" id="create-form-btn"> SAVE DRAFT</button>  
    //                     <div className="nav-options">
    //                         <div className="theme-tab">
    //                             {/* <h2></h2> */}
    //                             <h2>THEME</h2>
    //                         </div>
    //                         <div className="effect-tab">
    //                             {/* <h2></h2> */}
    //                             <h2>EFFECT</h2>
    //                         </div>
    //                         <div className="settings-tab">
    //                             {/* <h2></h2> */}
    //                             <h2>SETTINGS</h2>
    //                         </div>
    //                         <div className="preview-tab">
    //                             {/* <h2></h2> */}
    //                             <h2>PREVIEW</h2>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>  
    //         </form>
    //     </>


    )
}