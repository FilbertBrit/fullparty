import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"


export function RsvpComponent ({ event }) {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [status, setStatus] = useState();

    const handleGoing = (e) => {
        setStatus('Going');
    }
    const handleMaybe = (e) => {
        setStatus('Maybe');
    }
    const handleCant = (e) => {
        setStatus("Can't Go");
    }

    console.log(event.rsvpList, sessionUser)

    return (
        <>
            <div className="rsvp-options-btns-container">
                <div className="rsvp" onClick={handleGoing}>
                    <div className="emoji-rsvp">
                        👍
                    </div>
                    <h4>I'm Going</h4>
                </div>
                <div className="rsvp" onClick={handleMaybe}>
                    <div className="emoji-rsvp">
                        🤔
                    </div>
                    <h4>Maybe</h4>
                </div>
                <div className="rsvp" onClick={handleCant}>
                    <div className="emoji-rsvp">
                        😢
                    </div>
                    <h4>Can't Go</h4>
                </div>
            </div>
        </>
    )
}