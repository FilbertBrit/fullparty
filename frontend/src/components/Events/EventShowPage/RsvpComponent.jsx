import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createRsvp, updateRsvp } from "../../../store/rsvps";
import { useHistory } from "react-router";


export function RsvpComponent ({ event }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userRsvpId = event.userRsvp;
    const rsvps = useSelector(state => state.rsvps)
    const userRsvp = rsvps[userRsvpId];
    //come back to refactor rsvp to hold status of rsvp
    const [rsvp, setRsvp] = useState(userRsvp)
    const response = {
        "I'm Going": "👍",
        "going": "👍",
        "Maybe": "🤔",
        "Can't Go": "😢"
    }

    const handleClick = (e) => {
        userRsvp ? (
            dispatch(updateRsvp({status: e.currentTarget.value, userId: sessionUser.id, eventId: event.id, id: userRsvpId})).then( rsvp => setRsvp(rsvp))
        ) : (
            dispatch(createRsvp({status: e.currentTarget.value, userId: sessionUser.id, eventId: event.id})).then( rsvp => setRsvp(rsvp))
        )
    }
    const handleEdit = (e) => {
        setRsvp();
    }

    return (
        
            rsvp ? (
                 <>
                 <button className="rsvp-btn" onClick={handleEdit}>
                    <div className="emoji-rsvp-btn" id="rsvp-rsp-show">
                        {response[rsvp.status]}
                    </div>
                    <div> {rsvp.status}</div>
                </button>
                 </>
            ) : (
                <>
                    <div className="rsvp-options-btns-container-show">
                        
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