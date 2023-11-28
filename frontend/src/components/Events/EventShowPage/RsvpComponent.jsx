import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createRsvp, updateRsvp } from "../../../store/rsvps";
import { useHistory } from "react-router";
import { createComment } from "../../../store/comments";


export function RsvpComponent ({ event }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userRsvpId = event.userRsvp;
    const rsvps = useSelector(state => state.rsvps)
    const userRsvp = rsvps[userRsvpId];
    const [rsvp, setRsvp] = useState(userRsvp)
    let hideRsvpInst = false;
    // Inside your component or where you handle state
    const [isHovered, setIsHovered] = useState(false);
    const date = event ? new Date(event.dateTime) : ''
    const today = new Date()
    const eventDone = event ? date < today : '';
    // console.log(eventDone);
    // console.log(date)
    
    

    const handleHover = (hoverState) => {
        setIsHovered(hoverState);
    };
    const response = {
        "I'm Going": "👍",
        "going": "👍",
        "Maybe": "🤔",
        "Can't Go": "😢"
    }
    const toggleRsvpInst = (e) => {
        e.preventDefault();
        hideRsvpInst === true ? hideRsvpInst = false : hideRsvpInst = true;
    }

    const handleClick = (e) => {
        if (userRsvp) {
            dispatch(updateRsvp({status: e.currentTarget.value, userId: sessionUser.id, eventId: event.id, id: userRsvpId})).then( rsvp => setRsvp(rsvp))
            // dispatch(createComment({body: 'updated ' + e.currentTarget.value, authorId: sessionUser.id, eventId: event.id, commentType: 'rsvp'}))
            dispatch(createComment({body: e.currentTarget.value, authorId: sessionUser.id, eventId: event.id, commentType: 'rsvp'}))
        }else{
            dispatch(createRsvp({status: e.currentTarget.value, userId: sessionUser.id, eventId: event.id})).then( rsvp => setRsvp(rsvp))
            dispatch(createComment({body: e.currentTarget.value, authorId: sessionUser.id, eventId: event.id, commentType: 'rsvp'}))
            // dispatch(createComment({body: 'rsvped ' + e.currentTarget.value, authorId: sessionUser.id, eventId: event.id, commentType: 'rsvp'}))
        }
    }
    const handleEdit = (e) => {
        !eventDone && setRsvp(); //if event not past set RSVP to nothing -> trigger rsvp options
        // setRsvp();
    }

    return (
        
            rsvp ? (
                 <>
                 <button className="rsvp-btn" onClick={handleEdit} onMouseEnter={() => handleHover(true)}
    onMouseLeave={() => handleHover(false)}>
                    <div className={`hover-edit-instructions ${isHovered ? 'visible' : ''}` } >
                        <div className="rsvp-edit-instructions" >
                            Click to change
                        </div>
                    </div>
                    <div className="emoji-rsvp-btn" id="rsvp-rsp-show">
                        {response[rsvp.status]}
                    </div>
                    <div> {rsvp.status}</div>
                </button>
                 </>
            ) : (
                <>
                    <div className="rsvp-options-btns-container-show" >
                        
                        <button className="rsvp-btn" value="I'm Going" onClick={handleClick}>
                            <div className="emoji-rsvp-btn">
                                👍
                            </div>
                            <div>I'm Going</div>
                        </button>
                        <button className="rsvp-btn" value="Maybe" onClick={handleClick}>
                            <div className="emoji-rsvp-btn">
                                🤔
                            </div>
                            <div>Maybe</div>
                        </button>
                        <button className="rsvp-btn" value="Can't Go"onClick={handleClick}>
                            <div className="emoji-rsvp-btn">
                                😢
                            </div>
                            <div>Can't Go</div>
                        </button>
                    </div>
                </>
            )
    )
}