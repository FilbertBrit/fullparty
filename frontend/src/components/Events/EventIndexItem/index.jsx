// import { useDispatch } from "react-redux"
import "./EventIndexItem.css"
import wazzap from "../../../images/wazzap-halloween.jpeg"
import { useState } from "react";
import { useSelector } from "react-redux";

export const EventIndexItem = ({ event }) => {
    const sessionUser = useSelector(state => state.session.user);
    const showPage = '/events/' + event.id;
    const userRsvp = event.userRsvp;
    const today = new Date();
    let rsvpStatus= '';

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

    
    return (
        
        <a href={ showPage } id="event-item" >
            <img src={wazzap} id="event-img" alt="dummy-pic"/>
            <div id="user-rsvp-details">{rsvpStatus}</div>
            <div className="details">
                <h2 id="event-item-title">{event.title}</h2>
                <h2 id="event-item-host">Hosted by {event.host}</h2>
            </div>
        </a>
    )
}