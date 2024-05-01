
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import dots from "../../../images/dots-horizontal-svgrepo-com.png"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { deleteEvent } from '../../../store/events';
import { deleteRsvp } from "../../../store/rsvps";
import { deleteInvite } from "../../../store/invites";

export const EventIndexItem = ({ event, usersState }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const invites = useSelector(state => state.invites)
    const inviteIdArr = Object.values(invites).filter(function(invite){ return invite.eventId === event.id }).map(invite => invite.id)
    const showPage = '/events/' + event.id;
    const userRsvp = event.userRsvp;
    const today = new Date();
    const eventPast = event.dateTime !== null && today > new Date(event.dateTime) ? true : false;
    const isUserHost = event.authorId === sessionUser.id ? true : false;

    let rsvpStatus = '';
    let date = new Date(event.dateTime);
    const eventTime = date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" ")
    const time = eventTime[0].slice(0,1) + eventTime[1].toLocaleLowerCase()
    const eventDate = date.toString().split(' ')[0] + ' ' + (date.getMonth() + 1) + '/' + date.getDate() + '・' + time;

    const [showMenu, setShowMenu] = useState(false);
    const [clickAction, setClickAction] = useState(null)
    const [soon, setSoon] = useState(null)
    // console.log(date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" "), eventDate)
    // console.log(date.getTimezoneOffset())

    //checking is the event is a day or less away to set date preview to variable soon
    if(soon === null){
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
    }

    // if else to set eventIndexItem's user RSVP preview
    if ( eventPast ) {
    // && ((event.authorId === sessionUser.id ) || (userRsvp[0] !== null)) ){
        if( isUserHost ){
            rsvpStatus = "👑 HOSTED";
        }else{
            switch ( userRsvp[0] ) {
                case "I'm Going":
                    rsvpStatus = '👍 WENT'
                    break;
                case "Maybe":
                    rsvpStatus = '🤔 MAYBE'
                    break;
                // case "Can't Go":
                //     rsvpStatus = "😢 DIDN'T GO"
                //     break;
                // case "invited":
                //     rsvpStatus = "😢 DIDN'T GO"
                    // break;
                default:
                    rsvpStatus = "😢 DIDN'T GO"
                    break;
            }
        }
    }
    else{
        if( isUserHost ){
            rsvpStatus = "👑 HOSTING"
        }
        else{
            switch ( userRsvp[0] ) {
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
    
    // function for menu popup -> delete or (remove from) event
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handleDeleteEvent = (e) => {
        setClickAction('Delete');
        dispatch(deleteEvent(event.id));
    }

    const handleDeleteRSVP = (e) => {
        setClickAction('Remove');
        if(userRsvp[1]){
            dispatch(deleteRsvp({eventId: event.id, rsvpId: userRsvp[1]}));
        }
        if(inviteIdArr.length !== 0){
            for(let inviteId of inviteIdArr){
                dispatch(deleteInvite(inviteId))
            }
        }
    }
    
    return (
        <>
            <a href={ showMenu === false && clickAction === null ? showPage : null } id="event-item" onClick={() => localStorage.setItem('usersState', JSON.stringify(usersState))} >
                <div id="photo-rsvp-container">
                    <img src={wazzap} id="event-img" alt="dummy-pic"/>
                    { rsvpStatus ? 
                        <div id="user-rsvp-details">{rsvpStatus}</div> : null
                    }
                    <div id="event-date-details"> </div>
                    { event.authorId === sessionUser.id || userRsvp !== 'Invited' ? 
                        <div id="event-item-option-btn" onClick={() => setShowMenu(true)} > 
                            <img src={dots} id="dots-options-btn" alt="options-btn-event-item" />
                        </div> : null
                    }
                    { showMenu && (event.authorId === sessionUser.id ?
                        <div className="option-menu-event-item" onClick={handleDeleteEvent}>
                            <p className="arrow-emojji">⏏︎</p>
                            <p className="menu-remove"><span className="remove-emoji">❌</span> Delete Event </p>
                        </div> :
                        <div className="option-menu-event-item" onClick={handleDeleteRSVP}>
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