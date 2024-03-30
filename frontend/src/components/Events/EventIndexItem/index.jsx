// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import dots from "../../../images/dots-horizontal-svgrepo-com.png"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

export const EventIndexItem = ({ event, usersState }) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const [showOptions, setShowOptions] = useState(false)
    // console.log(showOptions)
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
    // console.log(date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" "), eventDate)
    // console.log(date.getTimezoneOffset())
    console.log(showMenu)
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
            switch (userRsvp) {
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
            switch (userRsvp) {
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
    // const openMenu = () => {
    //     // if (showMenu) return;
        // setShowMenu(true);
    //     console.log(showMenu)
    // };
    
    useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = () => {
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    
    return (
        <>
            <a href={ showMenu === false ? showPage : null } id="event-item" onClick={() => localStorage.setItem('usersState', JSON.stringify(usersState))} >
                <div id="photo-rsvp-container">
                    <img src={wazzap} id="event-img" alt="dummy-pic"/>
                    { rsvpStatus ? 
                        <div id="user-rsvp-details">{rsvpStatus}</div> : null
                    }
                    <div id="event-date-details"> </div>
                    { event.authorId !== sessionUser.id  && userRsvp? 
                        <div id="event-item-option-btn" onClick={() => setShowMenu(true)} on> 
                            <img src={dots} id="dots-options-btn" alt="options-btn-event-item" />
                        </div> : null
                    }
                    { event.dateTime ? 
                        <div id="event-item-date"> {soon ? soon : eventDate} </div> :
                        <div id="event-item-date"> TBD </div> 
                    }
                    {/* <div id="event-item-option-menu" onClick={handleLeaveEvent()}>{showOptions? 'Remove Me From Event': ''}</div> */}
                </div>
                <div className="details">
                    <h2 id="event-item-title">{event.title}</h2>
                    <h2 id="event-item-host">Hosted by {event.host}</h2>
                </div>
            </a>
            { showMenu &&
                <div className="option-menu-event-item">
                    <p>Remove me from event</p>
                </div>
            }
        </>
        
    )
}