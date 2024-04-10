// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import dots from "../../../images/dots-horizontal-svgrepo-com.png"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { deleteEvent } from '../../../store/events';
import { deleteRsvp } from "../../../store/rsvps";

export const EventIndexItem = ({ event, usersState }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const showPage = '/events/' + event.id;
    const userRsvp = event.userRsvp;
    const today = new Date();
    let rsvpStatus= '';
    let date = new Date(event.dateTime);
    const [showMenu, setShowMenu] = useState(false);
    let eventTime = date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" ")
    let time = eventTime[0].slice(0,1) + eventTime[1].toLocaleLowerCase()
    let eventDate = date.toString().split(' ')[0] + ' ' + (date.getMonth() + 1) + '/' + date.getDate() + '・' + time;
    const [soon, setSoon] = useState()
    const [clickAction, setClickAction] = useState()
    // console.log(date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" "), eventDate)
    // console.log(date.getTimezoneOffset())
    //checking is the event is a day or less away to set date preview to variable soon
    switch (Math.floor((Math.abs(new Date(today.toDateString()) - new Date (new Date(event.dateTime).toDateString())))/(1000*60*60*24))) {
        case 1:
            setSoon('Tommorrow')
            break;
        case 0:
            setSoon('Today')
            break;
        default:
            break;
    }

    if( ((event.dateTime !== null) && today > new Date(event.dateTime)) && ((event.authorId === sessionUser.id ) || (event.userRsvp !== null)) ){
        if(event.authorId === sessionUser.id){
            rsvpStatus = "👑 HOSTED";
        }else{
            switch (userRsvp[0]) {
                case "I'm Going":
                    rsvpStatus = '👍 WENT'
                    break;
                case "Maybe":
                    rsvpStatus = '🤔 MAYBE'
                    break;
                case "Can't Go":
                    rsvpStatus = "😢 DIDN'T GO"
                    break;
                default:
                    break;
            }
        }
    }
    else{
        if(event.authorId === sessionUser.id){
            rsvpStatus = "👑 HOSTING"
        }
        else{
            switch (userRsvp[0]) {
                case "I'm Going":
                    rsvpStatus = '👍 GOING'
                    break;
                case "Maybe":
                    rsvpStatus = '🤔 MAYBE'
                    break;
                case "Can't Go":
                    rsvpStatus = "😢 CAN'T"
                    break;
                case "invited":
                    rsvpStatus = "💌 INVITED"
                    break;
                default:
                    break;
            }
        }
    }
    
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handleDeleteEvent = (e) => {
        setClickAction('Delete')
        dispatch(deleteEvent(event.id))
    }
    const handleDeleteRSVP = (e) => {
        setClickAction('Rsvp')
        dispatch(deleteRsvp(userRsvp[1]))
        // dispatch(deleteEvent(event.id))
    }

    // useEffect(() => {

    //     if(clickAction === 'DELETE'){
    //         dispatch(deleteEvent(event.id))
    //         // .then(history.push('/events'));
    //     }else{

    //     }

    // }, [clickAction])
    
    return (
        <>
            <a href={ showMenu === false && clickAction !== 'Delete'? showPage : null } id="event-item" onClick={() => localStorage.setItem('usersState', JSON.stringify(usersState))} >
                <div id="photo-rsvp-container">
                    <img src={wazzap} id="event-img" alt="dummy-pic"/>
                    { rsvpStatus ? 
                        <div id="user-rsvp-details">{rsvpStatus}</div> : null
                    }
                    <div id="event-date-details"> </div>
                    { event.authorId === sessionUser.id || userRsvp !== 'Invited' ? 
                        <div id="event-item-option-btn" onClick={() => setShowMenu(true)} on> 
                            <img src={dots} id="dots-options-btn" alt="options-btn-event-item" />
                        </div> : null
                    }
                    { showMenu && (event.authorId === sessionUser.id ?
                        <div className="option-menu-event-item" onClick={handleDeleteEvent}>
                            <p className="arrow-emojji">⏏︎</p>
                            <p className="menu-remove"><span className="remove-emoji">❌</span> Delete Event </p>
                        </div> :
                        <div className="option-menu-event-item" onClick={() => setClickAction('REMOVE')}>
                            <p className="arrow-emojji">⏏︎</p>
                            <p className="menu-remove"><span className="remove-emoji">❌</span> Remove me from event</p>
                        </div>)
                    }
                    { event.dateTime ? 
                        <div id="event-item-date"> {soon ? soon : eventDate} </div> :
                        <div id="event-item-date"> TBD </div> 
                    }
                </div>
                <div className="details">
                    <h2 id="event-item-title">{event.title}</h2>
                    <h2 id="event-item-host">Hosted by {event.host}</h2>
                </div>
            </a>
        </>
        
    )
}