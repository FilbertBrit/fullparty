// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import dots from "../../../images/dots-horizontal-svgrepo-com.png"
// import { useState } from "react";
import { useSelector } from "react-redux";

export const EventIndexItem = ({ event }) => {
    const sessionUser = useSelector(state => state.session.user);
    // const [showOptions, setShowOptions] = useState(false)
    const showPage = '/events/' + event.id;
    const userRsvp = event.userRsvp;
    const today = new Date();
    let rsvpStatus= '';
    let date = new Date(event.dateTime);
    let eventTime = date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" ")
    let time = eventTime[0].slice(0,1) + eventTime[1].toLocaleLowerCase()
    let eventDate = date.toString().split(' ')[0] + ' ' + (date.getMonth() + 1) + '/' + date.getDate() + '・' + time;
    // console.log(date.toLocaleTimeString('en-US', { timeZone: 'EST' }).split(" "), eventDate)
    // console.log(date.getTimezoneOffset())


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
                default:
                    break;
            }
        }
    }

    // const handleLeaveEvent = () => {

    // }
    
    return (
        
        <a href={ showPage } id="event-item" >
            <div id="photo-rsvp-container">
                <img src={wazzap} id="event-img" alt="dummy-pic"/>
                { rsvpStatus ? 
                    <div id="user-rsvp-details">{rsvpStatus}</div> : null
                }
                <div id="event-date-details"> </div>
                { event.authorId !== sessionUser.id  && userRsvp? 
                    <div id="event-item-option-btn" onClick={()=>{console.log('hi')}}> 
                        <img src={dots} id="dots-options-btn" alt="options-btn-event-item"/>
                    </div> : null
                }
                { event.dateTime ? 
                    <div id="event-item-date"> {eventDate} </div> :
                    <div id="event-item-date"> TBD </div> 
                }
                {/* <div id="event-item-option-menu" onClick={handleLeaveEvent()}>{showOptions? 'Remove Me From Event': ''}</div> */}
            </div>
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">Hosted by {event.host}</h2>
            </div>
        </a>
    )
}